import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function Details() {
	const [mode, setMode] = useState(true)
	const [toggleBtn, setToggleBtn] = useState(
		'<i class="far fa-sun" ></i> Light Mode'
	)

	let { state } = useLocation()
	let navigate = useNavigate()

	const backHomeBtn = navigate("/")

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
					onClick={() => backHomeBtn()}
				>
					<i class="fa fa-arrow-left"></i> Back
				</button>
			</div>
			<div className="container flex mx-auto p-8 pl-0 pr-0">
				<img src={state.flags.svg} className="w-1/2 pr-8" alt={state.name} />
			</div>
		</div>
	)
}

export default Details
