import React from 'react'
import Header from '../HomeComponents/Header'
import Cards from '../HomeComponents/Cards'
import Footer from '../HomeComponents/Footer'
import MobileDownload from '../MobileData/MobileDownload'


const Home = () => {
    return (
        <>
            <>
                <div className="home-page-subParent">
                    
                    <Header />
                    <Cards />
                    <Footer />
                </div>
                <div className='mobile-showing'>
                    <MobileDownload />
                </div>
             
            </>
        </>
    )
}

export default Home