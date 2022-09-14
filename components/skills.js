import Grow from '../images/grow.svg'
import Image from 'next/image'
import { Css, Pycharm, Python, Django, Flask, Github, Html, JS, Mysql, ReactNative, Tailwind, VsCode, Nodejs, Streamlit, Pandas } from '../images/icons'

const Master = [
    { icon: Python, title: 'Python' },
    { icon: Html, title: 'Html' },
    { icon: Css, title: 'CSS' },
    { icon: Flask, title: 'Flask' },
    { icon: Mysql, title: 'MySQl' },
    { icon: VsCode, title: 'VsCode' },
    { icon: Pycharm, title: 'PyCharm' },
]

const Learn = [
    { icon: Tailwind, title: 'Tailwind' },
    { icon: Django, title: 'Django' },
    { icon: Github, title: 'Github' },
    { icon: Nodejs, title: 'NodeJs' },
    { icon: Streamlit, title: 'Streamlit' },
    { icon: JS, title: 'JavaScript' },
    { icon: ReactNative, title: 'React' },
    { icon: Pandas, title: 'Pandas' },

]

const Skills = () => {
    const Icon = ({ icon, title }) => (
        <div className='p-6 flex flex-col items-center justify-center transform motion-safe:hover:scale-110'>
            <div>
                <Image src={icon} alt='icon'/>
            </div>
            <div>
                <span>{title}</span>
            </div>
        </div>
    )
    return (
        <div className='container mx-auto text-white mt-30'>
            <h1 className='text-2xl text-center text-rose-300'> SKILLS </h1>
            <br />
            <h2 className='text-xl text-center'> Knowledge is power 🧠, and I try to get stronger 🦸🏻 by trying new things everyday.</h2>
            <br />
            <div className='grid sm:grid-cols-1 xl:grid-cols-2 gap-4'>
                <div className='rounded bg-zinc-700 hover:shadow-cyan-500/50 shadow-md grid grid-rows-2'>
                    <div>
                        <h3 className='text-xl p-3 text-center'>Settled / Mastered</h3>
                        <hr />
                        <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4'>
                            {Master.map((skill, idx) => (
                                <div key={idx}>
                                    <Icon icon={skill.icon} title={skill.title} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className='text-xl p-3 text-center'>Loading . . .</h3>
                        <hr />
                        <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4'>
                            {Learn.map((skill, idx) => (
                                <div key={idx}>
                                    <Icon icon={skill.icon} title={skill.title} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='flex justify-start items-center px-10 mx-auto opacity-90'>
                    <Image src={Grow} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Skills
