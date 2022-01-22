import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Greet from '../components/greetings'
import Skills from '../components/skills'
import About from '../components/about'

export default function Home() {
    return (
        <>
            <Head>
                <title>Brr1</title>
                <meta name='description' content='My own personal website' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className='bg-zinc-800'>
                <Navbar />
                <hr></hr>
                <Greet />
                <hr></hr>
                <Skills />
				<hr></hr>
                <br />
				<br />
				<section className='about' id='about'>
				<About/>
				</section>
				<hr></hr>
                <Footer />
            </div>
        </>
    )
}
