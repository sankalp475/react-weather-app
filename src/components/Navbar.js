import React from 'react'

const Navbar = () => {

	const redirect = () => {
		const repo_url = `https://github.com/sankalp475/react-weather-app`
		window.location.href = repo_url
	}
	return (
		<nav>
			<div className="container">
				<div className="brand">
					<svg className="icon" xmlns="http://www.w3.org/2000/svg" id="Layer_1" x="0" y="0" version="1.1" viewBox="0 0 128 128"  space="preserve">
						<path
							fill="#fff"
							d="M76,51.8C70.3,38.4,57,29,41.5,29C20.8,29,4,45.8,4,66.5S20.8,104,41.5,104h60c12.4,0,22.5-10.1,22.5-22.5 S113.9,59,101.5,59c-9.9,0-18.3,6.4-21.3,15.3">
						</path>
						<path fill="#4338ca" d="M101.5 107h-60C19.2 107 1 88.8 1 66.5S19.2 26 41.5 26c16.3 0 30.9 9.7 37.3 24.6.6 1.5-.1 3.3-1.6 3.9-1.5.7-3.3-.1-3.9-1.6-5.4-12.7-17.9-21-31.7-21C22.5 32 7 47.5 7 66.5S22.5 101 41.5 101h60c10.8 0 19.5-8.7 19.5-19.5S112.3 62 101.5 62c-8.4 0-15.8 5.3-18.5 13.3-.5 1.6-2.2 2.4-3.8 1.9-1.6-.5-2.4-2.2-1.9-3.8C80.8 63 90.6 56 101.5 56c14.1 0 25.5 11.4 25.5 25.5S115.6 107 101.5 107zM124 41h-12.6c-.5-5.4-2.5-10.4-5.6-14.5l8.7-8.7c1.2-1.2 1.2-3.1 0-4.2-1.2-1.2-3.1-1.2-4.2 0l-8.6 8.6c-4-3.4-9.1-5.7-14.6-6.4V4c0-1.7-1.3-3-3-3s-3 1.3-3 3v11.6c-3.3.3-6.4 1.1-9.4 2.5-1.5.7-2.1 2.5-1.4 4s2.5 2.1 4 1.4c2.9-1.4 6.1-2.1 9.3-2.1 12.1 0 22 9.9 22 22 0 1.2-.1 2.5-.3 3.7-.3 1.6.8 3.2 2.5 3.5.2 0 .3 0 .5 0 1.4 0 2.7-1 3-2.5.1-.4.1-.8.1-1.1H124c1.7 0 3-1.3 3-3S125.7 41 124 41z"></path>
					</svg>

					<p className="brandname">React-Weather-Appp</p>
				</div>
				<div className="icon">
					<button className="neon-glow" onClick={redirect}>
						<svg className="neon"  fill="#4338ca" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
					</button>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
