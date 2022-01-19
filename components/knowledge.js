import Grow from '../images/grow.svg'
import Python from '../images/icons/python.svg'
import Html from '../images/icons/html-5.svg'
import Css from  '../images/icons/css.svg'
import Flask from '../images/icons/flask.svg'
import Pycharm from '../images/icons/pycharm.svg'
import Mysql from '../images/icons/mysql.svg'
import Django from '../images/icons/django.svg'
import Github from '../images/icons/github.svg'
import JS from '../images/icons/js.svg'
import ReactNative from '../images/icons/react.svg'
import Tailwind from '../images/icons/tailwind.svg'
import VsCode from '../images/icons/vscode.svg'

const skills = () => {
	return (
		<div class='container mx-auto text-white mt-40'>
			<h1 class='text-2xl text-center'> SKILLS </h1>
			<br/>
			<h2 class='text-xl text-center'> Knowledge is power 🧠, and I try to get stronger 🦸🏻 by trying new things everyday.</h2>
			<br/>
			<div class='grid sm:grid-cols-1 xl:grid-cols-2 gap-4'>
				<div class='rounded bg-zinc-700 hover:shadow-cyan-500/50 shadow-md '>
					<div class='h-1/2'>
						<h3 class='text-xl p-3 text-center'>
							Settled / Mastered
						</h3>
						<hr/>
						<div class='grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4'>
							<div class='p-4 flex flex-col items-center justify-center transform motion-safe:hover:scale-110'>
								<img {...Python} class='opacity-90'></img>
								<div>
									<span>Python</span>
								</div>
							</div>
							<div class='p-4 flex flex-col items-center justify-center transform motion-safe:hover:scale-110'>
								<img {...Html} class='opacity-90'></img>
								<div>
									<span>Html</span>
								</div>
							</div>
							<div class='p-4 flex flex-col items-center justify-center transform motion-safe:hover:scale-110'>
								<img {...Css} class='opacity-90'></img>
								<div>
									<span>CSS</span>
								</div>
							</div>
							<div class='p-4 flex flex-col items-center justify-center transform motion-safe:hover:scale-110'>
								<img {...Flask} class='opacity-90'></img>
								<div>
									<span>Flask</span>
								</div>
							</div>
							<div class='p-4 flex flex-col items-center justify-center transform motion-safe:hover:scale-110'>
								<img {...Mysql} class='opacity-90'></img>
								<div>
									<span>MySQL</span>
								</div>
							</div>
							<div class='p-4 flex flex-col items-center justify-center transform motion-safe:hover:scale-110'>
								<img {...Pycharm} class='opacity-90'></img>
								<div>
									<span>PyCharm</span>
								</div>
							</div>
						</div>
					</div>
					<div class='h-1/2'>
						<h3 class='text-xl p-3 text-center'> 
							Loading . . . 
						</h3>
						<hr/>
						<div class='grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4'>
							<div class='p-4 flex flex-col items-center justify-center transform motion-safe:hover:scale-110'>
								<img {...JS} class='opacity-90'></img>
								<div>
									<span>JavaScript</span>
								</div>
							</div>
							<div class='p-4 flex flex-col items-center justify-center transform motion-safe:hover:scale-110'>
								<img {...Tailwind} class='opacity-90'></img>
								<div>
									<span>TailwindCSS</span>
								</div>
							</div>
							<div class='p-4 flex flex-col items-center justify-center transform motion-safe:hover:scale-110'>
								<img {...Django} class='opacity-90'></img>
								<div>
									<span>Django</span>
								</div>
							</div>
							<div class='p-4 flex flex-col items-center justify-center transform motion-safe:hover:scale-110'>
								<img {...Tailwind} class='opacity-90'></img>
								<div>
									<span>Tailwind</span>
								</div>
							</div>
							<div class='p-4 flex flex-col items-center justify-center transform motion-safe:hover:scale-110'>
								<img {...Github} class='opacity-90'></img>
								<div>
									<span>Github</span>
								</div>
							</div>
							<div class='p-4 flex flex-col items-center justify-center transform motion-safe:hover:scale-110'>
								<img {...VsCode} class='opacity-90'></img>
								<div>
									<span>VsCode</span>
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