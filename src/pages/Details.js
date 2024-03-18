import React from "react"
import { useLocation, useNavigate } from "react-router-dom"

function Details(props) {
	const location = useLocation()
	const state = location.state

	let navigate = useNavigate()
	const backHomeBtn = () => {
		navigate("/")
	}

	return (
		<div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
			<div className="container mx-auto mb-2">
				<button
					className="px-8 ml-4 py-2 bg-white text-gray-600 shadow-md rounded-lg dark:bg-gray-700 dark:text-white hover:text-black hover:shadow-lg hover:shadow-gray-500 dark:hover:shadow-gray-500 dark:hover:shadow-md dark:hover:text-sky-200 ease-in-out duration-300"
					onClick={backHomeBtn}
				>
					<i className="fa fa-arrow-left mr-2"></i>Back
				</button>
			</div>
			{state && (
				<div className="container flex mx-auto flex-col md:flex-row">
					<img
						src={state.flags.svg}
						className="h-auto w-fit p-4 xl:w-1/2 md:w-2/5 md:h-96"
						alt={state.flags.alt}
					/>
					<div className="p-8">
						<h2 className="font-bold text-2xl mb-8 xl:text-2xl sm:text-2xl">
							{state.name.official}
						</h2>
						<div className="grid grid-cols-2 gap-x-20 gap-y-4 xl:grid-cols-2 sm:grid-cols-2">
							<p>
								Common name:{" "}
								<span className="dark:text-gray-400 text-gray-700 text-sm">
									{state.name.common} {state.flag}
								</span>
							</p>
							<p>
								Population:{" "}
								<span className="dark:text-gray-400 text-gray-700 text-sm">
									{state.population.toLocaleString()}
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
								<span className="dark:text-sky-400 text-sky-600 text-sm">
									<a
										className="hover:text-blue-700"
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
