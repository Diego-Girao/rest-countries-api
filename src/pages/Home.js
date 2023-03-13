import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ThumbDetails from "../components/ThumbDetails"

function Home(props) {
	const [countries, setCountries] = useState([])
	const [mode, setMode] = useState(true)
	const [toggleBtn, setToggleBtn] = useState(
		'<i class="far fa-sun" ></i> Light Mode'
	)

	useEffect(() => {
		getCountries()
	}, [])

	const getCountries = async () => {
		const res = await fetch("https://restcountries.com/v3.1/all")
		const data = await res.json()
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

	const searchCountry = async (term) => {
		if (term.length < 3 || term === "") return
		const res = await fetch(`https://restcountries.com/v3.1/name/${term}`)
		const data = await res.json()
		await setCountries(data)
	}

	const filterByRegion = async (region) => {
		if (region === "") return
		const res = await fetch(`https://restcountries.com/v3.1/region/${region}`)
		const data = await res.json()
		await setCountries(data)
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
			<div className="flex container mx-auto mb-16">
				<i className="fa fa-search my-auto -mr-9 z-10 pr-2 pl-3 py-5 rounded-md text-gray-400"></i>
				<input
					type="text"
					placeholder="Search for a country..."
					className="pl-10 p-2 shadow-md rounded-md w-1/3 dark:bg-gray-700"
					onChange={(event) => searchCountry(event.target.value)}
				/>
				<select
					className="ml-auto my-2 p-2 shadow-md rounded-md font-medium dark:bg-gray-700"
					onChange={(val) => filterByRegion(val.target.value)}
				>
					<option value="">Filter by Region</option>
					<option value="africa">Africa</option>
					<option value="america">America</option>
					<option value="asia">Asia</option>
					<option value="europe">Europe</option>
					<option value="oceania">Oceania</option>
				</select>
			</div>
			<div className="container grid gap-16 mx-auto desktop:grid-cols-4 tablet:grid-cols-2 tablet:place-items-center mobile:grid-cols-1 mobile:place-items-center">
				{countries.map((country, index) => (
					<Link to="details" state={country} key={index}>
						<ThumbDetails
							title={country.name.official}
							image_url={country.flags.svg}
							alt={country.flags.alt}
							population={country.population}
							region={country.region}
							capital={country.capital}
						/>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Home
