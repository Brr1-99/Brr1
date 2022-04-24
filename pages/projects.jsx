import Head from 'next/head'
import { Grid, Navbar, Footer } from '../components'

export default function Projects() {
    return (
        <>
            <Head>
                <title>Brr1</title>
                <meta name='description' content='My own personal website' />
                <link rel='icon' href='/favicon.ico' />
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"></link>
            </Head>
            <div className='bg-zinc-900'>
                <Navbar />
				<Grid />
				<Footer />
            </div>
        </>
    )
}