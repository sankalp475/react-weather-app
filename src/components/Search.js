// import React, { useState } from 'react'



const Search = ({ setLocation }) => {



	// stiling for input box
	const box = {
		position: "absolute",
		top: "10%",
		left: "50%",
		transform: "translate(-50%,-50%)",
		margin: "20px 0px",
	}
	const input = {
		padding: "10px",
		width: "1030px",
		height: "40px",
		background: "",
		border: "2px solid #4338ca",
		// borderRadius: "50px",
		boxSizing: "border-box",
		fontFamily: "Operator Mono",
		fontSize: "20px",
		color: "#4338ca",
		outline: "none",
		transition: ".5s",
		borderRadius: "4px",
	}


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
			<div className="box" style={box}>
				<form name="search" >
					<input
						type="text"
						style={input}
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
