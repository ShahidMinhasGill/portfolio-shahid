import React, { useState } from 'react'
import "./Project.css"
import Capture from "../../Assets/Capture.PNG";
import Capture3 from "../../Assets/Capture3.PNG"
import Capture4 from "../../Assets/Capture4.PNG"
import Capture5 from "../../Assets/Capture5.PNG"
import Capture6 from "../../Assets/Capture6.PNG"

import googy from "../../Assets/googy.PNG"
import Modal from 'react-bootstrap/Modal'
import { IoMdClose } from "react-icons/io";
function Project() {
    const [modalShow, setModalShow] = useState(false);
    const [modalShowOne, setModalShowOne] = useState(false);
    const [modalShowtwo, setModalShowTwo] = useState(false);
    const [modalShowthree, setModalShowThree] = useState(false);
    const [modalShowfour, setModalShowfour] = useState(false);
    const [modalShowfive, setModalShowfive] = useState(false);
    return (
        <div className='project-color mt-5' id='project'>
            <div className='container '>
                <div className='row d-flex justify-content-center'>
                    <div className='col-12 pt-5'>
                        <div className="bg_move">
                            <h1>My Projects</h1>
                        </div>
                    </div>

                </div>
                <div className='row d-flex justify-content-center mt-4'>
                    <div className='col-md-4 col-11'>
                        {modalShow ? <Modal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            style={{ background: "rgb(131, 131, 131)" }}
                        >

                            <Modal.Body className='model-image' style={{ border: "2px solid #FF5043", backgroundColor: "black" }}>
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
                                        <img src={Capture} className="project-modal-image" />
                                    </div>
                                    <div className='col-md-6 col-11 d-flex flex-column text-white mt-md-1 mt-4'>
                                        <h1 className="footer-h2">Road-Fc</h1>
                                        <p className='footer-pp'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

                                        </p>
                                        <a href='https://road-fc.netlify.app/' target="_blank" className="btn btn-lightsss">Vist Website</a>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal> : <></>}
                        <div className="card111 mb-5"><img src={Capture} />

                            <div className="info">
                                <h1>Road-Fc</h1>
                                <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                                <button onClick={() => setModalShow(true)}>Read More</button>
                            </div>
                        </div>
                    </div>


                    <div className='col-md-4 col-11'>
                        {modalShowOne ? <Modal
                            show={modalShowOne}
                            onHide={() => setModalShowOne(false)}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            style={{ background: "rgb(131, 131, 131)" }}
                        >

                            <Modal.Body className='model-image' style={{ border: "2px solid #FF5043", backgroundColor: "black" }}>
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
                                        <img src={googy} className="project-modal-image" />
                                    </div>
                                    <div className='col-md-6 col-11 d-flex flex-column text-white mt-md-1 mt-4'>
                                        <h1 className="footer-h2">NextGen</h1>
                                        <p className='footer-pp'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

                                        </p>
                                        <a href='https://road-fc.netlify.app/' target="_blank" className="btn btn-lightsss">Vist Website</a>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal> : <></>}
                        <div className="card111 mb-5"><img src={googy} />

                            <div className="info">
                                <h1>NextGen</h1>
                                <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                                <button onClick={() => setModalShowOne(true)}>Read More</button>
                            </div>
                        </div>
                    </div>


                    <div className='col-md-4 col-11'>
                        {modalShowtwo ? <Modal
                            show={modalShowtwo}
                            onHide={() => setModalShowTwo(false)}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            style={{ background: "rgb(131, 131, 131)" }}
                        >

                            <Modal.Body className='model-image' style={{ border: "2px solid #FF5043", backgroundColor: "black" }}>
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
                                        <p className='footer-pp'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

                                        </p>
                                        <a href='https://road-fc.netlify.app/' target="_blank" className="btn btn-lightsss">Vist Website</a>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal> : <></>}
                        <div className="card111 mb-5"><img src={Capture3} />

                            <div className="info">
                                <h1>Goongye</h1>
                                <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                                <button onClick={() => setModalShowTwo(true)}>Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 col-11'>
                        {modalShowthree ? <Modal
                            show={modalShowthree}
                            onHide={() => setModalShowThree(false)}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            style={{ background: "rgb(131, 131, 131)" }}
                        >

                            <Modal.Body className='model-image' style={{ border: "2px solid #FF5043", backgroundColor: "black" }}>
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
                                        <p className='footer-pp'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

                                        </p>
                                        <a href='https://road-fc.netlify.app/' target="_blank" className="btn btn-lightsss">Vist Website</a>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal> : <></>}
                        <div className="card111 mb-5"><img src={Capture4} />

                            <div className="info">
                                <h1>ThunderBrwal</h1>
                                <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                                <button onClick={() => setModalShowThree(true)}>Read More</button>
                            </div>
                        </div>
                    </div>


                    <div className='col-md-4 col-11'>
                        {modalShowfour ? <Modal
                            show={modalShowfour}
                            onHide={() => setModalShowfour(false)}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            style={{ background: "rgb(131, 131, 131)" }}
                        >

                            <Modal.Body className='model-image' style={{ border: "2px solid #FF5043", backgroundColor: "black" }}>
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
                                        <img src={Capture5} className="project-modal-image" />
                                    </div>
                                    <div className='col-md-6 col-11 d-flex flex-column text-white mt-md-1 mt-4'>
                                        <h1 className="footer-h2">GYZMOSTAKE</h1>
                                        <p className='footer-pp'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

                                        </p>
                                        <a href='https://road-fc.netlify.app/' target="_blank" className="btn btn-lightsss">Vist Website</a>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal> : <></>}
                        <div className="card111 mb-5"><img src={Capture5} />

                            <div className="info">
                                <h1>GYZMOSTAKE</h1>
                                <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                                <button onClick={() => setModalShowfour(true)}>Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 col-11'>
                        {modalShowfive ? <Modal
                            show={modalShowfive}
                            onHide={() => setModalShowfive(false)}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            style={{ background: "rgb(131, 131, 131)" }}
                        >

                            <Modal.Body className='model-image' style={{ border: "2px solid #FF5043", backgroundColor: "black" }}>
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
                                        <img src={Capture6} className="project-modal-image" />
                                    </div>
                                    <div className='col-md-6 col-11 d-flex flex-column text-white mt-md-1 mt-4'>
                                        <h1 className="footer-h2">NEMESIS DAO</h1>
                                        <p className='footer-pp'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

                                        </p>
                                        <a href='https://road-fc.netlify.app/' target="_blank" className="btn btn-lightsss">Vist Website</a>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal> : <></>}
                        <div className="card111 mb-5"><img src={Capture6} />

                            <div className="info">
                                <h1>NEMESIS DAO</h1>
                                <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                                <button onClick={() => setModalShowfive(true)}>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className='main-nxt'>
                        <a className='nxtbutton' href="">&laquo; Previous</a>
                        <a className='nxtbutton' href="">Next &raquo;</a>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Project