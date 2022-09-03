import React from 'react'
import "./Feedback.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-bootstrap/Carousel'
import Slider from "react-slick";
import image1 from "../../Assets/feedback1.PNG"
import image2 from "../../Assets/feedback2.PNG"
import image3 from "../../Assets/feedback3.PNG"
import image4 from "../../Assets/feedback4.PNG"
import image5 from "../../Assets/feedback5.jpeg"
import image6 from "../../Assets/feedback6.jpeg"
import image7 from "../../Assets/feedback7.jpeg"
import image8 from "../../Assets/feedback8.jpeg"
// import image5 from "../../Assets/r12.72faf151.png"
function Fedback() {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='feedback-color' id="feedback">
            <div className='container'>
                <div className='row pt-4 mb-5 d-flex justify-content-center'>
                    <div className='col-md-12 col-11'>
                        <h4 className='feedbackhome-h4'>CLIENTS</h4>
                        <div class="wrapper">
                            <h1>FeedBack</h1>
                        </div>
                        {/* <div className="bg_move">
                            <h1>FeedBack</h1>
                        </div> */}
                    </div>
                    <div className='row pt-4 mb-5 d-flex justify-content-center'>
                        <div className='col-md-8 col-10'>
                            <Carousel variant="dark">
                                <Carousel.Item>
                                    <img
                                        className=" w-100"
                                        src={image1}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={image2}
                                        alt="Second slide"
                                    />


                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={image3}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={image4}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={image5}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={image6}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={image7}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={image8}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>

                            {/* <Slider {...settings}>
                                <div>
                                    <img src={image1} className="slider-size" />
                                </div>
                                <div>
                                    <img src={image2} className="slider-size" />
                                </div>
                                <div>
                                    <img src={image3} className="slider-size" />
                                </div>
                                <div>
                                    <img src={image4} className="slider-size" />
                                </div>
                                <div>
                                    <img src={image5} className="slider-size" />
                                </div>

                            </Slider> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fedback