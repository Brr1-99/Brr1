import React from 'react'
import ImageLeft from '../images/viewleft.svg'
import ImageRight from '../images/viewright.svg'


const Greet = () => {
	return (
		<div class='min-h-screen flex flex-col justify-center items-center bg-zinc-800'>
			<div class='grid md:grid-cols-3 gap-3'>
				<div class='flex justify-start items-center px-4 md:block'>
					<img {...ImageLeft} class='opacity-90'></img>
				</div>
				<div class='flex justify-center items-center'>
					<h1 class='text-white'> Hola buenas tardes</h1>
				</div>
				<div class='flex justify-end items-center px-12 md:block'>
					<img {...ImageRight} class='opacity-90'></img>
				</div>
			</div>
		</div>
		

	)
}

export default Greet