import { useContext } from "react"
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai"
import { FcLike } from "react-icons/fc"
import { SlBasket } from "react-icons/sl"
import { ContexData } from "../context/ContextDate"
import Footer from "../Footer"
import { BasicRating } from "../layouts/StarRating"
import Navbar from "../Navbar"

function Belt() {
    const { belt, add_to_favorite, add_to_basket, eyeFunc, forFavorite, forLocal } = useContext(ContexData)
    return (
        <>
            <Navbar />
            <div className="belt">
                <div className="cardsInSneakers">
                    <h1 className="gIBTitle">Belt</h1>
                    <div className="cardInSneakers">
                        {
                            belt.map(val => (
                                <div className="BCAOne" key={val.id}>
                                    <div className="rasmBCAOne">
                                        <div className="modal">
                                            <div className="icons">
                                                <button className="iconBtn" onClick={() => add_to_favorite(val)}>{forFavorite.filter(l => l.id === val.id).length === 0 ? <span><AiOutlineHeart /></span> : <span><FcLike /></span>}</button>
                                                <button className="iconBtn" onClick={() => add_to_basket(val)}>{forLocal.filter(l => l.id === val.id).length === 0 ? <span><SlBasket /></span> : <span id="redSpan"><SlBasket /></span>}</button>
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
                                            <h1>{val.price}</h1>
                                            <p>{val.prev}</p>
                                            <h3>{val.skidka}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Belt