export default class Weather {
  constructor(data) {
    this.city = data.name
    this.kelvin = data.main.temp
    this.kelvin = Math.floor(this.kelvin - 273.15)
  }
  get Template() {
    return `		
    <h4>${this.city}</h4>
		<p>${this.kelvin}C°</p>
    `

  }
}
