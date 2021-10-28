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


import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import osm from "./osm-providers";
import  '../resources/images/marker.png';


const Weather = ({ position, zoom, weatherInfoArray }) => {
	const [component, setcomponent] = useState(<Storm height="60" width="60" />)
	const ID = weatherInfoArray.wetherID

	// const storm = <Storm />


	useEffect(() => {
		const element = []

		if (weatherInfoArray.wetherID >= 200 && weatherInfoArray.wetherID <= 232) {

			const el = <Storm height="60" width="60" />
			element.push({ id: weatherInfoArray.wetherID })
			setcomponent(el)


		} else if (weatherInfoArray.wetherID >= 300 && weatherInfoArray.wetherID <= 321) {

			const el = <Drizzle height="60" width="60" />
			element.push({ id: weatherInfoArray.wetherID })
			setcomponent(el)


		} else if (weatherInfoArray.wetherID >= 500 && weatherInfoArray.wetherID <= 531) {


			const el = <Rain height="60" width="60" />
			element.push({ id: weatherInfoArray.wetherID })
			setcomponent(el)

		} else if (weatherInfoArray.wetherID >= 600 && weatherInfoArray.wetherID <= 622) {

			const el = <Snowflake height="60" width="60" />
			element.push({ id: weatherInfoArray.wetherID })
			setcomponent(el)

		} else if (weatherInfoArray.wetherID >= 701 && weatherInfoArray.wetherID <= 781) {

			const el = <WindyWeather height="60" width="60" />
			element.push({ id: weatherInfoArray.wetherID })
			setcomponent(el)


		} else if (weatherInfoArray.wetherID >= 801 && weatherInfoArray.wetherID <= 804) {

			const el = <Cloud height="60" width="60" />
			element.push({ id: weatherInfoArray.wetherID })
			setcomponent(el)

		} else if (weatherInfoArray.wetherID === 800) {

			const el = <Clear_sky height="60" width="60" />
			element.push({ id: weatherInfoArray.wetherID })
			setcomponent(el)


		}


		console.log(element)
	}, [ID]);

	const markerIcon = new L.Icon({
		iconUrl: require("resources/images/marker.png"),
		iconSize: [40, 40],
		iconAnchor: [17, 46], //[left/right, top/bottom]
		popupAnchor: [0, -46], //[left/right, top/bottom]
	});

	return (
		<div className="_weather_info_">
			<div className="laft_container">
				<div className="_weather_condition_">
					<div className='ng-info'>
						<div className='_weather_condition__Icon'>
							{component}
						</div>
						<div className='_weather_condition__Temp'>
							<p>19</p>
							<p>°C</p>
						</div>
					</div>
					<div>
						<p>
							<span> Precipitation</span>: <span>30%</span>
						</p>
						<p>
							<span> Humidity</span>:<span>81%</span>
						</p><p>
							<span>Wind</span>: =<span>18 km/h</span>
						</p>
					</div>
				</div>

				<div className="_weather_name_">
					right
				</div>
			</div>
			<div className="right_container">
				<div className="wether_map">
					<MapContainer center={position} zoom={zoom} scrollWheelZoom={true}>
						<TileLayer
							url={osm.maptiler.url}
							attribution={osm.maptiler.attribution}
						/>
						<Marker position={position} icon={markerIcon} >
							<Popup>
								<b>

								</b>
							</Popup>
						</Marker>
					</MapContainer>,
				</div>
			</div>
		</div>
	)
}

export default Weather
