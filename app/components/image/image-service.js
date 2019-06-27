// @ts-ignore
const imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});
let _state = {
	img: []
}
let _subscribers = {
	img: []
}
function setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}


export default class ImageService {

	getImg(url) {
		imgApi.get(url)
			.then(res => {
				setState(res.data.url)
			})
			.catch(err => console.error(err))

	}
	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	get img() {
		return _state.img.map(i => new URL(i))
	}
}
