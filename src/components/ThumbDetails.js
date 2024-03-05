import React from "react"

function ThumbDetails({ title, image_url, alt, population, region, capital }) {
	return (
		<div className="h-96 w-96 rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:text-white pb-4">
			<img
				src={image_url}
				className="h-1/2 w-full object-cover rounded-tl-lg rounded-tr-lg"
				alt={alt}
			/>
			<div className="p-4">
				<h3 className="font-bold mb-4 text-2xl">{title}</h3>
				<p className="text-xl">
					Population:{" "}
					<span className="text-gray-700 dark:text-gray-300">{population}</span>
				</p>
				<p className="text-xl">
					Region:{" "}
					<span className="text-gray-700 dark:text-gray-300">{region}</span>
				</p>
				<p className="text-xl">
					Capital:{" "}
					<span className="text-gray-700 dark:text-gray-300">{capital}</span>
				</p>
			</div>
		</div>
	)
}

export default ThumbDetails
