// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Weather from './components/Weather';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	// Link
} from "react-router-dom";

import Search from './components/Search';
import FetchWeather from './api/FetchWeather';
import { useEffect, useState } from 'react';
// import Weathe_tabs from './components/Weathe_tabs';
// import Weather_forcast from './components/Weather_forcast';

const App = () => {
	const [Location, setLocation] = useState('')
	const [Location_Arry, setLocation_Arry] = useState([])
	const [WeatherArray, setWeatherArray] = useState([])
	const [coords, setCoords] = useState({ lat: -78.1586, lng: 16.4063 })
	const [Forcast, setForcast] = useState([])
	const [Current, setCurrent] = useState([])


	const [Color1, setColor1] = useState('#4338ca')
	const [VALUE1, setVALUE1] = useState(true)
	const [VALUE2, setVALUE2] = useState(false)
	const [Color2, setColor2] = useState('')

    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
	// const API_URL = process.env.REACT_APP_URL



	window.onload = () => {
		const getStoreItems = localStorage.getItem('Location_name')
		console.log(getStoreItems)
		setLocation(getStoreItems)
		FetchWeather(
			{
				Location: getStoreItems,
			    KEY_CODE: API_KEY,
				setcoords: (setcoords) => { setCoords(setcoords) },
				Location_Arry: (setcoords) => { setLocation_Arry(setcoords) },
				setcoords: (setcoords) => { setCoords(setcoords) },
				Location_Arry: (Location_Arry) => { setLocation_Arry(Location_Arry) },
				Forcast: (Forcast_data) => { setForcast(Forcast_data) },
				Current: (Current) => { setCurrent(Current) }
			}
		)
    }

	useEffect(() => {

		const getStoreItems = localStorage.getItem('Location_name');
		console.log(getStoreItems);
		FetchWeather(
			{
				Location: getStoreItems,
				KEY_CODE: API_KEY,
				setcoords: (setcoords) => { setCoords(setcoords) },
                Location_Arry: (Location_Arry) => { setLocation_Arry(Location_Arry) },
				Forcast: (Forcast) => { setForcast(Forcast) },
				Current: (Current) => { setCurrent(Current) }

			}
		);

	}, [Location])

	// console.log(process.env.REACT_APP_GOOGLE_MAP_KEY)

	const setchangeEvent_to_c = () => {
		setColor1("#4338ca")
		setColor2('')
		setVALUE1(true)
		setVALUE2(false)
	}

	const setchangeEvent_to_F = () => {
		setColor1("")
		setColor2('#4338ca')
		setVALUE1(false)
		setVALUE2(true)
	}

	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/">
						<div className="container" content="area_content_container">
							<div className='switch'>
								<div className='master_overlay'></div>
								<div className='switch_cover'>
									<div className='celcious' style={{ background: Color1 , color: (VALUE1)? "#fff": "#000" }} onClick={setchangeEvent_to_c}>°C</div>
									<div className='feranheight' style={{ background: Color2 , color: (VALUE2)? "#fff": "#000" }}  onClick={setchangeEvent_to_F}>F</div>
								</div>
							</div>
							<Search
								setLocation={ setLocation }
								Location={ Location }
							/>
							<Weather
								Coordinates={coords}
								zoom={5}
								icon="01n"
								forcast={Forcast}
								current={Current}
								location={Location_Arry}
								type={VALUE1}
							/>
			            </div>
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
