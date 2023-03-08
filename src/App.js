import { Route, Routes } from "react-router-dom"
import Details from "./pages/Details"
import Home from "./pages/Home"

function App() {
	return (
		<div className="header">
			<Routes>
				<Route path="/details" element={<Details />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	)
}

export default App
