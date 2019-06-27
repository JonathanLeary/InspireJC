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
	get img() {
		return _state.img
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getImg(url) {
		imgApi.get(url)
			.then(res => {
				setState('img', res.data.url)
			})
	}
}
