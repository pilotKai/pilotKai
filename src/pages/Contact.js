import Footer from "../Footer"
import Navbar from "../Navbar"

function Contact() {
    return (
        <>
            <Navbar />
            <div className="Contact">
                <div className="Top">
                    <div className="contactLeft">
                        <div className="left"><img src="./img/Contact-Top-Left.png" alt="" /></div>
                        <div className="right">
                            <div className="rightTop">
                                <h1>get in <br /> touch</h1>
                            </div>
                            <div className="rightBottom">
                                <span>contact@e-comm.ng</span>
                                <span>*234 4556 6665 34</span>
                                <span>20 Prince Hakerem Lekki Phase 1. Lagos.</span>
                            </div>
                        </div>
                    </div>
                    <div className="contactRight">
                        <span>Fullname</span>
                        <input id="cRight1" type="text" placeholder="James Doe" />
                        <span>Email</span>
                        <input id="cRight2" type="text" placeholder="jamesdoe@gmail.com " />
                        <span>Message</span>
                        <input id="cRight3" type="text" placeholder="Type your message" />
                        <button>Submit</button>
                    </div>
                </div>
                <div className="searchInHome">
                    <input type="text" placeholder="Search query..." />
                    <button>Search</button>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Contact