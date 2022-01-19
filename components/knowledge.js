import Grow from '../images/grow.svg'
import Python from '../images/icons/python.svg'
import Html from '../images/icons/html-5.svg'

const skills = () => {
	return (
		<div class='container mx-auto text-white mt-40'>
			<h1 class='text-2xl text-center'> SKILLS </h1>
			<br/>
			<h2 class='text-xl text-center'> Knowledge is power 🧠, and I try to get stronger 🦸🏻‍♂️ by trying new things everyday.</h2>
			<br/>
			<div class='grid sm:grid-cols-1 xl:grid-cols-2 gap-4'>
				<div class='rounded bg-zinc-700 shadow-zinc-500'>
					<h3 class='text-xl p-3 text-center'>
						Settled / Mastered
					</h3>
					<hr/>
					<div class='grid sm:grid-cols-4 xl:grid-cols-6 gap-4'>
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