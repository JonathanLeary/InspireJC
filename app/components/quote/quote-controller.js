import QuoteService from "./quote-service.js";

let _qs = new QuoteService()


function drawQuote() {

  document.querySelector('#quote').innerHTML = _qs.quote.Template
}

export default class QuoteController {
  constructor() {
    _qs.addSubscriber('quote', drawQuote)
    _qs.getQuote()
  }
}
