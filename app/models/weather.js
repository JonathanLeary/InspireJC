export default class Weather {
  constructor(data) {
    this.city = data.name
    this.kelvin = data.main.temp
  }

}
