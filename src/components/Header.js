import Head from 'next/head'
import Navbar from '../components/Navbar'
const Header = () => {
    
    return (
        <div>
            <Head>
                <title>TN Daily</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.1/css/bulma.min.css" />
                <div className="headder">
                 <Navbar/>
                </div>
            </Head>
        </div>
    )
}
export default Header