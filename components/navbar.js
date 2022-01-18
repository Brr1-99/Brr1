const Navbar = () => {
	return (
		<nav class='bg-zinc-800 sticky z-10 backdrop-blur-xl'>
			<div class='mx-auto px-2 sm:px-5 lg:px-7'>
				<div class='items-center flex relative justify-between h-16'>
						<div class='flex justify-start'>
							<div>
								<a class='text-white'> Home </a>
								<a> About </a>
								<a> Contact </a>
							</div>
						</div>
						<div class='flex items-center'>
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