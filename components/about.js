import React from 'react'
import Image from 'next/image'
import Error from '../images/error.svg'

const About = () => {
	return (
		<div className='container mx-auto text-white mt-40'>
            <h1 className='text-2xl text-center my-5 text-rose-300'> About me </h1>
            <div className='grid lg:grid-cols-3 mt-5'>
				<div className='flex justify-center items-center px-10 mx-auto opacity-90 w-4/5 md:w-full credit'>
                    <Image src={Error} alt='' />
                </div>
                <div className='lg:col-span-2'>
                    <p> 
						Hello there Internet ! I open myself to you as an 
						<b> electrical and industrial engineer </b>
						named Bruno.
					</p>
					<br/>
					<p>
						Native of Galicia ( Spain ) , I have been always interested in concepts such as numbers and algorithms 🧮 .
						That is why I enrolled myself on the engineer degree I mentioned earlier.
					</p>
					<br/>
					<p>
						Recently , I have decided to take a dive into the <i> mysteriuos </i> 👻, yet <span className='text-xl'> astonishing 🎇 </span> world of programming.
					</p>
					<p>
						What I enjoy working most with is <span className='bg-cyan-500 p-1 rounded'>Python</span> . It was my first language and it brings a lot of memories.
					</p>
					<br/>
					<p>
						Nowadays, apart from improving the core structure of my code , studying <span className='bg-cyan-500 p-1 rounded'> JavaScript</span> is what eats most of my hours. Nevertheless, I am sure that it will be worth the try. 
					</p>
                </div>
            </div>
        </div>
	)
}

export default About