import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Greet from '../components/greetings'
import Skills from '../components/skills'
import About from '../components/about'
import Contact from '../components/contact'

export default function Home() {
    return (
        <>
            <Head>
                <title>Brr1</title>
                <meta name='description' content='My own personal website' />
                <link rel='icon' href='/favicon.ico' />
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"/>
            </Head>
            <div className='bg-zinc-900'>
                <Navbar/>
                <Greet/>
                <Skills/>
				<section className='about' id='about'>
				<About/>
				</section>
				<Contact/>
                <Footer/>
            </div>
        </>
    )
}
