/** @format */
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/home"
import Navbar from "./components/shared/Navbar"
import Destinations from "./components/destination"
import Crews from "./components/crew"
import Technologies from "./components/technology"

function App() {
	return (
		<BrowserRouter>
			<Navbar></Navbar>
			<Routes>
				<Route
					path='/'
					element={
						<div className='home-container flex h-auto min-h-screen w-full flex-col items-center justify-start pt-32 mobile:pt-32 desktop:justify-end desktop:pt-0 desktop:pb-[10vh]'>
							<Home />
						</div>
					}></Route>
				<Route
					path='destinations/:destinationId'
					element={
						<div className='destination-container flex h-auto min-h-screen w-full flex-col items-center justify-start pt-36 desktop:pt-48'>
							<Destinations />
						</div>
					}></Route>
				<Route
					path='crews/:crewId'
					element={
						<div className='crew-container flex h-auto min-h-screen w-full flex-col items-center justify-start pt-36 desktop:pt-48'>
							<Crews />
						</div>
					}></Route>
				<Route
					path='technologies/:technologyId'
					element={
						<div className='technology-container relative flex h-auto min-h-screen w-full flex-col items-center justify-start pt-36 desktop:pt-48'>
							<Technologies />
						</div>
					}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
