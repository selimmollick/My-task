// import React from 'react'
import '../Home/Home.css'
import React, { useState, useEffect } from 'react'
import imga from '../../Images/main-banner.jpg'
import imgr from '../../Images/main-banner-r.png'
import imgb from '../../Images/catbanner-01.jpg'
import imgc from '../../Images/catbanner-02.jpg'
import Prodact from '../Prodacts/Prodact'
import ban1 from '../../Images/ban.webp'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Home() {

    const [products, setProducts] = useState([]);
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(intervalId);
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


                            <div>
                                <div className='row'>
                                    {products.slice(0, 8).map(product => (

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
                                        <img className='bannimg' src={ban1} alt="Banner 1" />
                                    </div>
                                    <div>

                                        <img className='bannimg' src={ban1} alt="Banner 2" />
                                    </div>
                                    <div>
                                        <img className='bannimg' src={ban1} alt="Banner 3" />
                                    </div>

                                </Slider>
                                {/* ------------------------------------------------------------------------------------------
                               top_product */}


                            </div>

                            <div className='row d-flex justify-content-between trand'>



                                <div className='col-4'>
                                    <h4>HOT TREND</h4>
                                    {products.slice(1, 4).map(product => (
                                        <>

                                            <div className='row toppro'>
                                                <div className='col-4'>
                                                    <img
                                                        src={product.image}
                                                        className="card-img-top"
                                                        alt={product.title}
                                                    />
                                                </div>
                                                <div className='col-8 img_back'>
                                                    <div className="card-body">
                                                        <p className="card-title mb-0">{product.title.substring(0, 12)}</p>
                                                        <i class="bi bi-star text-warning"></i>
                                                        <i class="bi bi-star text-warning"></i>
                                                        <i class="bi bi-star text-warning"></i>
                                                        <i class="bi bi-star"></i>
                                                        <h6 className="card-text lead fw-bold">${product.price}</h6>

                                                    </div>
                                                </div>
                                            </div>
                                        </>

                                    ))}
                                </div>
                                <div className='col-4'>
                                    <h4>BEST TREND</h4>
                                    {products.slice(1, 4).map(product => (
                                        <>

                                            <div className='row toppro'>
                                                <div className='col-4 '>
                                                    <img
                                                        src={product.image}
                                                        className="card-img-top"
                                                        alt={product.title}
                                                    />
                                                </div>
                                                <div className='col-8 img_back'>
                                                    <div className="card-body trncard">
                                                        <p className="card-title mb-0">{product.title.substring(0, 12)}</p>
                                                        <i class="bi bi-star text-warning"></i>
                                                        <i class="bi bi-star text-warning"></i>
                                                        <i class="bi bi-star text-warning"></i>
                                                        <i class="bi bi-star"></i>
                                                        <h6 className="card-text lead fw-bold">${product.price}</h6>

                                                    </div>
                                                </div>
                                            </div>
                                        </>

                                    ))}
                                </div>
                                <div className='col-4'>
                                    <h4>FEATURE</h4>
                                    {products.slice(1, 4).map(product => (
                                        <>

                                            <div className='row toppro'>
                                                <div className='col-4'>
                                                    <img
                                                        src={product.image}
                                                        className="card-img-top"
                                                        alt={product.title}
                                                    />
                                                </div>
                                                <div className='col-8 img_back'>
                                                    <div className="card-body mb-4">
                                                        <p className="card-title mb-0">{product.title.substring(0, 12)}</p>
                                                        <i class="bi bi-star text-warning"></i>
                                                        <i class="bi bi-star text-warning "></i>
                                                        <i class="bi bi-star text-warning"></i>
                                                        <i class="bi bi-star"></i>
                                                        <h6 className="card-text lead fw-bold">${product.price}</h6>

                                                    </div>
                                                </div>
                                            </div>
                                        </>

                                    ))}
                                </div>


                            </div>

                            {/* --------------------------------------------------------------------------------------
                            time */}
                            <div className='row time_main'>

                                <div className='col-5'>
                                    <img className='timeomg img-fluid' src={imgr} alt="/"/>
                                </div>
                                <div className='col-7 time_contmain'>
                                    <div className='time_cont'>
                                    <h6>Discount</h6>
                                    <h4>SUMMER 2023</h4>
                                    <h4>SALE 50%</h4>
                                    <h1>{time}</h1>
                                    </div>
                                </div>
                            </div>

                            {/* -----------------------------------------------------------------------
                            shopping_process */}

                            <div className='row main_timesec '>
                                <div className='col-md-2 shapsec'>
                                <i class="bi bi-car-front-fill"></i>
                                    <h6>Free Shipping</h6>
                                </div>
                                <div className='col-md-2'>
                                <i class="bi bi-car-front-fill"></i>
                                    <h6>Free Shipping</h6>
                                </div>
                                <div className='col-md-2'>
                                <i class="bi bi-car-front-fill"></i>
                                    <h6>Free Shipping</h6>
                                </div>
                                <div className='col-md-2'>
                                <i class="bi bi-car-front-fill"></i>
                                    <h6>Free Shipping</h6>
                                </div>
                            </div>

                        </div>

                    </div>

                </>
            </section>
        </>
    )
}
export default Home