import { useContext } from "react"
import { AiOutlineEye } from "react-icons/ai"
import { FcLike } from "react-icons/fc"
import { SlBasket } from "react-icons/sl"
import { ContexData } from "../context/ContextDate"
import Footer from "../Footer"
import { BasicRating } from "../layouts/StarRating"
import Navbar from "../Navbar"

export function Favorite() {
    const { forFavorite, add_to_favorite, delete_to_favorite, add_to_basket, eyeFunc } = useContext(ContexData)
    return (
        <>
            <Navbar />
            <div className="favorite">
                <div className="favoriteCards">
                    <div className="HTrBottom1">
                        {
                            forFavorite.length > 0 ?
                            forFavorite.map((val, index) => (
                                <div className="BCAOne" key={index}>
                                    <div className="rasmBCAOne">
                                        <div className="modal">
                                            <div className="icons">
                                                <button className="iconBtn" onClick={() => delete_to_favorite(val)}><span><FcLike /></span></button>
                                                <button className="iconBtn" onClick={() => add_to_basket(val)}><span><SlBasket /></span></button>
                                                <button className="iconBtn"  onClick={eyeFunc}><span><AiOutlineEye /></span></button>
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
                            )) : <h2>Ma'lumot topilmadi!</h2>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}