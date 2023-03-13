import { Routes, Route, NavLink } from "react-router-dom";
import { AiFillCaretDown, AiFillCloseCircle, AiOutlineClose, AiOutlineEye, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { BiSearch } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { useContext } from "react";
import { ContexData } from "./context/ContextDate";
import { FcLike } from "react-icons/fc";
import { BasicRating } from "./layouts/StarRating";

function Navbar() {

    const { forLocal, forFavorite, allIinfo, add_to_favorite, eyeFunc, add_to_basket, search, setSearch } = useContext(ContexData);

    const [chiq, setChiq] = useState(false);

    const [forSearch, setForSearch] = useState(false);

    return (
        <>

            {
                forSearch ?
                    <div className="forSearchModal">
                        <div className="forSearchTop">
                            <input onInput={(e) => setSearch(e.target.value)} value={search.empty} type="text" name="forSearch" id="forSearch" placeholder="Search for something..." />
                            <button className="forSearchExit" onClick={() => setForSearch(false)}><span><AiOutlineClose /></span></button>
                        </div>
                        <div className="cardInSneakers forSearchBottom">
                            {
                                allIinfo.filter((item) => {
                                    if (search === "") {
                                        return item;
                                    } else if (
                                        item.title.toLowerCase().includes(search.toLowerCase())
                                    ) {
                                        return item;
                                    }
                                }).map(val => (
                                    <div className="BCAOne" key={val.id}>
                                        <div className="rasmBCAOne">
                                            <div className="modal">
                                                <div className="icons">
                                                    <button className="iconBtn" onClick={() => add_to_favorite(val)}>{forFavorite.filter(l => l.id === val.id).length === 0 ? <span><AiOutlineHeart /></span> : <span><FcLike /></span>}</button>
                                                    <button className="iconBtn" onClick={() => add_to_basket(val)}>{forLocal.filter(l => l.id === val.id).length === 0 ? <span><SlBasket /></span> : <span id="redSpan"><SlBasket /></span>}</button>
                                                    <button className="iconBtn" onClick={eyeFunc}><span><AiOutlineEye /></span></button>
                                                </div>
                                            </div>
                                            <figure><img src={val.img} alt="No image" /></figure>
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
                    : null
            }

            <div className="mediaNavbar">
                <button className="hamburger" onClick={() => setChiq(true)}><span><HiMenu /></span></button>
                <div className="itogo"><input type="text" placeholder="$0.00" /><button><BiSearch /></button></div>
                <div className="nTopRight">
                    <div className="myProfileLink">
                        <button>
                            <NavLink to='/myprofil'>
                                <span id="myProf"><AiOutlineUser /></span>
                            </NavLink>
                        </button>
                    </div>
                    <div className="basket"><NavLink to="/basket"><span><SlBasket /></span></NavLink><span id="length">{forLocal.length}</span></div>
                    <div className="items"><NavLink to="/like"><span><AiOutlineHeart /></span></NavLink><span id="length">{forFavorite.length}</span></div>
                </div>
                {/* Sidebar */}
                {
                    chiq ?
                        <div className="sidebar" onClick={() => setChiq(false)}>
                            <div className="siderbarCont" onClick={(e) => e.stopPropagation()}>
                                <div className="sidebarTop">
                                    <div className="nBottomLeft">
                                        <img src="./img/Icon (1).png" alt="" />
                                        <h1>E-Comm</h1>
                                    </div>
                                    <button className="chiqish" onClick={() => setChiq(!chiq)}><span><AiFillCloseCircle /></span></button>
                                </div>
                                <div className="sidebarCenter">
                                    <NavLink to="/">HOME</NavLink>
                                    <NavLink to="/bags">BAGS</NavLink>
                                    <NavLink to="/sneakers">SNEAKERS</NavLink>
                                    <NavLink to="/belt">BELT</NavLink>
                                    <NavLink to="/contact">CONTACT</NavLink>
                                </div>
                                <div className="sidebarBottom">
                                    <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
                                </div>
                            </div>
                        </div>
                        : ''
                }
            </div>

            <div className="navbar">
                <div className="navTop">
                    <div className="nTopLeft">
                        <button>USA / RUS</button>
                    </div>
                    <div className="nTopRight">
                        <div className="myProfileLink">
                            <button>
                                <NavLink to='/myprofil'>
                                    <span id="myProf"><AiOutlineUser /></span>
                                    <span>My profile</span>
                                </NavLink>
                            </button>
                        </div>
                        <div className="basket"> <NavLink to="/basket"><span><SlBasket /></span></NavLink><span id="length">{forLocal.length}</span></div>
                        <div className="items"><NavLink to="/like"><span><AiOutlineHeart /></span></NavLink><span id="length">{forFavorite.length}</span></div>
                        <div className="itogo" onClick={() => setForSearch(true)}><input disabled type="text" placeholder="search something..." /><button><BiSearch /></button></div>

                    </div>
                </div>
                <div className="navBottom">
                    <div className="nBottomLeft">
                        <img src="./img/Icon (1).png" alt="" />
                        <h1>E-Comm</h1>
                    </div>
                    <div className="nBottomRight">
                        <NavLink to="/">HOME</NavLink>
                        <NavLink to="/bags">BAGS</NavLink>
                        <NavLink to="/sneakers">SNEAKERS</NavLink>
                        <NavLink to="/belt">BELT</NavLink>
                        <NavLink to="/contact">CONTACT</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar