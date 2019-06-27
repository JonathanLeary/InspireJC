export default class Weather {
  constructor(data) {
    this.city = data.name
    this.kelvin = data.main.temp
  }
  get Template() {
    return `		
    <h4>${this.city}</h4>
		<p>${this.kelvin}</p>
    `

  }
}
