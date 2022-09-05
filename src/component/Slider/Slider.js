import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Slider.css"
// import "../Experience/Experience.css"
import download51 from "../../Assets/download (5).png";
import download61 from "../../Assets/download (6).png";
import bootstrap2 from "../../Assets/bootstrap2.16d20373.png"
import download8 from "../../Assets/download (8).png";
import download7 from "../../Assets/download (7).png";
import reactjs from "../../Assets/reactjs.222b6b69 (1).png"
import redux from "../../Assets/redux.543b98d3.png";
import node from "../../Assets/node.png";
import solidity from "../../Assets/solidity-logo-vector.png"
// import download from "../../Assets/download.png"
// import download1 from "../../Assets/download (1).png"
// import download2 from "../../Assets/download (2).png"
// import download3 from "../../Assets/download (3).png"
// import download4 from "../../Assets/download (4).png"
// import firebase from "../../Assets/firebase.8584a25c.png"
// import solidity from "../../Assets/solidity-logo-vector.png"
// import redux from "../../Assets/redux.543b98d3.png"
// import reactjs from "../../Assets/reactjs.222b6b69.png"
// import node from "../../Assets/node.png"
function Sliders() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    // cssEase: "linear",
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
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };
  return (
    <div className='fluid-container' id="Experience" >
      <div className='mt-5' >
        <div className='col-12'>
          <div class="wrapper">
            <h1>Experience</h1>
          </div>

        </div>
      </div>
      <div className='d-flex justify-content-center slider-margin ' >
        <div className='col-md-11 col-10 mb-5'>

          <Slider {...settings}>
            <div >
              <div className="card" style={{ background: "#696969" }}>
                <div className="box">
                  <div className="content">

                    <div className='d-flex flex-row justify-content-center align-items-center'><h3 className='pt-2 exprience-h33'>HTML</h3>&nbsp; <img className='exprience-image' src={download51} width="50px" /></div>
                    <div className="progress blue mt-4">
                      <span className="progress-left">
                        <span className="progress-bar"></span>
                      </span>
                      <span className="progress-right">
                        <span className="progress-bar"></span>
                      </span>
                      <div className="progress-value">90%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card ">
                <div className="box">
                  <div className="content">
                    <div className='d-flex flex-row justify-content-center align-items-center'><h3 className='pt-2'>CSS</h3>&nbsp; <img className='exprience-image' src={download61} width="30px" /></div>
                    <div className="progress green mt-4">
                      <span className="progress-left">
                        <span className="progress-bar"></span>
                      </span>
                      <span className="progress-right">
                        <span className="progress-bar"></span>
                      </span>
                      <div className="progress-value1">90%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card">
                <div className="box">
                  <div className="content">
                    <div className='d-flex flex-row justify-content-center align-items-center'><h3 className='pt-2'>Bootstrap</h3>&nbsp; <img className='exprience-image' src={bootstrap2} width="40px" /></div>
                    <div className="progress pink mt-4">
                      <span className="progress-left">
                        <span className="progress-bar"></span>
                      </span>
                      <span className="progress-right">
                        <span className="progress-bar"></span>
                      </span>
                      <div className="progress-value2">95%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card">
                <div className="box">
                  <div className="content">
                    <div className='d-flex flex-row justify-content-center align-items-center'><h3 className='pt-2'>Material UI</h3>&nbsp; <img className='exprience-image' src={download8} width="50px" /></div>
                    <div className="progress material mt-4">
                      <span className="progress-left">
                        <span className="progress-bar"></span>
                      </span>
                      <span className="progress-right">
                        <span className="progress-bar"></span>
                      </span>
                      <div className="progress-value3">80%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card">
                <div className="box">
                  <div class="content">
                    <div className='d-flex flex-row justify-content-center align-items-center'><h3 className='pt-2'>JavaScript</h3>&nbsp; <img className='exprience-image' src={download7} width="50px" /></div>
                    <div className="progress javascript mt-4">
                      <span className="progress-left">
                        <span className="progress-bar"></span>
                      </span>
                      <span className="progress-right">
                        <span className="progress-bar"></span>
                      </span>
                      <div className="progress-value4">85%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card">
                <div className="box">
                  <div className="content">
                    <div className='d-flex flex-row justify-content-center align-items-center'><h3 className='pt-2'>React Js</h3>&nbsp; <img className='exprience-image' src={reactjs} width="50px" /></div>
                    <div className="progress reactjs mt-4">
                      <span className="progress-left">
                        <span className="progress-bar"></span>
                      </span>
                      <span className="progress-right">
                        <span className="progress-bar"></span>
                      </span>
                      <div className="progress-value5">95%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card ">
                <div className="box">
                  <div className="content">
                    <div className='d-flex flex-row justify-content-center align-items-center'><h3 className='pt-2'>Redux</h3>&nbsp; <img className='exprience-image' src={redux} width="50px" /></div>
                    <div className="progress redux mt-4">
                      <span className="progress-left">
                        <span className="progress-bar"></span>
                      </span>
                      <span className="progress-right">
                        <span className="progress-bar"></span>
                      </span>
                      <div className="progress-value7">80%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card">
                <div className="box">
                  <div className="content">
                    <div className='d-flex flex-row justify-content-center align-items-center'><h3 className='pt-2'>Node Js</h3>&nbsp; <img className='exprience-image' src={node} width="50px" /></div>
                    <div className="progress node mt-4">
                      <span className="progress-left">
                        <span className="progress-bar"></span>
                      </span>
                      <span className="progress-right">
                        <span className="progress-bar"></span>
                      </span>
                      <div className="progress-value8">85%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card">
                <div className="box">
                  <div className="content">
                    <div className='d-flex flex-row justify-content-center align-items-center'><h3 className='pt-2'>Solidity</h3>&nbsp; <img className='exprience-image' src={solidity} width="80px" /></div>
                    <div className="progress solidity mt-4">
                      <span className="progress-left">
                        <span className="progress-bar"></span>
                      </span>
                      <span className="progress-right">
                        <span className="progress-bar"></span>
                      </span>
                      <div className="progress-value9">95%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Sliders