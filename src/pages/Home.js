import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ThumbDetails from "../components/ThumbDetails"

function Home(props) {
	const [countries, setCountries] = useState([])

	useEffect(() => {
		getCountries()
	}, [])

	const getCountries = async () => {
		const res = await fetch("https://restcountries.com/v3.1/all")
		const data = await res.json()
		setCountries(data)
	}

	const searchCountry = async (term) => {
		let url = "https://restcountries.com/v3.1/all"
		if (term.length >= 3) {
			url = `https://restcountries.com/v3.1/name/${term}`
		}
		const res = await fetch(url)
		const data = await res.json()
		setCountries(data)
	}

	const filterByRegion = async (region) => {
		let url = "https://restcountries.com/v3.1/all"
		if (region !== "") {
			url = `https://restcountries.com/v3.1/region/${region}`
		}
		const res = await fetch(url)
		const data = await res.json()
		setCountries(data)
	}

	return (
		<div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
			<div className="flex flex-col md:flex-row md:justify-between container mx-auto mb-4">
				<i className="fa fa-search top-3 left-2 relative z-10 rounded-md text-gray-400"></i>
				<input
					type="search"
					placeholder="Search for a country..."
					className="absolute truncate w-fit p-2 pl-10 shadow-md rounded-md md:w-1/3 dark:bg-gray-700"
					onChange={(event) => searchCountry(event.target.value)}
				/>
				<select
					className="my-8 p-2 shadow-md rounded-md font-medium cursor-pointer dark:bg-gray-700"
					onChange={(val) => filterByRegion(val.target.value)}
				>
					<option className="text-xs md:text-base" value="">
						Filter by Region
					</option>
					<option className="text-xs md:text-base" value="africa">
						Africa
					</option>
					<option className="text-xs md:text-base" value="america">
						America
					</option>
					<option className="text-xs md:text-base" value="asia">
						Asia
					</option>
					<option className="text-xs md:text-base" value="europe">
						Europe
					</option>
					<option className="text-xs md:text-base" value="oceania">
						Oceania
					</option>
				</select>
			</div>
			<div className="grid gap-16 container mx-auto place-items-center xl:grid-cols-3 xl:px-8 md:grid-cols-2">
				{countries.map((country, index) => (
					<Link to="details" state={country} key={index}>
						<ThumbDetails
							title={country.name?.official || "No official name"}
							image_url={country.flags?.svg || ""}
							alt={country.flags?.alt || ""}
							population={country.population.toLocaleString() || ""}
							region={country.region || ""}
							capital={country.capital || ""}
						/>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Home
