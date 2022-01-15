import Head from 'next/head'
import Navbar from '../components/navbar'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Brr1</title>
                <meta name='description' content='My own personal website' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
			<Navbar></Navbar>
		</div>            
    )
}
