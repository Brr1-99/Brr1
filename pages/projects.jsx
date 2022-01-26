import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Grid from '../components/grid'

export default function Projects() {
    return (
        <>
            <Head>
                <title>Brr1</title>
                <meta name='description' content='My own personal website' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className='bg-zinc-900'>
                <Navbar />
				<Grid />
				<Footer />
            </div>
        </>
    )
}