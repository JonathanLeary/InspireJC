import WeatherService from "./weather-service.js";


let _weatherService = new WeatherService()

function drawWeather() {
	document.querySelector('#weather').innerHTML = _weatherService.Weather.Template
	console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)
}


export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

}
