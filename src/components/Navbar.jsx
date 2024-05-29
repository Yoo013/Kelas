import React, { useState } from "react"
import Logo from "../Pages/img/logo.png"



const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<>
			{/* Mobile */}
			<div className="flex justify-between relative top-3 lg:hidden">
				<div className="w-10 h-10 rounded-full flex justify-center items-center" id="UserButton">
					<img src="/NavIcon.png" alt="" className="w-6 h-6" onClick={toggleMenu} />
				</div>
				<div className={`text-center text-white ${isMenuOpen ? "hidden" : ""}`}>
					<div className="text-[0.7rem]">Hi,Everyone!</div>
					<div className="font-bold text-[1rem]">WELCOME</div>
				</div>

				<div
					className={`w-10 h-10 rounded-full flex justify-center items-center `}
					id="UserButton">
					<img src="/user.svg" alt="" className=""/> 
				</div>

				{isMenuOpen && (
					<div className="fixed inset-0 bg-black opacity-50 z-10" onClick={toggleMenu}></div>
				)}

				<div
					className={`fixed top-0 left-0 h-full w-64  shadow-lg transform transition-transform duration-300 ease-in-out ${
						isMenuOpen ? "translate-x-0" : "-translate-x-full"
					}`}
					id="IsiNavbar">
					<ul className="mt-8">
					<div className="border-b-2" id="user">
					<img src="/user.svg" alt="" className="w-10 h-10 mb-2"/> 
				</div>
						<li className="mb-2 item-center" id="navbar1">
							<a href="#" className="text-white opacity-80 text-lg font-bold">
								Home
							</a>
						</li>
						<li className="mb-2" id="navbar1">
							<a href="#Gallery" className="text-white opacity-80 text-lg font-bold">
								Gallery
							</a>
						</li>
						<li id="navbar1">
							<a href="#Tabs" className="text-white opacity-80 text-lg font-bold">
								Structure & Schedule
							</a>
						</li>

						{/* btn */}
					
					
					</ul>
				</div>
			</div>

			{/* Dekstop */}
			<div className="flex justify-between relative top-4 hidden lg:flex h-24 item-center">
				<div>
					<img src={Logo}  className="w-14 h-14 rounded-full color" alt="" />
				</div>
				<ul className="mt-2 flex gap-6">
					<li className="mt-2 item-center" id="navbar">
						<a href="#" className="text-white opacity-80 text-[1rem] font-semibold">
							Home
						</a>
					</li>
					<li className="mt-2"id="navbar">
						<a href="#Gallery" className="text-white opacity-80 text-[1rem] font-semibold">
							Gallery
						</a>
					</li>
					<li className="mt-2" id="navbar">
						<a href="#Tabs" className="text-white opacity-80 text-[1rem] font-semibold">
							Structure & Schedule
						</a>
					</li>
					<div
					className={`w-10 h-10 rounded-full flex justify-center items-center`}
					id="UserButton">
					<img src="/user.svg" alt="" className=""/> 
				</div>
				</ul>
			</div>
		</>
	)
}

export default Navbar
