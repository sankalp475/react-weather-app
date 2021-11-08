// import React, { useState } from 'react'



const Search = ({ setLocation }) => {






	const handleKeyDown = (e) => {
		if (e.keyCode === 13) {

			e.preventDefault();
			const __Location__Name__ = e.target.value;
			const store = localStorage.setItem('Location_name', __Location__Name__)
			const getStoreItems = localStorage.getItem('Location_name')
			console.log(getStoreItems)
			setLocation(getStoreItems)
			console.log('done')

		}
	}

	return (
		<div >
			<div className="box" >
				<form name="search" >
					<input
						type="text"
						className="input"
						onKeyDown={e => handleKeyDown(e)}
						placeholder="Type Location and press enter"
					/>
				</form>
			</div>
		</div>
	)
}

export default Search
