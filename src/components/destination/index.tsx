/** @format */

import { useState } from "react"
import { useParams } from "react-router-dom"
import data from "../../data"

export default function Destinations({ destinations = data.destinations }) {
	const { destinationId } = useParams()
	const [index, setIndex] = useState<number>(
		parseInt(destinationId as string) ?? 0
	)
	return (
		<section className='flex h-max w-10/12 flex-col items-center justify-start space-y-8 p-8'>
			<h5 className='flex w-full flex-row items-center justify-center mobile:justify-start'>
				<span className='mr-6 font-extrabold text-gray-600'>01</span>
				<span className='text-center uppercase text-white'>
					pick your destination
				</span>
			</h5>
			<div className='items-between flex h-[300px] w-10/12 basis-full flex-col justify-between space-y-10 space-x-0 desktop:flex-row desktop:space-y-0 desktop:space-x-20'>
				<img
					className='max-h-[450px] max-w-[450px] self-center'
					src={`${destinations[index].images.webp}`}
					alt={`${destinations[index].name}-img`}
				/>
				<div className='flex w-full flex-col items-center justify-center space-y-6 desktop:w-[40%] desktop:justify-center desktop:space-y-12'>
					<ul className='relative flex w-full flex-row items-center justify-center space-x-[30px] desktop:justify-start'>
						{destinations.map((destination, destinationIdx) => {
							return (
								<li
									key={destinationIdx}
									className={`nav-text cursor-pointer ${
										destinationIdx === index
											? "border-b-4 border-white"
											: "hover:border-b-4 hover:border-gray-600"
									} uppercase `}
									onClick={() => setIndex(destinationIdx)}>
									{destination.name}
								</li>
							)
						})}
					</ul>
					<div className='flex min-h-[220px] flex-col items-center justify-center desktop:items-start'>
						<h2 className='text-center uppercase leading-[100px]'>
							{destinations[index].name}
						</h2>
						<p className='w-full text-center mobile:w-1/2 desktop:w-full desktop:text-left'>
							{destinations[index].description}
						</p>
					</div>
					<div className='flex w-full flex-col items-center justify-center space-x-0 space-y-4 border-t-2 border-lile/40 pt-8 mobile:flex-row mobile:space-x-16 mobile:space-y-0 desktop:justify-start'>
						<div>
							<h2 className='subheading-2 text-center uppercase desktop:text-left'>
								avg. distance
							</h2>
							<h2 className='subheading-1 w-max text-center uppercase desktop:text-left'>
								{destinations[index].distance}
							</h2>
						</div>
						<div>
							<h2 className='subheading-2 text-center uppercase desktop:text-left'>
								est. travel time
							</h2>
							<h2 className='subheading-1 w-max text-center uppercase desktop:text-left'>
								{destinations[index].travel}
							</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
