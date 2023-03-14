// import React from 'react'

import React, { useState, useEffect } from 'react'
import imga from '../../Images/main-banner.jpg'
import imgb from '../../Images/catbanner-01.jpg'
import imgc from '../../Images/catbanner-02.jpg'
import Prodact from '../Prodacts/Prodact'
import ban1 from '../../Images/ban.webp'



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Home() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error(error));
    }, []);
    // --------------------------------------------------------------------
    // banner

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

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
            {/* ---------------------------------------------------------------------------------------------------------
            product */}
            <section>
                <>
                    <div className='container'>
                        <div className='row filter_btn'>
                            <div className='col-md-6'>
                                <h2 className='display-6 fw-bolder text-left'>Latest products</h2>
                            </div>

                            <div className=' col-md-6 filter_btn'>
                                <div className='button d-flex mb-5 pb-5 justify-content-end'>
                                    <button className='btn btn-outline-dark me-2'>All</button>
                                    <button className='btn btn-outline-dark me-2'>Man</button>
                                    <button className='btn btn-outline-dark me-2'>Woman</button>

                                </div>
                            </div>

                            <hr />

                            {/* <Slider {...settings}>
                                <div>
                                    <img src="https://via.placeholder.com/1500x500" alt="Banner 1" />
                                </div>
                                <div>
                                    <img src="https://via.placeholder.com/1500x500" alt="Banner 2" />
                                </div>
                                <div>
                                    <img src="https://via.placeholder.com/1500x500" alt="Banner 3" />
                                </div>
                            </Slider> */}



                            <div>
                                <div className='row'>
                                    {products.map(product => (

                                        <div className="col-md-3 mb-4">
                                            <div className="card h-70 text-center p-4" key={product.id}>
                                                <img
                                                    src={product.image}
                                                    className="card-img-top"
                                                    alt={product.title} height="250px"
                                                />
                                                <div className="card-body">
                                                    <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                                                    <p className="card-text lead fw-bold">${product.price}</p>
                                                    <a href="#" className="btn btn-outline-dark">
                                                        Buy Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    ))}
                                </div>

                                <Slider {...settings}>
                                    <div>
                                        <img src={ban1} alt="Banner 1" />
                                    </div>
                                    <div>

                                        <img src={ban1} alt="Banner 2" />
                                    </div>
                                    <div>
                                        <img src={ban1} alt="Banner 3" />
                                    </div>
                                </Slider>

                            </div>
                        </div>
                    </div>
                </>
            </section>
            {/* ------------------------------------------------------------------------------------
            banner */}
            <br></br>

        </>
    )
}
export default Home