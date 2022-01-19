import Grow from '../images/grow.svg'
import Python from '../images/icons/python.svg'
import Html from '../images/icons/html-5.svg'
import Css from  '../images/icons/css.svg'
import Flask from '../images/icons/flask.svg'
import Pycharm from '../images/icons/pycharm.svg'
import Mysql from '../images/icons/mysql.svg'

const skills = () => {
	return (
		<div class='container mx-auto text-white mt-40'>
			<h1 class='text-2xl text-center'> SKILLS </h1>
			<br/>
			<h2 class='text-xl text-center'> Knowledge is power 🧠, and I try to get stronger 🦸🏻 by trying new things everyday.</h2>
			<br/>
			<div class='grid sm:grid-cols-1 xl:grid-cols-2 gap-4'>
				<div class='rounded bg-zinc-700 hover:shadow-cyan-500/50 shadow-md '>
					<div>
						<h3 class='text-xl p-3 text-center'>
							Settled / Mastered
						</h3>
						<hr/>
						<div class='grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4'>
							<div class='p-4 flex flex-col items-center justify-center'>
								<img {...Python} class='opacity-90'></img>
								<div>
									<span>Python</span>
								</div>
							</div>
							<div class='p-4 flex flex-col items-center justify-center'>
								<img {...Html} class='opacity-90'></img>
								<div>
									<span>Html</span>
								</div>
							</div>
							<div class='p-4 flex flex-col items-center justify-center'>
								<img {...Css} class='opacity-90'></img>
								<div>
									<span>CSS</span>
								</div>
							</div>
							<div class='p-4 flex flex-col items-center justify-center'>
								<img {...Flask} class='opacity-90'></img>
								<div>
									<span>Flask</span>
								</div>
							</div>
							<div class='p-4 flex flex-col items-center justify-center'>
								<img {...Mysql} class='opacity-90'></img>
								<div>
									<span>MySQl/MariaDB</span>
								</div>
							</div>
							<div class='p-4 flex flex-col items-center justify-center'>
								<img {...Pycharm} class='opacity-90'></img>
								<div>
									<span>PyCharm</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class='flex justify-start items-center px-10 md:block'>
					<img {...Grow} class='opacity-90'></img>
				</div>
			</div>
		</div>
	)
}

export default skills