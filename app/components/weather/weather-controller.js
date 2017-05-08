function WeatherController(){
	var weatherService = new WeatherService();
	
	this.getWeather = function getWeather(){
		weatherService.getWeather(draw)

	}
		function draw(weather){
			console.log(weather)
			var template =
			`
			<h3>${(Math.round(weather.main.temp-273.15)*1.8+32)}°<h3>
			<h4>${weather.name}</h4>
			
			`
			
		document.getElementById("weather").innerHTML = template
		}
		//What can you do with this weather object?

this.getWeather()
}