export default class Quote {
  constructor(data) {
    this.author = data.author
    this.body = data.body
  }
  get Template() {
    return `
  	<h6>${this.body}</h6>
    <p>${this.author}</p>
    `
  }
}