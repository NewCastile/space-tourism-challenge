/** @format */

export default function Home() {
	return (
		<section className='flex h-[400px] w-full flex-col items-center justify-center px-10 py-8 desktop:flex-row desktop:items-center desktop:justify-around desktop:py-0 desktop:px-0'>
			<div className='flex w-full flex-col items-center justify-center px-4 desktop:w-[30%] desktop:items-start desktop:px-0'>
				<h5 className='w-full text-center uppercase desktop:text-left'>
					so, you want to travel to
				</h5>
				<h1 className='text-center text-[6rem] uppercase leading-[10rem] desktop:text-left'>
					space
				</h1>
				<p className='text-center desktop:text-left'>
					Let’s face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we’ll give you a truly out of this world
					experience!
				</p>
			</div>
			<div className='hover: absolute bottom-12 flex h-[200px] w-[200px] flex-col items-center justify-center rounded-full opacity-100 hover:bg-gray-500/40 mobile:bottom-16 mobile:h-[300px] mobile:w-[300px] desktop:static desktop:mt-0'>
				<div className='absolute flex h-[180px] w-[180px] flex-col items-center justify-center rounded-full bg-white mobile:h-[200px] mobile:w-[200px]'>
					<h4 className='uppercase text-black'>explore</h4>
				</div>
			</div>
		</section>
	)
}
