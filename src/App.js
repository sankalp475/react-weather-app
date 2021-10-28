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
	const [weather, UpdateWeather] = useState([])

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
			    UpdateWeather: (setsata) => {
					UpdateWeather(setsata)
				},
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
				UpdateWeather: (setsata) => {
					UpdateWeather(setsata);
				},
			}
		);

	}, [Location])

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
								weather={weather}
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
