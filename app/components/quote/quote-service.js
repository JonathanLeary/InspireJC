
import Quote from "../../models/quote.js";


// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});
let _state = {
	quote: {}
}
let _subscribers = {
	quote: []
}
function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}


export default class QuoteService {

	get quote() {
		return _state.quote
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}
	getQuote() {
		console.log("quote Recieved")
		_quoteApi.get().then(res => {
			let DataQuote = res.data
			console.log(DataQuote)
			let quote = new Quote(DataQuote.quote)
			_setState('quote', quote)
		})
	}
}
