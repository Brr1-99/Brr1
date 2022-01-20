import React from 'react'
import ImageLeft from '../images/viewleft.svg'
import ImageRight from '../images/viewright.svg'


const Greet = () => {
	return (
		<div className='min-h-screen flex flex-col justify-center items-center bg-zinc-800'>
			<div className='grid md:grid-cols-3 gap-3'>
				<div className='flex justify-start items-center px-4 md:block'>
					<img {...ImageLeft} className='opacity-90'></img>
				</div>
				<div className='flex justify-center items-center'>
					<h1 className='text-white'> Hola buenas tardes</h1>
				</div>
				<div className='flex justify-end items-center px-12 md:block'>
					<img {...ImageRight} className='opacity-90'></img>
				</div>
			</div>
		</div>
		

	)
}

export default Greet