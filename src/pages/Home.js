import { NavLink } from "react-router-dom";
import { BasicRating } from "../layouts/StarRating";
import { AiOutlineHeart } from "react-icons/ai/";
import { SlBasket } from "react-icons/sl/";
import { useContext, useEffect, useState } from "react";
import { ContexData } from "../context/ContextDate";
import { AiOutlineEye } from "react-icons/ai/"
import Navbar from "../Navbar";
import Footer from "../Footer";
import { FcLike } from "react-icons/fc";

function Home() {

    const { bestSeller, bestSeller1, basketFunk, eyeFunc, add_to_favorite, add_to_basket, forFavorite, forLocal } = useContext(ContexData);

    const [taymer, setTaymer] = useState([]);

    function taymerFunk() {
        setTaymer([{
            hour: `${new Date().getHours()}`,
            minute: `${new Date().getMinutes()}`,
            seconds: `${new Date().getSeconds()}`
        }])
    }

    useEffect(() => {
        setInterval(() => {
            taymerFunk();
        }, 1000);
    }, []);

    return (
        <>
            <Navbar />
            <div className="Home">
                <section className="HomeOne">
                    <div className="textHOne">
                        <h1>
                            Super Flash Sale <br />
                            50% Off
                        </h1>
                    </div>
                    {
                        taymer.map((a, b) => (
                            <div className="taymer" key={b}>
                                <div className="soat">{a.hour < 10 ? '0' + a.hour : a.hour}</div>
                                <span>:</span>
                                <div className="soat minut">{a.minute < 10 ? '0' + a.minute : a.minute}</div>
                                <span>:</span>
                                <div className="soat sekund">{a.seconds < 10 ? '0' + a.seconds : a.seconds}</div>
                            </div>
                        ))
                    }
                </section>



                <section className="HomeTwo">
                    <div className="Cards">
                        <div className="CardsA">
                            <div className="CardAone">
                                <div className="textCardAOne">
                                    <div className="topTCaO"><p>
                                        FS - QUILTED MAXI <br /> CROSS BAG
                                    </p></div>
                                    <div className="img"></div>
                                    <div className="bottomTCaO">
                                        <div className="BottomLeftTCaO">
                                            <p>$534,33</p>
                                            <span>24% Off</span>
                                        </div>
                                        <div className="BottomRightTCaO">
                                            <p>$299,43</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="CardAtwo">
                                <div className="textCaT">
                                    <div className="topCaT">
                                        <p>FS - Nike Air <br /> Max 270 React...</p>
                                        <span>$299,43</span>
                                    </div>
                                    <div className="bottomCaT">
                                        <p>$534,33</p>
                                        <span>24% Off</span>
                                    </div>
                                </div>
                            </div>
                            <div className="CardAthree">
                                <div className="textCaTr">
                                    <div className="top">
                                        <p>FS - Nike Air <br /> Max 270 React...</p>
                                    </div>
                                    <div className="center">
                                        <span>$534,33</span>
                                        <p>24% Off</p>
                                    </div>
                                    <div className="bottom">
                                        <p>
                                            $299,43
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <div className="HomeThree">
                    <div className="HTrTop">
                        <div className="HTrTtext">
                            <h1>BEST SELLER</h1>
                        </div>
                        <div className="HTrlinks">
                            <NavLink to="/">All</NavLink>
                            <NavLink to="/">Bags</NavLink>
                            <NavLink to="/">Sneakers</NavLink>
                            <NavLink to="/">Belt</NavLink>
                            <NavLink to="/">Sunglasses</NavLink>
                        </div>
                    </div>
                    <div className="obshiyCard">
                        <div className="HTrBottom">
                            {
                                bestSeller.map((val, index) => (
                                    <div className="BCAOne" key={val.id}>
                                        <div className="rasmBCAOne">
                                            <div className="modal">
                                                <div className="icons">
                                                    <button className="iconBtn" onClick={() => add_to_favorite(val)}> {forFavorite.filter(l => l.id === val.id).length === 0 ?<span><AiOutlineHeart /></span>:<span><FcLike /></span>}</button>
                                                    <button className="iconBtn" onClick={() => add_to_basket(val)}>{forLocal.filter(l => l.id === val.id).length === 0 ? <span><SlBasket/></span> : <span id="redSpan"><SlBasket/></span>}</button>
                                                    <button className="iconBtn" onClick={eyeFunc}><span><AiOutlineEye /></span></button>
                                                </div>
                                            </div>
                                            <figure><img src={val.img} alt={val.img} /></figure>
                                        </div>
                                        <div className="text">
                                            <p>{val.title}</p>
                                            <div className="starUchun">
                                                <BasicRating />
                                            </div>
                                            <div className="alohida">
                                                <h1>${val.price}</h1>
                                                <p>${val.prev}</p>
                                                <h3>{val.skidka}% Off</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                        {/* <div className="HTrBottom1">
                        {
                            bestSeller1.map((val, index) => (
                                <div className="BCAOne" key={index}>
                                    <div className="rasmBCAOne">
                                        <div className="modal">
                                            <div className="icons">
                                                <button className="iconBtn" onClick={() => add_to_favorite(val)}><span><AiOutlineHeart /></span></button>
                                                <button className="iconBtn" onClick={() => basketFunk(val)}><span><SlBasket /></span></button>
                                                <button className="iconBtn" onClick={eyeFunc}><span><AiOutlineEye /></span></button>
                                            </div>
                                        </div>
                                        <figure><img src={val.img} alt={val.img} /></figure>
                                    </div>
                                    <div className="text">
                                        <p>{val.title}</p>
                                        <div className="starUchun">
                                            <BasicRating />
                                        </div>
                                        <div className="alohida">
                                            <h1>${val.price}</h1>
                                            <p>${val.prev}</p>
                                            <h3>{val.skidka}% Off</h3>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div> */}
                    </div>
                </div>



                <section className="HomeFour">
                    <div className="left">
                        <div className="LeftText">
                            <h1>Adidas Men Running <br />
                                Sneakers</h1>
                            <span>Performance and design. Taken right to the edge.</span>
                            <p>SHOP NOW</p>
                        </div>
                    </div>
                    <div className="right">
                        {/* <img src="./img/HFour-right.png" alt="" /> */}
                    </div>
                </section>

                {/* Phone screen only */}
                <div className="megaSale">
                    <h1>Get a 50% discount by entering the <b>'MEGSL'</b> promo code</h1>
                </div>


                <section className="HomeFive">
                    <div className="Cards">
                        <div className="HFiveCardA">
                            <div className="img"><img src="./img/HFive-A.png" alt="" /></div>
                            <div className="text">
                                <h1>FREE SHIPPING</h1>
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                            </div>
                        </div>
                        <div className="HFiveCardA">
                            <div className="img"><img src="./img/HFive-B.png" alt="" /></div>
                            <div className="text">
                                <h1>FREE SHIPPING</h1>
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                            </div>
                        </div>
                        <div className="HFiveCardA">
                            <div className="img"><img src="./img/HFive-C.png" alt="" /></div>
                            <div className="text">
                                <h1>FREE SHIPPING</h1>
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                            </div>
                        </div>
                    </div>
                    <div className="latestNews">
                        <div className="top">
                            <h1>LATEST NEWS</h1>
                        </div>
                        <div className="bottom">
                            <div className="HFiveCardB">
                                <div className="left"><img src="./img/nike.png" alt="" /></div>
                                <div className="right">
                                    <p>01 Jan, 2015</p>
                                    <h3>Fashion Industry</h3>
                                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                </div>
                            </div><div className="HFiveCardB">
                                <div className="left"><img src="./img/figma-1-logo 1.png" alt="" /></div>
                                <div className="right">
                                    <p>01 Jan, 2015</p>
                                    <h3>Fashion Industry</h3>
                                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                </div>
                            </div><div className="HFiveCardB">
                                <div className="left"><img src="./img/kronos-logo-1-1 1.png" alt="" /></div>
                                <div className="right">
                                    <p>01 Jan, 2015</p>
                                    <h3>Fashion Industry</h3>
                                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="featuredProducts">
                        <div className="top"><h1>FEATURED PRODUCTS</h1></div>
                        <div className="bottom">
                            <div className="fPbottomCard">
                                <div className="left"><img src="./img/fPbottom.png" alt="" /></div>
                                <div className="right">
                                    <p>Blue Swade Nike Sneakers</p>
                                    <div className="starUchun">
                                        <BasicRating />
                                        <div className="priceMobile">
                                            <span>$499</span>
                                            <span>$599</span>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <span>$499</span>
                                        <span>$599</span>
                                    </div>
                                </div>
                            </div>
                            <div className="fPbottomCard">
                                <div className="left"><img src="./img/fPbottom.png" alt="" /></div>
                                <div className="right">
                                    <p>Blue Swade Nike Sneakers</p>
                                    <div className="starUchun">
                                        <BasicRating />
                                        <div className="priceMobile">
                                            <span>$499</span>
                                            <span>$599</span>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <span>$499</span>
                                        <span>$599</span>
                                    </div>
                                </div>
                            </div>
                            <div className="fPbottomCard">
                                <div className="left"><img src="./img/fPbottom.png" alt="" /></div>
                                <div className="right">
                                    <p>Blue Swade Nike Sneakers</p>
                                    <div className="starUchun">
                                        <BasicRating />
                                        <div className="priceMobile">
                                            <span>$499</span>
                                            <span>$599</span>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <span>$499</span>
                                        <span>$599</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="searchInHome">
                            <input type="text" placeholder="Search query..." />
                            <button>Search</button>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
export default Home