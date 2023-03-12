import React from "react"

function ThumbDetails({ title, image_url, alt, population, region, capital }) {
	return (
		<div className="container h-96 w-72 rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:text-white pb-4">
			<img
				src={image_url}
				className="h-fit w-full rounded-tl-lg rounded-tr-lg"
				alt={alt}
			/>
			<div className="p-4">
				<h3 className="font-bold mb-4">{title}</h3>
				<p className="text-xs">
					Population:{" "}
					<span className="text-gray-700 dark:text-gray-300">{population}</span>
				</p>
				<p className="text-xs">
					Region:{" "}
					<span className="text-gray-700 dark:text-gray-300">{region}</span>
				</p>
				<p className="text-xs">
					Capital:{" "}
					<span className="text-gray-700 dark:text-gray-300">{capital}</span>
				</p>
			</div>
		</div>
	)
}

export default ThumbDetails
