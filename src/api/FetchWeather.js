
// import React from 'react'
import axios from 'axios'


const FetchWeather = async ({ Location, KEY, UpdateWeather, setcoords }) => {



	axios.get(
		`http://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=${KEY}`
	).then((res) => {
		// console.log(res.data.weather[0].id)
		const data = res.data
		UpdateWeather({ data: res.data, wetherID: res.data.weather[0].id })
		setcoords([data.coord.lat, data.coord.lon])
		console.log([data.coord.lat, data.coord.lon])
	}).catch((error) => {
		console.log(error.massage)
	})

}

export default FetchWeather
