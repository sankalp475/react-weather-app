import React from 'react'
// import { Cloud } from '../icon/icon'
import {
	Cloud,
	Clear_sky,
	Storm,
	Drizzle,
	Rain,
	Snowflake,
	Windy_Weather,
} from '../icon/icon';


const Weather = ({ weather }) => {
	// console.log(weather.weather[0].id)

	const WeatherIcons = [
		{id:200, svgICON: <Storm height="70" width="70" />},
		{id:201, svgICON: <Storm height="70" width="70" />},
		{id:202, svgICON: <Storm height="70" width="70" />},
		{id:210, svgICON: <Storm height="70" width="70" />},
		{id:211, svgICON: <Storm height="70" width="70" />},
		{id:212, svgICON: <Storm height="70" width="70" />},
		{id:221, svgICON: <Storm height="70" width="70" />},
		{id:230, svgICON: <Storm height="70" width="70" />},
		{id:231, svgICON: <Storm height="70" width="70" />},
		{id:232, svgICON: <Storm height="70" width="70" />},

		{id:300, svgICON: <Drizzle height="70" width="70" />},
		{id:301, svgICON: <Drizzle height="70" width="70" />},
		{id:302, svgICON: <Drizzle height="70" width="70" />},
		{id:310, svgICON: <Drizzle height="70" width="70" />},
		{id:311, svgICON: <Drizzle height="70" width="70" />},
		{id:312, svgICON: <Drizzle height="70" width="70" />},
		{id:313, svgICON: <Drizzle height="70" width="70" />},
		{id:314, svgICON: <Drizzle height="70" width="70" />},
		{id:321, svgICON: <Drizzle height="70" width="70" />},


		{id:500, svgICON:<Rain height="70" width="70" />},
		{id:501, svgICON:<Rain height="70" width="70" />},
		{id:502, svgICON:<Rain height="70" width="70" />},
		{id:503, svgICON:<Rain height="70" width="70" />},
		{id:504, svgICON:<Rain height="70" width="70" />},
		{id:511, svgICON:<Rain height="70" width="70" />},
		{id:520, svgICON:<Rain height="70" width="70" />},
		{id:521, svgICON:<Rain height="70" width="70" />},
		{id:522, svgICON:<Rain height="70" width="70" />},
		{id:531, svgICON:<Rain height="70" width="70" />},

		{id:600, svgICON:<Snowflake height="70" width="70" />},
		{id:601, svgICON:<Snowflake height="70" width="70" />},
		{id:602, svgICON:<Snowflake height="70" width="70" />},
		{id:611, svgICON:<Snowflake height="70" width="70" />},
		{id:612, svgICON:<Snowflake height="70" width="70" />},
		{id:613, svgICON:<Snowflake height="70" width="70" />},
		{id:615, svgICON:<Snowflake height="70" width="70" />},
		{id:616, svgICON:<Snowflake height="70" width="70" />},
		{id:620, svgICON:<Snowflake height="70" width="70" />},
		{id:621, svgICON:<Snowflake height="70" width="70" />},
		{id:622, svgICON:<Snowflake height="70" width="70" />},


		{id:701, svgICON:<Windy_Weather height="70" width="70" />},
		{id:711, svgICON:<Windy_Weather height="70" width="70" />},
		{id:721, svgICON:<Windy_Weather height="70" width="70" />},
		{id:731, svgICON:<Windy_Weather height="70" width="70" />},
		{id:741, svgICON:<Windy_Weather height="70" width="70" />},
		{id:751, svgICON:<Windy_Weather height="70" width="70" />},
		{id:761, svgICON:<Windy_Weather height="70" width="70" />},
		{id:762, svgICON:<Windy_Weather height="70" width="70" />},
		{id:771, svgICON:<Windy_Weather height="70" width="70" />},
		{id:781, svgICON:<Windy_Weather height="70" width="70" />},


		{id:800, svgICON:<Cloud height="70" width="70" />},
		{id:801, svgICON:<Cloud height="70" width="70" />},
		{id:802, svgICON:<Cloud height="70" width="70" />},
		{id:803, svgICON:<Cloud height="70" width="70" />},
		{id:804, svgICON:<Cloud height="70" width="70" />}
	];


	return (
		<div className="_weather_info_">
			<div className="laft_container">
				<div className="_weather_condition_">
					<div className='ng-info'>
						<div className='_weather_condition__Icon'>
                             
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

			    </div>
			</div>
		</div>
	)
}

export default Weather
