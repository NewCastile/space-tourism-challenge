/** @format */

import { useState } from "react"
import { useParams } from "react-router-dom"
import data from "../../data"

export default function Technologies({ technologies = data.technologies }) {
	const { technologyId } = useParams()
	const [index, setIndex] = useState<number>(
		parseInt(technologyId as string) ?? 0
	)
	return (
		<section className='flex h-max w-full flex-col items-center justify-center desktop:w-full desktop:items-start'>
			<h5 className='flex w-10/12 flex-row items-center justify-center self-center mobile:justify-start desktop:p-8'>
				<span className='mr-6 font-extrabold text-gray-600'>03</span>
				<span className='uppercase text-white'>space launch 101</span>
			</h5>
			<div className='flex w-full flex-col items-center justify-center self-end desktop:w-11/12 desktop:flex-row-reverse desktop:pl-8'>
				<img
					className='hidden desktop:block desktop:aspect-square desktop:w-[500px]'
					src={`${technologies[index].images.portrait}`}
					alt={`${technologies[index].name}-img`}
				/>
				<img
					className='block aspect-auto object-cover desktop:hidden'
					src={decodeURI(technologies[index].images.landscape)}
					alt={`${technologies[index].name}-img`}
				/>
				<div className='my-20 flex w-full flex-col items-center justify-center space-x-0 space-y-6 p-8 mobile:p-0 desktop:my-0 desktop:flex-row desktop:justify-start desktop:space-y-0 desktop:space-x-20'>
					<ul className='flex w-full flex-row items-center justify-center space-x-4 space-y-0 desktop:w-max desktop:flex-col desktop:space-y-6 desktop:space-x-0 desktop:self-start'>
						{technologies.map((_, technologyIdx) => {
							return (
								<li
									key={technologyIdx}
									className={`${
										technologyIdx === index
											? "bg-white text-black"
											: "border-2 border-gray-600 bg-black text-white hover:border-white/50"
									} nav-text flex h-[60px] w-[60px] cursor-pointer flex-col items-center justify-center rounded-full text-center text-[1.5em] uppercase`}
									onClick={() => setIndex(technologyIdx)}>
									<strong>{technologyIdx + 1}</strong>
								</li>
							)
						})}
					</ul>
					<div className='flex w-full flex-col items-center justify-center space-y-4 desktop:w-2/3 desktop:items-start'>
						<h5 className='subheading-2 w-full text-center uppercase desktop:text-left'>
							the terminology...
						</h5>
						<h3 className='w-full text-center uppercase desktop:text-left'>
							{technologies[index].name}
						</h3>
						<p className='min-h-[98px] w-full text-center mobile:w-1/2 desktop:w-10/12 desktop:text-left'>
							{technologies[index].description}
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
