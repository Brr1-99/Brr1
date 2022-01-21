import React from 'react'
import ImageLeft from '../images/viewleft.svg'
import ImageRight from '../images/viewright.svg'
import Image from 'next/image'

const Greet = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center bg-zinc-800'>
            <div className='grid md:grid-cols-3 gap-3'>
                <div className='flex justify-start items-center px-4 md:block opacity-90'>
                    <Image src={ImageLeft} alt='' />
                </div>
                <div className='flex justify-center items-center'>
                    <h1 className='text-white'> Hola buenas tardes</h1>
                </div>
                <div className='flex justify-end items-center px-12 md:block opacity-90'>
                    <Image src={ImageRight} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Greet
