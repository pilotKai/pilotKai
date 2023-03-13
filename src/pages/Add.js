import { useContext, useState } from "react"
import { ContexData } from "../context/ContextDate"
import { AiFillHome } from "react-icons/ai";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

function Add() {
    const { backfunc, yangiP, setYangiP, yangiRef, inputData, setInputData, inputFunc, photoFunc, Add } = useContext(ContexData);

    // satate local
    return (
        <>
            <div className="crud">
                <div className="crud_home">
                    <button onClick={backfunc}><span><AiFillHome /></span></button>
                    <NavLink to={'/user-product'}><span>product</span>{yangiP.length > 0 ? <span className="yangiPLength">{yangiP.length}</span> : ''}</NavLink>
                </div>
                <div className="crud_kontent">
                    <h1>Add your new Product</h1>
                    <div className="add">
                        <form>
                            <input placeholder="Title" onInput={(e) => inputFunc(e)} id='title' name='title' value={inputData.title} type="text" />

                            <input placeholder="About" onInput={(e) => inputFunc(e)} id='about' name='about' value={inputData.about} type="text" />

                            <input placeholder="Count" onInput={(e) => inputFunc(e)} id='count' name='count' value={inputData.count} type="number" />

                            <input placeholder="Price" onInput={(e) => inputFunc(e)} id='price' name='price' value={inputData.price} type="number" />

                            <input placeholder="Skidka" onInput={(e) => inputFunc(e)} id='skidka' name='skidka' value={inputData.skidka} type="number" />

                            <div className="select">
                                {/* Color Select */}
                                <div className="selectOne">
                                    <label htmlFor="color">Color</label>
                                    <select name="rang" id="color" value={inputData.rang} onChange={(e) => inputFunc(e)}>
                                        <option value="a">Blue</option>
                                        <option value="b">Purple</option>
                                        <option value="c">Green</option>
                                        <option value="d">Black</option>
                                        <option value="e">Red</option>
                                    </select>
                                </div>
                                {/* Color Select */}
                                <div className="selectOne selectTwo">
                                    <label htmlFor="category">Kategoriya</label>
                                    <select name="kategoriya" value={inputData.kategoriya} id="caty" onChange={(e) => inputFunc(e)}>
                                        <option value="a">Airmax</option>
                                        <option value="b">Nike</option>
                                        <option value="c">Vans</option>
                                        <option value="d">Adidas</option>
                                    </select>
                                </div>
                            </div>

                            <input type="file" onInput={(e) => photoFunc(e)} id='photo' name='img' />

                            <button onClick={Add} type="Submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Add