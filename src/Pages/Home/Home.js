import React from 'react'
import imga from '../../Images/main-banner.jpg'
import imgb from '../../Images/catbanner-01.jpg'
import imgc from '../../Images/catbanner-02.jpg'
import Prodact from '../Prodacts/Prodact'
function Home() {
    return (
        <>
            <section className='home-wrapper-1 py-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img className='img-fluid rounded-3' src={imga} alt="main banner" />
                    </div>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <img className='img-fluid rounded-3' src={imgb} alt="main banner" />
                            </div>
                            <div className='col-md-6'>
                                <img className='img-fluid rounded-3' src={imgb} alt="main banner" />
                            </div>
                        </div>
                        <div className='row pt-3'>
                            <div className='col-md-6'>
                                <img className='img-fluid rounded-3' src={imgc} alt="main banner" />
                            </div>
                            <div className='col-md-6'>
                                <img className='img-fluid rounded-3' src={imgc} alt="main banner" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Prodact/>
        </>
    )
}

export default Home