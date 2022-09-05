import React from 'react'
import "./Home.css"
import ReactWhatsapp from 'react-whatsapp';
function Home() {
    return (
        <div className='container cont-width d-flex justify-content-center align-items-center'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-7  col-11'>
                    <h3 className='home-h3'>My name Is Shahid Minhas</h3>
                    <p className='home-p'>
                        I have 5+ years of experience in this field of Blockchain, web development and NodeJS. I work in the latest website technologies because of their advantages like the scalability of React and elegant design. My area of expertise are,

                    </p>
                    <p className='home-p'>
                        <span>Front End Services:</span> <br />
                        HTML, CSS, JavaScript, Bootstrap, Redux, Redux Thunk, Redux Toolkit, TypeScript, Material UI , Custom Styling, Responsive Design, Tailwind CSS, API Integration, React JS,, Next js, server-side rendered application, React form with Formik, React Hook Form and Yup,
                    </p>
                    <p className='home-p'>
                        NodeJS Services: <br />
                        ExpressJs, MongoDB, MySQL, Payment Gateway Integration, Create Restful APIs,
                    </p>
                    <p className='home-p'>
                        Blockchain Services: <br />
                        Building cryptocurrencies (ERC20, ERC777), NFT (ERC721, ERC721-A, ERC1155), staking, minting and marketplace dapps, defi dapps, decentralized exchange and decentralized donation platform. If you have any queries , I am Available 24/7 get in touch to discuss details.
                    </p>


                    <div class="button-container-2">
                        <span class="mas">Contact Me</span>
                        <ReactWhatsapp number="+92 303 4051310" message="Hello World!!!" style={{ backgroundColor: "transparent" }} />
                        {/* <a href='https://wa.me/+92 303 6954689'>
                            <button type="button" name="Hover">Contact Me</button>
                            </a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home