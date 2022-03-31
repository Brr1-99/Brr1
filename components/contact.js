import ImageMail from '../images/mail.gif'
import Image from 'next/image'

const Contact = () => {
	return (
		<div className="container mx-auto mt-40 p-5 text-white ">
			<h1 className='text-2xl text-center my-5'> Send some feedback! </h1>
			<hr className='border-0 rounded bg-cyan-500 h-1 mx-auto w-4/5'/>
			<p className="text-center mt-5"> Are you interested on what I do? Then write me an email with the details!</p>
			<div className='grid md:grid-cols-2'>
				<div className='flex justify-start items-center px-4 md:block opacity-90'>
					<Image src={ImageMail} alt='' />
				</div>
				<form action="https://getform.io/f/dd635be6-854b-4774-ab3d-7f7c8542c678" method="POST">
					<div className="grid md:grid-cols-2 max-w-2xl ml-auto">
						<input name='name' placeholder="Full Name" className="md:col-span-2 p-3 m-3 border shadow rounded bg-zinc-700" required>
						</input>
						<input name='email' placeholder="personal_email@example.com" className="md:col-span-2 p-3 m-3 border shadow rounded bg-zinc-700" required>
						</input>
						<textarea name='email_content' placeholder='Your email should be written here.' className="md:col-span-2 p-3 m-3 border shadow rounded bg-zinc-700" required>
						</textarea>
					</div>
					<div className="flex justify-center">
						<button className="mt-10 bg-cyan-500 rounded p-2 px-4" type="submit">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Contact