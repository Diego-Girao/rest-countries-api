import React, { useState } from "react"

function Header() {
	const [mode, setMode] = useState(true)
	const [toggleBtn, setToggleBtn] = useState(
		'<i class="fa-regular fa-lightbulb"></i> Light Mode'
	)

	const toggleDarkMode = () => {
		if (mode) {
			document.documentElement.classList.add("dark")
			setToggleBtn('<i class="fa-solid fa-lightbulb"></i> Dark Mode')
			setMode((current) => (current = !current))
		}
		if (!mode) {
			document.documentElement.classList.remove("dark")
			setToggleBtn('<i class="fa-regular fa-lightbulb"></i> Light Mode')
			setMode((current) => (current = !current))
		}
	}
	return (
		<div className="w-full shadow-md py-6 px-3 mb-8 bg-white dark:bg-gray-700 dark:text-white">
			<div className="flex container mx-auto">
				<h1 className="font-bold text-base md:text-xl">
					Where in the World ? 🤔
				</h1>
				<div className="ml-auto font-medium">
					<button
						onClick={() => toggleDarkMode()}
						dangerouslySetInnerHTML={{ __html: toggleBtn }}
					></button>
				</div>
			</div>
		</div>
	)
}

export default Header
