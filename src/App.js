import { Route, Routes } from "react-router-dom"
import Details from "./pages/Details"
import Home from "./pages/Home"
import Header from "./components/Header"

function App() {
	return (
		<div className="header">
			<Header />
			<Routes>
				<Route path="/details" element={<Details />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	)
}

export default App
