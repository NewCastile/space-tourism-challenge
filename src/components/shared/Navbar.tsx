/** @format */
import logo from "/assets/shared/logo.svg"
import hamburguerIcon from "/assets/shared/icon-hamburger.svg"
import closeIcon from "/assets/shared/icon-close.svg"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
	const [toggleSidebar, setTogglesSidebar] = useState<boolean>(false)
	return (
		<div className='absolute top-0 z-10 my-0 flex w-full flex-row items-center justify-between px-10 py-8 mobile:px-0 mobile:py-0 tablet:my-[4vh]'>
			<Link className='block pl-0 mobile:pl-10 tablet:pl-20' to='/'>
				<img src={logo} alt='logo' />
			</Link>
			<button
				onClick={() => setTogglesSidebar(!toggleSidebar)}
				className='absolute top-14 right-10 z-10 block mobile:hidden'>
				<img
					src={toggleSidebar ? closeIcon : hamburguerIcon}
					alt='icon-hamburger'
				/>
			</button>
			<nav className='nav-text w-max min-w-max mobile:w-1/2 mobile:min-w-[390px]'>
				<ul className='navbar relative hidden flex-row items-center justify-around space-x-8 px-8 py-10 mobile:flex'>
					<li className='absolute -left-[75%] hidden h-[1px] w-[80%] bg-lile/70 desktop:block'></li>
					<li className='flex flex-row items-center justify-center space-x-2'>
						<Link to={"/"} className='uppercase'>
							home
						</Link>
					</li>
					<li className='flex flex-row items-center justify-center space-x-2'>
						<Link to={"/destinations/1"} className='uppercase'>
							destination
						</Link>
					</li>
					<li className='flex flex-row items-center justify-center space-x-2'>
						<Link to={"/crews/0"} className='uppercase'>
							crew
						</Link>
					</li>
					<li className='flex flex-row items-center justify-center space-x-2'>
						<Link to={"/technologies/0"} className='uppercase'>
							technology
						</Link>
					</li>
				</ul>
				{toggleSidebar && (
					<ul className='navbar z-5 absolute right-0 top-0 flex h-screen w-2/3 flex-col items-center justify-start space-y-8 py-10 px-16 text-[2rem] mobile:hidden'>
						<li className='mt-40 flex w-full flex-row items-center justify-start space-x-2'>
							<strong>00</strong>
							<Link to={"/"} className='uppercase'>
								home
							</Link>
						</li>
						<li className='flex w-full flex-row items-center justify-start space-x-2'>
							<strong>01</strong>
							<Link to={"/destinations/1"} className='uppercase'>
								destination
							</Link>
						</li>
						<li className='flex w-full flex-row items-center justify-start space-x-2'>
							<strong>02</strong>
							<Link to={"/crews/0"} className='uppercase'>
								crew
							</Link>
						</li>
						<li className='flex w-full flex-row items-center justify-start space-x-2'>
							<strong>03</strong>
							<Link to={"/technologies/0"} className='uppercase'>
								technology
							</Link>
						</li>
					</ul>
				)}
			</nav>
		</div>
	)
}
