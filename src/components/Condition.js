import React from 'react'
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

const Condition = ({ ID, setW_condition, setcomponent, element }) => {

	if (ID >= 200 && ID <= 232) {

		const el = <Storm height="60" width="60" />
		element.push({ id: ID })
		setcomponent(el)
		setW_condition('Thunderstorm')

	} else if (ID >= 300 && ID <= 321) {

		const el = <Drizzle height="60" width="60" />
		element.push({ id: ID })
		setcomponent(el)
		setW_condition('Drizzle')


	} else if (ID >= 500 && ID <= 531) {


		const el = <Rain height="60" width="60" />
		element.push({ id: ID })
		setcomponent(el)
		setW_condition('Rain')

	} else if (ID >= 600 && ID <= 622) {

		const el = <Snowflake height="60" width="60" />
		element.push({ id: ID })
		setcomponent(el)
		setW_condition('Snow')

	} else if (ID >= 701 && ID <= 781) {

		const el = <WindyWeather height="60" width="60" />
		element.push({ id: ID })
		setcomponent(el)

		const condition_ = (leftElement, rightElement, returnValue) =>{

			if (leftElement === rightElement){
				return returnValue
			} else {
				//do your other thing
				return
			}
		}

		setW_condition(
			condition_(ID, 701, 'Mist') ||
			condition_(ID, 711, 'Smoke') ||
			condition_(ID, 721, 'Haze') ||
			condition_(ID, 731, 'sand/ dust whirls') ||
			condition_(ID, 741, 'Fog') ||
			condition_(ID, 751, 'Sand') ||
			condition_(ID, 761, 'dust') ||
			condition_(ID, 762, 'volcanic ash or ash') ||
			condition_(ID, 771, 'Squall') ||
			condition_(ID, 781, 'tornado')
		)


	} else if (ID >= 801 && ID <= 804) {

		const el = <Cloud height="60" width="60" />
		element.push({ id: ID })
		setcomponent(el)
		setW_condition('clear sky')

		const condition_ = (leftElement, rightElement, returnValue) =>{

			if (leftElement === rightElement){
				return returnValue
			} else {
				//do your other thing
				return
			}
		}
		setW_condition(
			condition_(ID, 801, 'few clouds: 11-25%') ||
			condition_(ID, 802, 'scattered clouds: 25-50%') ||
			condition_(ID, 803, 'broken clouds: 51-84%') ||
			condition_(ID, 804, 'overcast clouds: 85-100%')
		)

	} else if (ID === 800) {

		const el = <Clear_sky height="60" width="60" />
		element.push({ id: ID })
		setcomponent(el)
		setW_condition('clear sky')
	}

}

export default Condition
