import { useContext } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { ContexData } from "../context/ContextDate";
import { BasicRating } from "../layouts/StarRating";
import { FiEdit2 } from "react-icons/fi";
import Swal from "sweetalert2";

function UserProduct() {

    const { yangiP, yangiRef, setInputData, crudNav } = useContext(ContexData);

    // Yangi mahsulotni delete qilish funksiyasi
    function yangi_del(val) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                localStorage.setItem(
                    'yangiP',
                    JSON.stringify(
                        JSON.parse(localStorage.getItem('yangiP')).filter(
                            (item) => item.id !== val.id
                        )
                    )
                )
                yangiRef();
            }
        })
    }

    // Yangi mahsulotni edit qilish funksiyasi
    function yangi_edit(val) {
        setInputData(val);
        crudNav('/crud');
    }

    return (
        <>
            <div className="sneakers userYangi">
                <div className="cardsInSneakers">
                    <div className="yangiTop">
                        <h1 className="gIBTitle">Siz qo'shgan mahsulotlar</h1>
                        <NavLink to={'/crud'} className="yangiback"><span><IoIosArrowBack /></span></NavLink>
                    </div>
                    {
                        yangiP.length > 0 ?
                            <div className="cardInSneakers">
                                {
                                    yangiP.map(val => (
                                        <div className="BCAOne" key={val.id}>
                                            <div className="rasmBCAOne">
                                                <div className="modal">
                                                    <div className="icons">
                                                        <button className="iconBtn" onClick={() => yangi_del(val)}><span><MdDeleteOutline /></span></button>
                                                        <button className="iconBtn" onClick={() => yangi_edit(val)}><span><FiEdit2 /></span></button>
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
                                                    <h3>${val.price * (100 - val.skidka) / 100}</h3>
                                                    <span>${val.price}</span>
                                                    <p id="skidka">{val.skidka}% Off</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div> : <div className="yangiPNOT"><p>Hech qanday mahsulot topilmadi!</p></div>
                    }
                </div>
            </div>
        </>
    )
}
export default UserProduct;