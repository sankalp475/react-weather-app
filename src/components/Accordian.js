import React, { useState }from 'react'
import '../Accordian.module.css'

import {
	Cloud,
	Clear_sky,
	Storm,
	Drizzle,
	Rain,
	Snowflake,
	WindyWeather,
	dayTime,
	NighetTime,
	Humidity,
	WindSpeed,
	ThermometerUp,
	ThermometerDown,
	Arrow
} from '../icon/icon';


const Accordian = ({ W_speed,
	humidity,
	time,
	place,
	temp_c,
	temp_f,
	type,
	visibilityKM,
	condition,
	uvray,
	maxtemp_c,
	maxtemp_f,
	mintemp_c,
	mintemp_f,
	wind_dir,
	wind_degree}) => {

	const [checked, setchecked] = useState(true)

	const handelAccordianClick = (e) => {
		// console.log('clicked', e.target)
		setchecked(
			(checked)? false : true
		)
	}


	return (
		<ul>
			<li onClick={handelAccordianClick}>
				<input type="checkbox" checked={checked} />
				<i></i>
				<h2>{ time },    { place }</h2>
				{/* <h2>Accordian</h2> */}
				<div >
					<div className='info_W_'>
						<div className='element_e'>
							<div className='element_'>
								<p className='W_p_info'>temprature <span>{(type) ? temp_c+ " °C" : temp_f }</span></p>
							</div>
							<div className='element_'>
								<p className='W_p_info'>{ condition }</p>
                               <Snowflake height={50} width={50} />
							</div>
						</div>
						<div className='elementDiv_info'>
							<div className='inline'>
								<p className='W_p_info'>
								    visibility:
									<span>{ visibilityKM  } </span>
								</p>
							</div>
							<div className='inline'>
							    <p className='W_p_info'>
								    UV Index:
									<span>{uvray}</span>,
								</p>
							</div>
						</div>
					</div>
					<div className='Grid_flex_WC'>
						<div className='Grif_element1'>
							<Humidity
								height={30}
								width={30}
							/>
							<p className='W_p_info'>
								Humidity :
								<span>{humidity}</span>
							</p>
						</div>
						<div className='Grif_element2'>
						    <WindSpeed
								height={30}
								width={30}
							/>
							<p className='W_p_info'>
							    wind_speed :
								<span>{W_speed}</span>
							</p></div>
						<div className='Grif_element3'>
							<ThermometerUp
							    height={30}
								width={30}
							/>
							<p className='W_p_info'>
							    temprature Max :
								<span>{(type) ? maxtemp_c+ " °C" : maxtemp_f }</span>
							</p>

							<ThermometerDown
                             	height={30}
								width={30}
							 />
							<p className='W_p_info'>
							    temprature Min :
								<span>{(type) ? mintemp_c+ " °C" : mintemp_f }</span>
							</p>
						</div>
						<div className='Grif_element4'>
							<Arrow
								height={30}
								width={30}
								style={{ transform: `rotate(${wind_degree}deg)` }}
							/>
						    <p className='W_p_info'>
							    wind direction :
								<span>{wind_dir}</span>
							</p>
						</div>
					</div>
				</div>
			</li>
		</ul>
	)
}

export default Accordian