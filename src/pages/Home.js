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
			<div className="flex container mx-auto mb-16">
				<i className="fa fa-search my-auto -mr-9 z-10 pr-2 pl-3 py-5 rounded-md text-gray-400"></i>
				<input
					type="search"
					placeholder="Search for a country..."
					className="pl-10 p-2 shadow-md rounded-md w-1/3 dark:bg-gray-700"
					onChange={(event) => searchCountry(event.target.value)}
				/>
				<select
					className="ml-auto my-2 p-2 shadow-md rounded-md font-medium cursor-pointer dark:bg-gray-700"
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
			<div className="grid gap-16 container mx-auto desktop:grid-cols-4 desktop:gap-4 tablet:grid-cols-2 tablet:place-items-center mobile:grid-cols-1 mobile:place-items-center">
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
