import { GrFacebookOption } from "react-icons/gr"
import { BsTwitter } from "react-icons/bs"

function Footer() {
    return (
        <>
            <div className="Footer">
                <div className="footerTop">
                    <div className="fTopA">
                        <div className="fTA">
                            <img src="./img/footerTop.png" alt="" /><h1>E-Comm</h1>
                        </div>
                        <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.
                        </span>
                    </div>
                    <div className="fTopB">
                        <h1>Follow Us</h1>
                        <span>Since the 1500s, when an unknown printer took a galley of type and scrambled.</span>
                        <div className="imgs">
                            <GrFacebookOption /> <BsTwitter />
                        </div>
                    </div>
                    <div className="fTopC">
                        <h1>Contact Us</h1>
                        <span>E-Comm , 4578 <br /> Marmora Road, <br /> Glasgow D04 89GR</span>
                    </div>
                </div>
                <div className="footerCenter">
                    <div className="fCenterA">
                        <span>Infomation</span>
                        <span>About Us
                            Infomation
                            Privacy Policy
                            Terms & Conditions</span>
                    </div>
                    <div className="fCenterA">
                        <span>Service</span>
                        <span>About Us
                            Infomation
                            Privacy Policy
                            Terms & Conditions</span>
                    </div>
                    <div className="fCenterA">
                        <span>My Account</span>
                        <span>About Us
                            Infomation
                            Privacy Policy
                            Terms & Conditions</span>
                    </div>
                    <div className="fCenterA">
                        <span>Our Offers</span>
                        <span>About Us
                            Infomation
                            Privacy Policy
                            Terms & Conditions</span>
                    </div>
                </div>
                <hr />
                <div className="fBottom">
                    <img src="./img/Shape 327.png" alt="" />
                    <img src="./img/Paypal.png" alt="" />
                    <img src="./img/Group 19.png" alt="" />
                    <img src="./img/Western-union.png" alt="" />
                </div>
            </div>
        </>
    )
}
export default Footer