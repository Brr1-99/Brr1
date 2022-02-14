import React from 'react'
import Image from 'next/image'
import Hexastats from '../images/hexastats.png'
import Projectile from '../images/projectile.png'
import Brr1 from '../images/Brr1.png'
import TFG from '../images/index.png'
import Focus from '../images/focus.svg'

const projects = [
	{
		title: 'Brr1',
		date: 'February 2022',
		image: Brr1,
		url: 'Brr1',
		desc: 'This website you are navigating in !',
		programs: ['JavaScript', 'React', 'Tailwindcss']
	},
	{
		title: 'Hexastats',
		date: 'February 2022',
		image: Hexastats,
		url: 'hexastats-flask',
		desc: 'App that scrapes stats from an online game.',
		programs: ['Python', 'Flask']
	},
	{
		title: 'TFG',
		date: 'February 2022',
		image: TFG,
		url: 'TFG',
		desc: "Online management of the workshops' inventory of my college. ",
		programs: ['Python', 'Flask','MariaDB']
	},
	{
		title: 'Projectile Motion',
		date: 'February 2022',
		image: Projectile,
		url: 'Projectile_Motion',
		desc: "Simulation of a bullet trayectory with realistic physics using pygame ",
		programs: ['Python']
	}
]


const colors = {
	Python: 'bg-indigo-600',
	JavaScript: 'bg-yellow-500',
	Tailwindcss: 'bg-fuchsia-500',
	MariaDB: 'bg-green-500',
	React: 'bg-cyan-500',
	Flask: 'bg-rose-600'
}

const Grid = () => {
	return (
		<div className='container mt-20 mx-auto text-white'>
			<h1 className='text-2xl text-center text-lime-300'> Projects </h1>
            <br />
            <h2 className='text-xl text-center'> A little preview of what I have done for the last year.</h2>
            <br />
			<hr className='border-0 rounded bg-white h-1 mx-auto w-6/8'/>
			<div className='grid md:grid-cols-2 gap-6 mt-6'>
				<div className='flex justify-start items-center'>
					<Image src={Focus} alt='focus'/>
				</div>
				{projects.map((project, idx) => (
					<div key={idx} className='rounded bg-zinc-800 flex flex-col items-center justify-center'>
						<div className='p-4 '>
							<h2 className='text-lg text-center'> {project.title} </h2>
							<div className='flex items-center justify-center mt-4'>
								{project.programs.map((programs,idx_p) => (
									<span key={idx_p} className={'p-1 mx-1 rounded ' + colors[programs]}>
										{programs}
									</span>
								))}
							</div>
						</div>
						<a href={'https://github.com/Brr1-99/' + project.url } className='transform motion-safe:hover:scale-95 scale-90'>
							<Image src={project.image} alt='Hexastats' fill='layout'/>
						</a>	
						<div className='mb-4'>
							<h2 className='text-lg'> {project.desc} </h2>
							<h4 className='text-center'> Last modified on {project.date} .</h4>
						</div>	
					</div> 
				))}
			</div>
		</div>
	)
}

export default Grid