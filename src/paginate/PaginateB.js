import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
// import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import ReactPaginate from 'react-paginate';
import { ContexData } from '../context/ContextDate';
import { BasicRating } from '../layouts/StarRating';
import { Loader } from '../loader/Loader';

export function PaginateND() {

    const { allIinfo, likeFunc, basketFunc, eyeFunc, basketLink, add_to_basket, add_to_favorite, value, show, selectedValue, kategory } = useContext(ContexData);

    // Loader State
    const [loading, setLoading] = useState(false);

    // Loader Timer
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 800);
    }, []);

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    let itemsPerPage = 9;

    if (show !== '') {
        itemsPerPage = +show;
    }
    else {
        itemsPerPage = 9
    }

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(allIinfo.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(allIinfo.length / itemsPerPage));
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 800);
    }, [itemOffset, itemsPerPage, allIinfo]);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % allIinfo.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className="paginateWrapper2">
                {
                    loading ? <Loader /> :
                        currentItems
                            .filter((item) => {
                                if (
                                    item.kategoriya.toLowerCase().includes(kategory.toLowerCase()) &&
                                    item.rang.toLowerCase().includes(selectedValue.toLowerCase()) &&
                                    item.price > value[0] && item.price < value[1]
                                ) {
                                    return item;
                                }
                            }).map(val => (
                                <div className="bottomTwoCardA" key={val.id}>
                                    <div className="left">
                                        {
                                            val.img !== '' ?
                                                <img src={val.img} alt={val.title} />
                                                :
                                                <img src="https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg" alt="noImage" />
                                    }
                                    </div>
                                    <div className="right">
                                        <h1>{val.title}</h1>
                                        <div className="rightTop">
                                            <BasicRating />
                                            <span id="n_1R-T">0 reviews</span>
                                            <span id="n_2R-T">Submit a review</span>
                                        </div>
                                        <hr />
                                        <div className="pricesinA">
                                            <h3>${val.price * (100 - val.skidka) / 100}</h3>
                                            <span>${val.price}</span>
                                            <p id="skidka">{val.skidka}% Off</p>
                                        </div>
                                        <div className="aboutinBottom-Two">
                                            <span>{val.about.length > 180 ? val.about.slice(0, 180) + '...' : val.about}</span>
                                        </div>
                                        <div className="rightBottom2">
                                            <button id="btnOneinR-B" onClick={() => add_to_basket(val)}> <span><SlBasket /></span> Add To Cart</button> <button id="btnTwoinR-B" onClick={() => add_to_favorite(val)}><AiOutlineHeart /></button>
                                        </div>
                                    </div>
                                </div>
                            ))
                }
            </div>

            <ReactPaginate
                breakLabel="..."
                // nextLabel={<GrFormNext />}
                nextLabel=''
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                // previousLabel={<GrFormPrevious />}
                previousLabel=''
                renderOnZeroPageCount={null}
                containerClassName="pagination1"
                pageLinkClassName='pageNum'
                activeLinkClassName='active'
            />
        </>
    );
}