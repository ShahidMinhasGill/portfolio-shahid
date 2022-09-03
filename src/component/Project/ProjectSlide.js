import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
import Capture from "../../Assets/Capture.PNG";
import { render } from "react-dom";
import Capture3 from "../../Assets/Capture3.PNG"
import Capture4 from "../../Assets/Capture4.PNG"
import Capture5 from "../../Assets/Capture5.PNG"
import Capture6 from "../../Assets/Capture6.PNG"
import "./ProjectSlider.css"
import falafel from "../../Assets/falafel.PNG"
import SMSSwap from "../../Assets/SMSSwap.PNG";
import psydode from "../../Assets/psydode.PNG";
import bnbStake from "../../Assets/bnbStake.PNG";
import crytpoCar from "../../Assets/crytpoCar.PNG";
import SAVAGE from "../../Assets/SAVAGE.PNG";
import gauge from "../../Assets/gauge.PNG";
import wolf from "../../Assets/wolf.PNG";
import splassive from "../../Assets/splassive.PNG"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import googy from "../../Assets/googy.PNG";
import center from "../../Assets/center.png";
import RTD from "../../Assets/RTD.png";
import bnbShers from "../../Assets/bnb-shers.png";
import tronforever from "../../Assets/tron-forever.png";
import berryClub from "../../Assets/berry-culb.jpeg";
import Modal from 'react-bootstrap/Modal'
import { IoMdClose } from "react-icons/io"
export default function ProjectSlide() {
  const [modalShow, setModalShow] = useState(false);
  const [modalShowOne, setModalShowOne] = useState(false);
  const [modalShowtwo, setModalShowTwo] = useState(false);
  const [modalShowthree, setModalShowThree] = useState(false);
  const [modalShowfour, setModalShowfour] = useState(false);
  const [modalShowfive, setModalShowfive] = useState(false);
  const [modalShowSIX, setModalShowSIX] = useState(false);
  const [modalShowseven, setModalShowseven] = useState(false);
  const [modalShoweight, setModalShowEight] = useState(false);
  const [modalShowNINE, setModalShowNINE] = useState(false);
  const [modalShowTEN, setModalShowTEN] = useState(false);
  const [modalShowELEVEN, setModalShowELEVEN] = useState(false);
  const [modalShowTWELVE, setModalShowTWELVE] = useState(false);
  const [modalShowTHIRTEEN, setModalShowTHIRTEEN] = useState(false);
  const [modalShowFOURTEEN, setModalShowFOURTEEN] = useState(false);
  const [modalShowFIFTEEN, setModalShowFIFTEEN] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    slidesToShow: 3,
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
  // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 3,
  //   speed: 500,
  //   autoplay: true,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 400,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };

  return (
    <div className="fluid-container" id='project'>
      <div className=' d-flex justify-content-center'>
        <div className='col-12 pt-5'>
          <div class="wrapper"                                >
            <h1>My Project</h1>
          </div>

          {/* <div className="bg_move">
            <h1>My Projects</h1>
          </div> */}
        </div>

      </div>
      <div className=" d-flex justify-content-center">
        <div className="col-md-11 col-11">


          <Slider {...settings} className="m-3">
            {/* sms Swap */}
            <div className=''>
              {modalShow ? <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ opactiy: "0.5" }}
              >

                <Modal.Body className='model-image' style={{ backgroundColor: "rgb(51, 50, 50)" }}>
                  <div className='row d-flex justify-content-center' >
                    <div className='col-12 d-flex- justify-content-end'>
                      <IoMdClose
                        onClick={() => setModalShow(false)}
                        size={28}
                        style={{ color: "white", cursor: "pointer" }}
                      />
                    </div>
                  </div>

                  <div className='row d-flex justify-content-center mt-4'>
                    <div className='col-md-6 d-flex justify-content-center'>
                      <img src={SMSSwap} className="project-modal-image" />
                    </div>
                    <div className='col-md-6 col-11 d-flex flex-column text-white mt-md-1 mt-4'>
                      <h1 className="footer-h2">SMS swap</h1>
                      <p className='footer-pp'>Our Plan Is To Make SMS The Cryptocurrency Of Modern E-Commerce & Gaming Platforms

                      </p>
                      <a href='https://www.smswap.finance/' target="_blank" className="btn btn-lightsss">Vist Website</a>
                    </div>
                  </div>
                </Modal.Body>
              </Modal> : <></>}
              <div className="card111 mb-5"><img src={SMSSwap} width="200px" />

                <div className="info">
                  <h1>SMS swap</h1>
                  <p>Our Plan Is To Make SMS The Cryptocurrency Of Modern E-Commerce & Gaming Platforms</p>
                  <button onClick={() => setModalShow(true)}>Read More</button>
                </div>
              </div>
            </div>
            {/* psydode */}
            <div className="">
              {modalShowOne ? <Modal
                show={modalShowOne}
                onHide={() => setModalShowOne(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ opactiy: "0.5" }}
              >

                <Modal.Body className='model-image' style={{ backgroundColor: "rgb(51, 50, 50)" }}>
                  <div className='row d-flex justify-content-center' >
                    <div className='col-12 d-flex- justify-content-end'>
                      <IoMdClose
                        onClick={() => setModalShowOne(false)}
                        size={28}
                        style={{ color: "white", cursor: "pointer" }}
                      />
                    </div>
                  </div>

                  <div className='row d-flex justify-content-center mt-4'>
                    <div className='col-md-6 d-flex justify-content-center'>
                      <img src={psydode} className="project-modal-image" />
                    </div>
                    <div className='col-md-6 col-11 d-flex flex-column text-white mt-md-1 mt-4'>
                      <h1 className="footer-h2">Psydoge on binance blockchain</h1>
                      <p className='footer-pp'>6 level card can be selected with random game.All card have different token reward value.Min Bet is 100 PSYD Token, Max Bet is 40,000 PSYD Token

                      </p>
                      <a href='https://psydoge.live/' target="_blank" className="btn btn-lightsss">Vist Website</a>
                    </div>
                  </div>
                </Modal.Body>
              </Modal> : <></>}
              <div className="card111 mb-5"><img src={psydode} />

                <div className="info">
                  <h1>Psydoge</h1>
                  <p>6 level card can be selected with random game.</p>
                  <button onClick={() => setModalShowOne(true)}>Read More</button>
                </div>
              </div>
            </div>
            {/* Goongye */}
            <div className=''>
              {modalShowtwo ? <Modal
                show={modalShowtwo}
                onHide={() => setModalShowTwo(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ opactiy: "0.5" }}
              >

                <Modal.Body className='model-image' style={{ backgroundColor: "rgb(51, 50, 50)" }}>
                  <div className='row d-flex justify-content-center' >
                    <div className='col-12 d-flex- justify-content-end'>
                      <IoMdClose
                        onClick={() => setModalShowTwo(false)}
                        size={28}
                        style={{ color: "white", cursor: "pointer" }}
                      />
                    </div>
                  </div>

                  <div className='row d-flex justify-content-center mt-4'>
                    <div className='col-md-6 d-flex justify-content-center'>
                      <img src={Capture3} className="project-modal-image" />
                    </div>
                    <div className='col-md-6 col-11 d-flex flex-column text-white mt-md-1 mt-4'>
                      <h1 className="footer-h2">Goongye</h1>
                      <p className='footer-pp'>The Goongye, the ruthless founder of the country, has transcended humanity and has become a higher being. He has transformed into the Crazy Ape Goongye, with knowledge beyond the fathomable concepts of man. Through his teachings, the Ape Goongye aims to create a new civilization that is efficient and prioritizes reason more than emotions

                      </p>
                      <a href='https://goongye.netlify.app/' target="_blank" className="btn btn-lightsss">Vist Website</a>
                    </div>
                  </div>
                </Modal.Body>
              </Modal> : <></>}
              <div className="card111 mb-5"><img src={Capture3} />

                <div className="info">
                  <h1>Goongye</h1>
                  <p>WELCOME TO THE
                    CRAZY APE GOONGYE CLUB</p>
                  <button onClick={() => setModalShowTwo(true)}>Read More</button>
                </div>
              </div>
            </div>
            {/* ThunderBrwal */}
            <div className=''>
              {modalShowthree ? <Modal
                show={modalShowthree}
                onHide={() => setModalShowThree(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ opactiy: "0.5" }}
              >

                <Modal.Body className='model-image' style={{ backgroundColor: "rgb(51, 50, 50)" }}>
                  <div className='row d-flex justify-content-center' >
                    <div className='col-12 d-flex- justify-content-end'>
                      <IoMdClose
                        onClick={() => setModalShowThree(false)}
                        size={28}
                        style={{ color: "white", cursor: "pointer" }}
                      />
                    </div>
                  </div>

                  <div className='row d-flex justify-content-center mt-4'>
                    <div className='col-md-6 d-flex justify-content-center'>
                      <img src={Capture4} className="project-modal-image" />
                    </div>
                    <div className='col-md-6 col-11 d-flex flex-column text-white mt-md-1 mt-4'>
                      <h1 className="footer-h2">ThunderBrwal</h1>
                      <p className='footer-pp'>Mint NFTs , and Play and earn reward tokens by playing game.Supporting real crypto payouts for battle mode. The competition is fierce.Blockchain technology is powering the future of gaming, allowing players to trade, sell, and play to earn.

                      </p>
                      <a href='https://thunderbrawl.netlify.app' target="_blank" className="btn btn-lightsss">Vist Website</a>
                    </div>
                  </div>
                </Modal.Body>
              </Modal> : <></>}
              <div className="card111 mb-5"><img src={Capture4} />

                <div className="info">
                  <h1>ThunderBrwal</h1>
                  <p>Mint NFTs , and Play and earn reward tokens by playing game</p>
                  <button onClick={() => setModalShowThree(true)}>Read More</button>
                </div>
              </div>
            </div>
            {/* bnb stake */}
            <div className=''>
              {modalShowfour ? <Modal
                show={modalShowfour}
                onHide={() => setModalShowfour(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ opactiy: "0.5" }}
              >

                <Modal.Body className='model-image' style={{ backgroundColor: "rgb(51, 50, 50)" }}>
                  <div className='row d-flex justify-content-center' >
                    <div className='col-12 d-flex- justify-content-end'>
                      <IoMdClose
                        onClick={() => setModalShowfour(false)}
                        size={28}
                        style={{ color: "white", cursor: "pointer" }}
                      />
                    </div>
                  </div>

                  <div className='row d-flex justify-content-center mt-4'>
                    <div className='col-md-6 d-flex justify-content-center'>
                      <img src={bnbStake} className="project-modal-image" />
                    </div>
                    <div className='col-md-6 col-11 d-flex flex-column text-white mt-md-1 mt-4'>
                      <h1 className="footer-h2">BNB Stake</h1>
                      <p className='footer-pp'>Plans return are float and daily profit for a new deposit will increase by 0.5% daily.Minimum deposit amount is 0.05 BNB and you can have multiple deposits.Earnings every moment, withdraw instantly any time (if you did not use capitalization of interest in Plan 4, Plan 5 and Plan 6)

                      </p>
                      <a href='https://hardcore-bhaskara-f04579.netlify.app/' target="_blank" className="btn btn-lightsss">Vist Website</a>
                    </div>
                  </div>
                </Modal.Body>
              </Modal> : <></>}
              <div className="card111 mb-5"><img src={bnbStake} />

                <div className="info">
                  <h1>BNB Stake</h1>
                  <p>Plans return are float and daily profit for a new deposit will increase by 0.5% daily</p>
                  <button onClick={() => setModalShowfour(true)}>Read More</button>
                </div>
              </div>
            </div>
            {/* falafel */}
            <div className=''>
              {modalShowfive ? <Modal
                show={modalShowfive}
                onHide={() => setModalShowfive(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ opactiy: "0.5" }}
              >

                <Modal.Body className='model-image' style={{ backgroundColor: "rgb(51, 50, 50)" }}>
                  <div className='row d-flex justify-content-center' >
                    <div className='col-12 d-flex- justify-content-end'>
                      <IoMdClose
                        onClick={() => setModalShowfive(false)}
                        size={28}
                        style={{ color: "white", cursor: "pointer" }}
                      />
                    </div>
                  </div>

                  <div className='row d-flex justify-content-center mt-4'>
                    <div className='col-md-6 d-flex justify-content-center'>
                      <img src={falafel} className="project-modal-image" />
                    </div>
                    <div className='col-md-6 col-11 d-flex flex-column text-white mt-md-1 mt-4'>
                      <h1 className="footer-h2">FALAFEL</h1>
                      <p className='footer-pp'>Stable & Profitable Yield Farming Dapp on Binance Smart Chain Stake Falafel-LP And Earn it with A Higher Profit Range



                      </p>
                      <a href='https://dreamy-albattani-865b06.netlify.app/' target="_blank" className="btn btn-lightsss">Vist Website</a>
                    </div>
                  </div>
                </Modal.Body>
              </Modal> : <></>}
              <div className="card111 mb-5"><img src={falafel} />

                <div className="info">
                  <h1>FALAFEL</h1>
                  <p>Stable & Profitable Yield Farming Dapp on Binance Smart Chain</p>
                  <button onClick={() => setModalShowfive(true)}>Read More</button>
                </div>
              </div>
            </div>
            {/* Crypto Car Club  */}
            <div className=''>
              {modalShowSIX ? <Modal
                show={modalShowSIX}
                onHide={() => setModalShowSIX(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ opactiy: "0.5" }}
              >

                <Modal.Body className='model-image' style={{ backgroundColor: "rgb(51, 50, 50)" }}>
                  <div className='row d-flex justify-content-center' >
                    <div className='col-12 d-flex- justify-content-end'>
                      <IoMdClose
                        onClick={() => setModalShowSIX(false)}
                        size={28}
                        style={{ color: "white", cursor: "pointer" }}
                      />
                    </div>
                  </div>

                  <div className='row d-flex justify-content-center mt-4'>
                    <div className='col-md-6 d-flex justify-content-center'>
                      <img src={crytpoCar} className="project-modal-image" />
                    </div>
                    <div className='col-md-6 col-11 d-flex flex-column text-white mt-md-1 mt-4'>
                      <h1 className="footer-h2">Crypto Car Club </h1>
                      <p className='footer-pp'>Stable & Profitable Yield Farming Dapp on Binance Smart Chain Stake Falafel-LP And Earn it with A Higher Profit Range



                      </p>
                      <a href='https://elastic-williams-5acb01.netlify.app/' target="_blank" className="btn btn-lightsss">Vist Website</a>
                    </div>
                  </div>
                </Modal.Body>
              </Modal> : <></>}
              <div className="card111 mb-5"><img src={crytpoCar} />

                <div className="info">
                  <h1>Crypto Car Club </h1>
                  <p>Stable & Profitable Yield Farming Dapp on Binance Smart Chain</p>
                  <button onClick={() => setModalShowSIX(true)}>Read More</button>
                </div>
              </div>
            </div>
            {/* SAVAGE WOLVES  */}
            <div className=''>
              {modalShowseven ? <Modal
                show={setModalShowseven}
                onHide={() => setModalShowseven(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ opactiy: "0.5" }}
              >

                <Modal.Body className='model-image' style={{ backgroundColor: "rgb(51, 50, 50)" }}>
                  <div className='row d-flex justify-content-center' >
                    <div className='col-12 d-flex- justify-content-end'>
                      <IoMdClose
                        onClick={() => setModalShowseven(false)}
                        size={28}
                        style={{ color: "white", cursor: "pointer" }}
                      />
                    </div>
                  </div>

                  <div className='row d-flex justify-content-center mt-4'>
                    <div className='col-md-6 d-flex justify-content-center'>
                      <img src={SAVAGE} className="project-modal-image" />
                    </div>
                    <div className='col-md-6 col-11 d-flex flex-column text-white mt-md-1 mt-4'>
                      <h1 className="footer-h2">SAVAGE WOLVES</h1>
                      <p className='footer-pp'>Savage Wolves are a limited collection of 2000 Genesis, high-quality, pixelated and randomly generated NFTs. Each NFT has specific attributes and variables which make them unique and exclusive. Savage Wolves will yield Savage Tokens ($SVG) per day. You will be able to collect your $SVG Tokens right after your mint. Utility of the $SVG token will include the following but will not be limited to Legendary Wolves Breeding, Launchpad Access, Digital Collectibles, and grant access to the metaverse.
                      </p>
                      <a href='https://musing-goodall-6b0c08.netlify.app/' target="_blank" className="btn btn-lightsss">Vist Website</a>
                    </div>
                  </div>
                </Modal.Body>
              </Modal> : <></>}
              <div className="card111 mb-5"><img src={SAVAGE} />

                <div className="info">
                  <h1>SAVAGE WOLVES</h1>
                  <p>Savage Wolves are a limited collection of 2000</p>
                  <button onClick={() => setModalShowseven(true)}>Read More</button>
                </div>
              </div>
            </div>
            {/* Meta gauge  */}
            <div className='m-3'>
              {modalShoweight ? <Modal
                show={modalShoweight}
                onHide={() => setModalShowEight(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ opactiy: "0.5" }}
              >

                <Modal.Body className='model-image' style={{ backgroundColor: "rgb(51, 50, 50)" }}>
                  <div className='row d-flex justify-content-center' >
                    <div className='col-12 d-flex- justify-content-end'>
                      <IoMdClose
                        onClick={() => setModalShowEight(false)}
                        size={28}
                        style={{ color: "white", cursor: "pointer" }}
                      />
                    </div>
                  </div>

                  <div className='row d-flex justify-content-center mt-4'>
                    <div className='col-md-6 d-flex justify-content-center'>
                      <img src={gauge} className="project-modal-image" />
                    </div>
                    <div className='col-md-6 col-11 d-flex flex-column text-white mt-md-1 mt-4'>
                      <h1 className="footer-h2">Meta gauge</h1>
                      <p className='footer-pp'>Metagauge is a mobility location-based (GPS) blockchain data platform that creates and shares user mobility movement data through a self-developed Gauge DApp (Decentralized Application). It operates on the Binance Smart Chain, and the Gauge Token is generated by blockchain mining according to the user's mobility location-based (GPS) movement data and the generation of movement data related to movement distance, movement time, and sharing of origin and destination.
                      </p>
                      <a href='https://www.gauge.farm/' target="_blank" className="btn btn-lightsss">Vist Website</a>
                    </div>
                  </div>
                </Modal.Body>
              </Modal> : <></>}
              <div className="card111 mb-5"><img src={gauge} />

                <div className="info">
                  <h1>Meta gauge</h1>
                  <p>Mobility Location Data Blockchain Mining Platform</p>
                  <button onClick={() => setModalShowEight(true)}>Read More</button>
                </div>
              </div>
            </div>
            {/* WOLF NODES  */}
            <div className=''>
              {modalShowFOURTEEN ? <Modal
                show={modalShowFOURTEEN}
                onHide={() => setModalShowFOURTEEN(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ opactiy: "0.5" }}
              >

                <Modal.Body className='model-image' style={{ backgroundColor: "rgb(51, 50, 50)" }}>
                  <div className='row d-flex justify-content-center' >
                    <div className='col-12 d-flex- justify-content-end'>
                      <IoMdClose
                        onClick={() => setModalShowFOURTEEN(false)}
                        size={28}
                        style={{ color: "white", cursor: "pointer" }}
                      />
                    </div>
                  </div>

                  <div className='row d-flex justify-content-center mt-4'>
                    <div className='col-md-6 d-flex justify-content-center'>
                      <img src={wolf} className="project-modal-image" />
                    </div>
                    <div className='col-md-6 col-11 d-flex flex-column text-white mt-md-1 mt-4'>
                      <h1 className="footer-h2">WOLF NODES</h1>
                      <p className='footer-pp'>Metagauge is a mobility location-based (GPS) blockchain data platform that creates and shares user mobility movement data through a self-developed Gauge DApp (Decentralized Application). It operates on the Binance Smart Chain, and the Gauge Token is generated by blockchain mining according to the user's mobility location-based (GPS) movement data and the generation of movement data related to movement distance, movement time, and sharing of origin and destination.
                      </p>
                      <a href='https://pensive-easley-f1e556.netlify.app/' target="_blank" className="btn btn-lightsss">Vist Website</a>
                    </div>
                  </div>
                </Modal.Body>
              </Modal> : <></>}
              <div className="card111 mb-5"><img src={wolf} />

                <div className="info">
                  <h1>WOLF NODES</h1>
                  <p>Mobility Location Data Blockchain Mining Platform</p>
                  <button onClick={() => setModalShowFOURTEEN(true)}>Read More</button>
                </div>
              </div>
            </div>
            {/* splassive  */}
            <div className=''>
              {modalShowNINE ? <Modal
                show={modalShowNINE}
                onHide={() => setModalShowNINE(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ opactiy: "0.2" }}
              >

                <Modal.Body className='model-image' style={{ backgroundColor: "rgb(51, 50, 50)" }}>
                  <div className='row d-flex justify-content-center' >
                    <div className='col-12 d-flex- justify-content-end'>
                      <IoMdClose
                        onClick={() => setModalShowNINE(false)}
                        size={28}
                        style={{ color: "white", cursor: "pointer" }}
                      />
                    </div>
                  </div>

                  <div className='row d-flex justify-content-center mt-4'>
                    <div className='col-md-6 d-flex justify-content-center'>
                      <img src={splassive} className="project-modal-image" />
                    </div>
                    <div className='col-md-6 col-11 d-flex flex-column text-white mt-md-1 mt-4'>
                      <h1 className="footer-h2">Splassive</h1>
                      <p className='footer-pp'>Splash Network is the latest project developed by Splassive Team.The official token of the Splash Network is Splash (SPLASH) on the Avalanche Chain (AVAX) that captures value by being scarce, deflationary, censorship resistant, and by being built on a robust, truly decentralized blockchain.The recommended exchange for trading Splash is The Well contract which can be found directly on the platform's website under. The Well tab provides the lowest prices and highest liquidity, resulting in less slippage for larger trades.

                      </p>
                      <a href='https://splassive.com/' target="_blank" className="btn btn-lightsss">Vist Website</a>
                    </div>
                  </div>
                </Modal.Body>
              </Modal> : <></>}
              <div className="card111 mb-5"><img src={splassive} />

                <div className="info">
                  <h1>Splassive</h1>
                  <p>The next big passive income printer on the AVALANCHE Network</p>
                  <button onClick={() => setModalShowNINE(true)}>Read More</button>
                </div>
              </div>
            </div>
            {/* BNB Shares  */}
            <div className=''>
              {modalShowELEVEN ? <Modal
                show={modalShowELEVEN}
                onHide={() => setModalShowELEVEN(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ opactiy: "0.2" }}
              >

                <Modal.Body className='model-image' style={{ backgroundColor: "rgb(51, 50, 50)" }}>
                  <div className='row d-flex justify-content-center' >
                    <div className='col-12 d-flex- justify-content-end'>
                      <IoMdClose
                        onClick={() => setModalShowELEVEN(false)}
                        size={28}
                        style={{ color: "white", cursor: "pointer" }}
                      />
                    </div>
                  </div>

                  <div className='row d-flex justify-content-center mt-4'>
                    <div className='col-md-6 d-flex justify-content-center'>
                      <img src={bnbShers} className="project-modal-image" />
                    </div>
                    <div className='col-md-6 col-11 d-flex flex-column text-white mt-md-1 mt-4'>
                      <h1 className="footer-h2">BNB Shares</h1>
                      <p className='footer-pp'>A FINANCIAL SYSTEM BUILT ON SMART CONTRACT TECHNOLOGY.
                        OPEN TO ALL, TRANSPARENT TO ALL.

                      </p>
                      <a href='https://quirky-mirzakhani-ec522b.netlify.app/' target="_blank" className="btn btn-lightsss">Vist Website</a>
                    </div>
                  </div>
                </Modal.Body>
              </Modal> : <></>}
              <div className="card111 mb-5"><img src={bnbShers} />

                <div className="info">
                  <h1>BNB Shares</h1>
                  <p>The next big passive income printer on the AVALANCHE Network</p>
                  <button onClick={() => setModalShowELEVEN(true)}>Read More</button>
                </div>
              </div>
            </div>
            {/* Tron Forever  */}
            <div className=''>
              {modalShowTEN ? <Modal
                show={modalShowTEN}
                onHide={() => setModalShowTEN(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ opactiy: "0.2" }}
              >

                <Modal.Body className='model-image' style={{ backgroundColor: "rgb(51, 50, 50)" }}>
                  <div className='row d-flex justify-content-center' >
                    <div className='col-12 d-flex- justify-content-end'>
                      <IoMdClose
                        onClick={() => setModalShowTEN(false)}
                        size={28}
                        style={{ color: "white", cursor: "pointer" }}
                      />
                    </div>
                  </div>

                  <div className='row d-flex justify-content-center mt-4'>
                    <div className='col-md-6 d-flex justify-content-center'>
                      <img src={tronforever} className="project-modal-image" />
                    </div>
                    <div className='col-md-6 col-11 d-flex flex-column text-white mt-md-1 mt-4'>
                      <h1 className="footer-h2">Tron Forever</h1>
                      <p className='footer-pp'>Blockchain decentralized and anonymous platform
                        Totally secure income based on  TRX smart-contract
                        Smart-contract verified and audited by independent company

                      </p>
                      <a href='https://quizzical-cori-3855d3.netlify.app/' target="_blank" className="btn btn-lightsss">Vist Website</a>
                    </div>
                  </div>
                </Modal.Body>
              </Modal> : <></>}
              <div className="card111 mb-5"><img src={tronforever} />

                <div className="info">
                  <h1>Tron Forever</h1>
                  <p>The next big passive income printer on the AVALANCHE Network</p>
                  <button onClick={() => setModalShowTEN(true)}>Read More</button>
                </div>
              </div>
            </div>
            {/* RTD Tron Lottery  */}
            <div className=''>
              {modalShowTWELVE ? <Modal
                show={modalShowTWELVE}
                onHide={() => setModalShowTWELVE(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ opactiy: "0.2" }}
              >

                <Modal.Body className='model-image' style={{ backgroundColor: "rgb(51, 50, 50)" }}>
                  <div className='row d-flex justify-content-center' >
                    <div className='col-12 d-flex- justify-content-end'>
                      <IoMdClose
                        onClick={() => setModalShowTWELVE(false)}
                        size={28}
                        style={{ color: "white", cursor: "pointer" }}
                      />
                    </div>
                  </div>

                  <div className='row d-flex justify-content-center mt-4'>
                    <div className='col-md-6 d-flex justify-content-center'>
                      <img src={RTD} className="project-modal-image" />
                    </div>
                    <div className='col-md-6 col-11 d-flex flex-column text-white mt-md-1 mt-4'>
                      <h1 className="footer-h2">RTD Tron Lottery</h1>
                      <p className='footer-pp'>A FINANCIAL SYSTEM BUILT ON SMART CONTRACT TECHNOLOGY.
                        OPEN TO ALL, TRANSPARENT TO ALL.

                      </p>
                      <a href='https://stupefied-torvalds-acf59b.netlify.app/' target="_blank" className="btn btn-lightsss">Vist Website</a>
                    </div>
                  </div>
                </Modal.Body>
              </Modal> : <></>}
              <div className="card111 mb-5"><img src={RTD} />

                <div className="info">
                  <h1>RTD Tron Lottery</h1>
                  <p>RDTronlottery is a decenterlized community raffle smart contract</p>
                  <button onClick={() => setModalShowTWELVE(true)}>Read More</button>
                </div>
              </div>
            </div>
            {/* CENTER COIN  */}
            <div className=''>
              {modalShowTHIRTEEN ? <Modal
                show={modalShowTHIRTEEN}
                onHide={() => setModalShowTHIRTEEN(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ opactiy: "0.2" }}
              >

                <Modal.Body className='model-image' style={{ backgroundColor: "rgb(51, 50, 50)" }}>
                  <div className='row d-flex justify-content-center' >
                    <div className='col-12 d-flex- justify-content-end'>
                      <IoMdClose
                        onClick={() => setModalShowTHIRTEEN(false)}
                        size={28}
                        style={{ color: "white", cursor: "pointer" }}
                      />
                    </div>
                  </div>

                  <div className='row d-flex justify-content-center mt-4'>
                    <div className='col-md-6 d-flex justify-content-center'>
                      <img src={center} className="project-modal-image" />
                    </div>
                    <div className='col-md-6 col-11 d-flex flex-column text-white mt-md-1 mt-4'>
                      <h1 className="footer-h2">CENTER COIN</h1>
                      <p className='footer-pp'>A FINANCIAL SYSTEM BUILT ON SMART CONTRACT TECHNOLOGY.
                        OPEN TO ALL, TRANSPARENT TO ALL.

                      </p>
                      <a href='https://www.centercoin.farm/locking/' target="_blank" className="btn btn-lightsss">Vist Website</a>
                    </div>
                  </div>
                </Modal.Body>
              </Modal> : <></>}
              <div className="card111 mb-5"><img src={center} />

                <div className="info">
                  <h1>CENTER COIN</h1>
                  <p>A FINANCIAL SYSTEM BUILT ON SMART CONTRACT TECHNOLOGY.</p>
                  <button onClick={() => setModalShowTHIRTEEN(true)}>Read More</button>
                </div>
              </div>
            </div>
            {/* BERRY CLUB  */}
            <div className=''>
              {modalShowFIFTEEN ? <Modal
                show={modalShowFIFTEEN}
                onHide={() => setModalShowFIFTEEN(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ opactiy: "0.2" }}
              >

                <Modal.Body className='model-image' style={{ backgroundColor: "rgb(51, 50, 50)" }}>
                  <div className='row d-flex justify-content-center' >
                    <div className='col-12 d-flex- justify-content-end'>
                      <IoMdClose
                        onClick={() => setModalShowFIFTEEN(false)}
                        size={28}
                        style={{ color: "white", cursor: "pointer" }}
                      />
                    </div>
                  </div>

                  <div className='row d-flex justify-content-center mt-4'>
                    <div className='col-md-6 d-flex justify-content-center'>
                      <img src={berryClub} className="project-modal-image" />
                    </div>
                    <div className='col-md-6 col-11 d-flex flex-column text-white mt-md-1 mt-4'>
                      <h1 className="footer-h2">BERRY CLUB</h1>
                      <p className='footer-pp'>Join Metaverse World that you create with celebrities in every field.

                        Berry Club publishes the celebrity's 10,000 PFP stars based on klaytn, And comprises community membership form creating with both celebrity and NFT holder.

                        Join us on a new journey which begins on Berry Club, and enjoy the various benefit!

                      </p>
                      <a href='https://berry-club.netlify.app/' target="_blank" className="btn btn-lightsss">Vist Website</a>
                    </div>
                  </div>
                </Modal.Body>
              </Modal> : <></>}
              <div className="card111 mb-5"><img src={berryClub} />

                <div className="info">
                  <h1>BERRY CLUB</h1>
                  <p>Join Metaverse World that you create with celebrities in every field.</p>
                  <button onClick={() => setModalShowFIFTEEN(true)}>Read More</button>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );

}