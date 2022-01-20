const Navbar = () => {
	return (
		<nav className='bg-zinc-800 sticky z-10 backdrop-blur-xl'>
			<div className='mx-auto px-2 sm:px-5 lg:px-7'>
				<div className='items-center flex relative justify-between h-16'>
						<div className='flex justify-start'>
							<div>
								<a className='text-white'> Home </a>
								<a> About </a>
								<a> Contact </a>
							</div>
						</div>
						<div className='flex items-center'>
							<div>
								<a> Github </a>
								<a> Twitter </a>
							</div>
						</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar