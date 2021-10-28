
// import React from 'react'
import axios from 'axios'


const FetchWeather = async ({ Location, KEY, UpdateWeather}) => {

	axios.get(
		`http://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=${KEY}`
	).then((res) => {
		console.log(res.data.weather[0].icon)
		const data = res.data
		UpdateWeather({...data, data: res.data })
	}).catch((error) => {
		console.log(error.massage)
	})

}

export default FetchWeather
