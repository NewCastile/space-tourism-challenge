/** @format */

import { useState } from "react"
import { useParams } from "react-router-dom"
import data from "../../data"

export default function Crews({ crew = data.crews }) {
	const { crewId } = useParams()
	const [index, setIndex] = useState<number>(parseInt(crewId as string) ?? 0)

	return (
		<section className='flex h-full w-10/12 flex-col items-center justify-start space-y-12 p-8 mobile:space-y-0'>
			<h5 className='flex w-full flex-row items-center justify-center mobile:justify-start'>
				<span className='mr-6 font-extrabold text-gray-600'>02</span>
				<span className='uppercase text-white'>meet your crew</span>
			</h5>
			<div className='flex h-max w-full flex-col items-center justify-center mobile:flex-col-reverse desktop:flex-row-reverse'>
				<img
					className='mt-0 ml-0 w-[50%] min-w-[250px] max-w-[500px] self-center mobile:mt-12 tablet:min-w-[400px] desktop:mt-0 desktop:ml-20'
					src={`${crew[index].images.png}`}
					alt={`${crew[index].name}-img`}
				/>
				<div className='mt-12 flex flex-col-reverse items-center justify-start space-y-0 mobile:flex-col desktop:mt-36 desktop:space-y-10 desktop:self-start'>
					<div className='my-10 flex flex-col items-center justify-center self-start desktop:my-0'>
						<h2 className='w-full text-center text-[2rem] uppercase text-gray-600 desktop:text-left'>
							{crew[index].role}
						</h2>
						<h3 className='text-center uppercase desktop:self-start desktop:text-left'>
							{crew[index].name}
						</h3>
						<p className='text-center mobile:w-1/2 desktop:w-9/12 desktop:self-start desktop:text-left'>
							{crew[index].bio}
						</p>
					</div>
					<ul className='flex w-full flex-row justify-center space-x-4 desktop:justify-start'>
						{crew.map((_, crewIdx) => {
							return (
								<li
									key={crewIdx}
									className={`${
										crewIdx === index
											? "bg-white"
											: "bg-gray-700 hover:bg-gray-600"
									} h-[10px] w-[10px] cursor-pointer rounded-full`}
									onClick={() => setIndex(crewIdx)}></li>
							)
						})}
					</ul>
				</div>
			</div>
		</section>
	)
}
