import React from 'react'
import Image from 'next/image'
import Work from '../images/work.svg'

const About = () => {
	return (
		<div className='container mx-auto text-white mt-40'>
            <h1 className='text-2xl text-center my-5'> About me </h1>
			<hr className='border-0 rounded bg-red-400 h-1 mx-auto w-4/5'/>
            <div className='grid lg:grid-cols-3 mt-5'>
                <div className='lg:col-span-2'>
                    <p> 
						Hello there Internet ! I open myself to you as an 
						<b> electrical and industrial engineer </b>
						named Bruno.
					</p>
					<p>
						Recently , I have decided to take a dive into the <i> mysteriuos 👻 </i>, yet <span className='text-xl'> astonishing 🎇 </span> world of programming.
					</p>
					<br/>
					<p>

					</p>
                </div>
				<div className='flex justify-center items-center px-10 mx-auto opacity-90 w-4/5 md:w-full'>
                    <Image src={Work} alt='' />
                </div>
            </div>
        </div>
	)
}

export default About