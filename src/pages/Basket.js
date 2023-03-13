import { IoIosClose } from "react-icons/io"
import { FiArrowLeft } from "react-icons/fi";
import { useContext } from "react";
import { ContexData } from "../context/ContextDate";
import { PaymentModal1 } from "../layouts/PaymentModal1";
import { PaymentModal2 } from "../layouts/PaymentModal2";
import { PaymentModal3 } from "../layouts/PaymentModal3";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Basket() {

    const { modalUchun, modalFunc, modalClose, modalBack, goToFunc, goToState, forLocal, setForLocal, delete_to_basket, incFunc, decFunc } = useContext(ContexData);

    return (
        <>
            <Navbar />
            <div className="Basket">{
                modalUchun ?
                    <div className="modalOyna" onClick={modalClose}>
                        <div className="modalChild" onClick={(e) => e.stopPropagation()}>
                            <div className="childTop">
                                <div className="child_exit"><button onClick={modalClose}><IoIosClose /></button></div>
                                <div className="child_exit"><button onClick={modalBack}><FiArrowLeft /></button></div>
                            </div>

                            <div className="child_extra">
                                <div className="child_top">
                                    <h1>Make Payment</h1>
                                    <div className="child_bottom">
                                        <div className="child_num">
                                            <span className="child_n1">1</span>
                                            <span className="child_n1 child_n2" id={goToState.goToFirst ? '' : 'child_n2'}>2</span>
                                            <span className="child_n1 child_n3" id={goToState.goToThird ? 'child_n3' : ''}>3</span>
                                        </div>
                                        <div className="pMCT_line"></div></div>
                                </div>

                                {
                                    goToState.goToFirst ?
                                        <PaymentModal1 /> : ''
                                }

                                {
                                    goToState.goToSecond ?
                                        <PaymentModal2 /> : ''
                                }

                                {
                                    goToState.goToThird ?
                                        <PaymentModal3 /> : ''
                                }

                                <div className="pMC_bottom">
                                    <button onClick={goToFunc}>{goToState.goToFirst ? 'Go to Payment' : ''} {goToState.goToSecond ? 'Confirm' : ''} {goToState.goToThird ? 'Complete' : ''}</button>
                                </div>
                            </div>
                        </div>
                    </div> : ''
            }
                <div className="Top">

                    <table>
                        <thead>
                            <tr>
                                <th>PRODUCT</th>
                                <th>PRICE</th>
                                <th>QTY</th>
                                <th>UNIT PRICE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Ma'lumotni map qilish zarur, ayanan shu yerda */}
                            {
                                forLocal.map(val => (
                                    <tr>
                                        <td>
                                            <div className="basketProduct">
                                                <button onClick={() => delete_to_basket(val)}><span><IoIosClose /></span></button>
                                                <figure><img src={val.img} alt={val.title} /></figure>
                                                <p>{val.title}</p>
                                            </div>
                                        </td>
                                        <td>${val.count > 1 ? val.price * val.count : val.price}</td>
                                        <td>
                                            <div className="basketPrice">
                                                <button onClick={() => decFunc(val)}>-</button>
                                                <span>{val.count}</span>
                                                <button onClick={() => incFunc(val)}>+</button>
                                            </div>
                                        </td>
                                        <td>${val.prev}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="Bottom">
                    <div className="bottomLeft">
                        <input type="text" placeholder="Voucher code" /><button>Redeem</button>
                    </div>
                    <div className="bottomRight">
                        <div className="top">
                            <div className="topOneA">
                                <span>Subtotal</span>
                                <p>$998</p>
                            </div>
                            <div className="topTwo">
                                <span>Shipping fee</span>
                                <p>$20</p>
                            </div>
                            <div className="TopThree">
                                <span>Coupon</span>
                                <p>No</p>
                            </div>
                        </div>
                        <hr />
                        <div className="bottomBottom">
                            <div className="bottomOne">
                                <h1>TOTAL</h1>
                                <h1>${forLocal.reduce((a, b) => a + b.count * b.price, 0)}</h1>
                            </div>
                            <button onClick={modalFunc}>Check out</button>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}
export default Basket