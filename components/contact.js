const Contact = () => {
	return (
		<div className="container mx-auto mt-40 p-5 text-white">
			<h1 className='text-2xl text-center my-5'> Send some feedback! </h1>
			<hr className='border-0 rounded bg-cyan-500 h-1 mx-auto w-4/5'/>
			<p className="text-center mt-5"> Are you interested on what I do? Then write me an email with the details! 📨</p>
			<form>
				<div className="grid md:grid-cols-2 max-w-4xl mx-auto">
					<input name='name' placeholder="Full Name" className=" p-3 m-3 border shadow rounded bg-zinc-700">
					</input>
					<input name='email' placeholder="personal_email@example.com" className=" p-3 m-3 border shadow rounded bg-zinc-700">
					</input>
					<textarea name='email_content' placeholder='Your email should be written here.' className="md:col-span-2 p-3 m-3 border shadow rounded bg-zinc-700">
					</textarea>
				</div>
				<div className="flex justify-center">
					<button className="mt-10 bg-cyan-500 rounded p-2 px-4" disabled type="submit">
						Submit
					</button>
				</div>
			</form>
		</div>
	)
}

export default Contact