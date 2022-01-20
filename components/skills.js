import Grow from '../images/grow.svg'
import {Css,Pycharm,Python,Django,Flask,Github,Html,JS,Mysql,ReactNative,Tailwind,VsCode} from '../images/icons'

const Master = [
	{icon: Python, title:'Python'},
	{icon: Html, title:'Html'},
	{icon: Css, title:'CSS'},
	{icon: Flask, title:'Flask'},
	{icon: Mysql, title:'MySQl'},
	{icon: Pycharm, title:'PyCharm'},
]

const Learn = [
	{icon: JS, title:'JavaScript'},
	{icon: Tailwind, title:'TailwindCSS'},
	{icon: Django, title:'Django'},
	{icon: ReactNative, title:'React'},
	{icon: Github, title:'Github'},
	{icon: VsCode, title:'VsCode'},
]

const Skills = () => {
	const Icon = ({icon,title}) => (
		<div className='p-4 flex flex-col items-center justify-center transform motion-safe:hover:scale-110'>
			<img {...icon} className='opacity-90 w-32'></img>
			<div>
				<span>{title}</span>
			</div>
		</div>
	)
	return (
		<div className='container mx-auto text-white mt-40'>
			<h1 className='text-2xl text-center text-rose-300'> SKILLS </h1>
			<br/>
			<h2 className='text-xl text-center'> Knowledge is power 🧠, and I try to get stronger 🦸🏻 by trying new things everyday.</h2>
			<br/>
			<div className='grid sm:grid-cols-1 xl:grid-cols-2 gap-4'>
				<div className='rounded bg-zinc-700 hover:shadow-cyan-500/50 shadow-md grid grid-rows-2'>
					<div>
						<h3 className='text-xl p-3 text-center'>
							Settled / Mastered
						</h3>
						<hr/>
						<div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4'>
							{
								Master.map((icon,idx) => (
									<div key={idx}>
										<Icon icon={icon.icon} title={icon.title}/>
									</div>
								))
							}
						</div>
					</div>
					<div>
						<h3 className='text-xl p-3 text-center'> 
							Loading . . . 
						</h3>
						<hr/>
						<div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4'>
							{
								Learn.map((icon,idx) => (
									<div key={idx}>
										<Icon icon={icon.icon} title={icon.title}/>
									</div>
								))
							}
						</div>
					</div>
				</div>
				<div className='flex justify-start items-center px-10 md:block'>
					<img {...Grow} className='opacity-90'></img>
				</div>
			</div>
		</div>
	)
}

export default Skills