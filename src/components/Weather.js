import React, { useState, useEffect } from 'react'
import {
	Cloud,
	Clear_sky,
	Storm,
	Drizzle,
	Rain,
	Snowflake,
	WindyWeather,
	// renderIcon
} from '../icon/icon';
import ForcastCard from './ForcastCard';
import Accordian from './Accordian';

// import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
// import Condition from './Condition';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import osm from "./osm-providers";
// // import Popup from 'react-leaflet-editable-popup'
// import Map from './Map';



const Weather = ({ Coordinates, zoom, forcast, current, location, type }) => {
	// const [component, setcomponent] = useState(<Storm height="60" width="60" />)
	// const [W_condition, setW_condition] = useState('')
	// const [seunset_sunrize, setseunset_sunrize] = useState('')

	const [Localdate, setLocaldate] = useState('2021-11-04 17:30')
	const [Feels_like, setFeels_like] = useState('')
	const [Celcious, setCelcious] = useState(true)
	const [Farenheight, setFarenheight] = useState(false)
	const [feelslike_c, setfeelslike_c] = useState('')
	const [feelslike_f, setfeelslike_f] = useState('')
	const [is_day, setis_day] = useState('')
	const [param_Change, setparam_Change] = useState('millibars')

	const [getForcast, setgetForcast] = useState({ display: "none" })
	const [is_display, setis_display] = useState(true)
	const [changeValue, setchangeValue] = useState('get')

	const changeEventHandel = () => {
		setparam_Change('millibars')
	}
	const changeEventHandel1 = () => {
		setparam_Change('inches')
	}

	useEffect(
		() => {

			// const D = new Date(Localdate)
			// console.log(D.getFullYear() + "-" + D.getUTCMonth()+ "-" + D.getDate())

			setLocaldate(location.localtime)
			setfeelslike_c(current.feelslike_c + " °C")
			setfeelslike_f(current.feelslike_f)
			setis_day(current.is_day)


		},
		[current, forcast, location]);


	// const getStoreItems = localStorage.getItem('Location_name')

	const D = new Date("2021-11-04 17:30");

	const handelGetForcast = () => {
		setgetForcast({
			display: (is_display) ? 'block' : 'none',
		})
		setis_display((is_display) ? false : true)

		setchangeValue(
			(is_display) ? 'hide' : 'get'
		)
	}

	const styles = {
		containerStyle: getForcast,
	};

	const { containerStyle } = styles;
	console.log(type)

	return (
		<div className="_weather_info_">

			<div className="laft_container">
				<h1 className='W_heading'>Today's Forecast for {location?.name}, {location?.country}</h1>
				<div className='top_info'>
					<div className='left'>
						<Drizzle height={130} width={130} />
					</div>
					<div className='wether_info_card'>
						<div className='W_info'>
							<p className='W_p_info'>localtime:<span> {Localdate}</span></p>
							<p className='W_p_info'>Feels_like:<span> {(type) ? feelslike_c : feelslike_f}</span></p>
							<p className='W_p_info'>is_day : <span> {(is_day === 1) ? "day time" : "night time"}</span></p>
							<p className='W_p_info'>sunrise : <span>{forcast[0]?.astro?.sunrise}</span></p>
							<p className='W_p_info'>sunset : <span>{forcast[0]?.astro?.sunset}</span></p>
							<p className='W_p_info'>latitude_longitude : <span>[{location?.lat}, {location?.lon}]</span></p>
							<p className='W_p_info'>visibility in kilometer  : <span> {current?.vis_km} </span></p>
						</div>
						<div className='W_info_1'>
							<p className='W_p_info'>Location:<span> {location?.name}, {location?.country} </span></p>
							<p className='W_p_info'>Condition:<span> {current?.condition?.text} - weather</span></p>
							<p className='W_p_info'>Temprature : <span> {(type) ? current?.temp_c + " °C" : current?.temp_f}</span></p>
							<p className='W_p_info'>Wind : <span> {current?.wind_kph + " km/h"}</span></p>
							<p className='W_p_info'>Wind direction : <span> {current?.wind_dir},  {current?.wind_degree} - degree</span></p>
							<p className='W_p_info'>Pressure in {param_Change} : <span> {(param_Change === "millibars") ? (current?.pressure_mb) : (current?.pressure_in)} </span>      <button className='keyVAL' onClick={changeEventHandel}>mb</button>|<button className='keyVAL' onClick={changeEventHandel1}>in</button> </p>
							<p className='W_p_info'>humidity : <span> {current?.humidity}%</span></p>
						</div>
					</div>
				</div>

				<div className='element'>
					<div className='GETFORCAST'>
						<h1 className='W_heading2'>Hourly Forecast</h1>
						<button onClick={handelGetForcast}>{changeValue} Hourly Forecast </button>
					</div>
					<div className='forcast' style={containerStyle}>
						<div className='card_container'>
							{forcast?.map(items => {
								return (
									<>
										<div className='label'>{items.date}</div>
										{items?.hour.map((hours) => {
											return (
												<Accordian
													time={hours?.time}
													place={`${location?.name}, ${location?.country}`}
													uvray={hours?.uv}
													visibilityKM={hours?.vis_km}
													visibilitymiles={hours?.vis_miles}
													temp_c={hours?.temp_c}
													temp_f={hours?.temp_f}
													type={type}
													condition={hours?.condition?.text}
													humidity={hours?.humidity}
													W_speed={hours?.wind_kph}
													wind_degree={hours?.wind_degree}

													maxtemp_c={items?.day?.maxtemp_c}
													maxtemp_f={items?.day?.maxtemp_f}
													mintemp_c={items?.day?.mintemp_c}
													mintemp_f={items?.day?.mintemp_f}
													wind_dir={hours?.wind_dir}
													wind_degree={hours?.wind_degree}
												/>
											)
										})}
									</>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Weather
