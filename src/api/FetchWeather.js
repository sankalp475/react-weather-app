import axios from 'axios'


const FetchWeather = async ({ Location, KEY_CODE, setcoords, Location_Arry, Forcast, Current }) => {

    try {
		axios.get(
			`https://api.weatherapi.com/v1/forecast.json?key=${KEY_CODE}&q=${Location}&days=7&aqi=yes&alerts=yes`
		).then((res) => {
			console.log(res.data);
			Location_Arry(res.data.location)
			Forcast(res.data.forecast.forecastday)
			Current(res.data.current)
			setcoords({lat: res.data.location.lat , lng: res.data.location.lon })
		})
	} catch (error) {
       console.log(error.massage)
	}

}

export default FetchWeather
