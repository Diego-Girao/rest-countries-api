import React, { useEffect, useState } from "react"

function Home() {
	const [countries, setCountries] = useState([])
	const [mode, setMode] = useState(true)
	const [toggleBtn, setToggleBtn] = useState(
		'<i class="far fa-sun" ></i> Light Mode'
	)

	useEffect(() => {
		getCountries()
	}, [])

	const getCountries = async () => {
		const resp = await fetch("https://restcountries.com/v3.1/all")
		const data = await resp.json()
		await setCountries(data)
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
			<div className="w-screen shadow-md py-6 px-3 bg-white dark:bg-gray-700 dark:text-white mb-16">
				<div className="flex container mx-auto">
					<h1 className="font-bold text-xl">Where in the World ?</h1>
					<div className="ml-auto font-medium">
						<button
							onClick={() => toggleDarkMode()}
							dangerouslySetInnerHTML={{ __html: toggleBtn }}
						></button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
