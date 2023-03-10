import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function Details(props) {
	const [mode, setMode] = useState(true)
	const [toggleBtn, setToggleBtn] = useState(
		'<i class="far fa-sun" ></i> Light Mode'
	)

	const location = useLocation()
	const state = location.state

	let navigate = useNavigate()
	const backHomeBtn = () => {
		navigate("/")
	}

	const toggleDarkMode = () => {
		if (mode) {
			document.documentElement.classList.add("dark")
			setToggleBtn('<i class="far fa-moon"></i> Dark Mode')
			setMode((current) => (current = !current))
		}
		if (!mode) {
			document.documentElement.classList.remove("dark")
			setToggleBtn('<i class="far fa-sun"></i> Light Mode')
			setMode((current) => (current = !current))
		}
	}

	return (
		<div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
			<div className="w-full shadow-md py-6 px-3 bg-white dark:bg-gray-700 dark:text-white mb-16">
				<div className="flex container mx-auto">
					<h1 className="font-bold text-xl">Where in the World ? 🤔</h1>
					<div className="ml-auto font-medium">
						<button
							onClick={() => toggleDarkMode()}
							dangerouslySetInnerHTML={{ __html: toggleBtn }}
						></button>
					</div>
				</div>
			</div>
			<div className="container mx-auto mb-16">
				<button
					className="px-8 py-2 bg-white text-gray-600 shadow-md rounded-lg dark:bg-gray-700 dark:text-white"
					onClick={backHomeBtn}
				>
					<i className="fa fa-arrow-left"></i> Back
				</button>
			</div>
			{state && (
				<div className="container flex mx-auto p-8 pl-0 pr-0 desktop:mx-auto laptop:flex-row laptop:mx-5 tablet:flex-row mobile:flex-col mobile:place-items-center">
					<img
						src={state.flags.svg}
						className="w-1/2 pr-8"
						alt={state.flags.alt}
					/>
					<div className="p-8 pl-0">
						<h2 className="font-bold text-2xl mb-8 laptop:text-2xl tablet:text-2xl mobile:text-xl">
							{state.name.official}
						</h2>
						<div className="grid grid-cols-2 gap-x-20 gap-y-4 desktop:grid-cols-2 tablet:grid-cols-2 mobile:grid-cols-1">
							<p>
								Common name:{" "}
								<span className="dark:text-gray-400 text-gray-700 text-sm">
									{state.name.common} {state.flag}
								</span>
							</p>
							<p>
								Population:{" "}
								<span className="dark:text-gray-400 text-gray-700 text-sm">
									{state.population}
								</span>
							</p>
							<p>
								Region:{" "}
								<span className="dark:text-gray-400 text-gray-700 text-sm">
									{state.region}
								</span>
							</p>
							<p>
								Sub Region:{" "}
								<span className="dark:text-gray-400 text-gray-700 text-sm">
									{state.subregion}
								</span>
							</p>
							<p>
								Capital:{" "}
								<span className="dark:text-gray-400 text-gray-700 text-sm">
									{state.capital + " "}
								</span>
							</p>
							<p>
								Top Level Domain:{" "}
								<span className="dark:text-gray-400 text-gray-700 text-sm">
									{state.tld}
								</span>
							</p>
							<p>
								Demonyms:{" "}
								<span className="dark:text-gray-400 text-gray-700 text-sm">
									{state.demonyms.eng.m}
								</span>
							</p>
							<p>
								Maps:{" "}
								<span className="dark:text-gray-400 text-gray-700 text-sm">
									<a
										className="hover:text-black"
										href={state.maps.googleMaps}
										target="_blank"
										rel="noreferrer"
									>
										See {state.name.common} on Google Maps
									</a>
								</span>
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Details
