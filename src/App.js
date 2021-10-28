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
import Weathe_tabs from './components/Weathe_tabs';
import Weather_forcast from './components/Weather_forcast';

const App = () => {
	const [Location, setLocation] = useState('')
	const [weatherArray, UpdateWeather] = useState([])

	const [coords, setCoords] = useState([-78.1586, 16.4063])

    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
	// const API_URL = process.env.REACT_APP_URL



	window.onload = () => {
		const getStoreItems = localStorage.getItem('Location_name')
		console.log(getStoreItems)
		setLocation(getStoreItems)
		FetchWeather(
			{
				Location: getStoreItems,
			    KEY: API_KEY,
			    UpdateWeather: (setdata) => {
					UpdateWeather(setdata)
				},
				setcoords: (setcoords) => {
					setCoords(setcoords)
				}
			}
		)
    }

	useEffect(() => {

		const getStoreItems = localStorage.getItem('Location_name');
		console.log(getStoreItems);
		FetchWeather(
			{
				Location: getStoreItems,
				KEY: API_KEY,
				UpdateWeather: (setdata) => {
					UpdateWeather(setdata);
				},
				setcoords: (setcoords) => {
					setCoords(setcoords)
				}

			}
		);

	}, [Location])

	// console.log(<Navbar />)

	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/">
						<div className="container" content="area_content_container">
							<Search
								setLocation={ setLocation }
								Location={ Location }
							/>
							<Weather
								weatherInfoArray={weatherArray}
								position={coords}
								zoom={45}
							/>
							<Weathe_tabs

							/>
							<Weather_forcast

							/>
			            </div>
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
