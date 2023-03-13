import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import { BasicRating } from '../layouts/StarRating';
import { ContexData } from '../context/ContextDate';
import { useContext } from 'react';
import { FcLike } from 'react-icons/fc';
import { SlBasket } from 'react-icons/sl';
import { AiOutlineEye } from 'react-icons/ai';
import { PaginateST } from '../paginate/PaginateA';
import { PaginateND } from '../paginate/PaginateB';
import { CgMenuGridO, CgMenu } from "react-icons/cg";
import Navbar from '../Navbar';
import Footer from '../Footer';


function Product() {

    const { allIinfo, basketFunk, eyeFunc, bilmadim, refresh2, bilmadimT, bilmadimF, value, setValue, show, setShow, selectedValue, setSelectedValue, kategory, setKategory } = useContext(ContexData);

    function valuetext(value) {
        return `${value}°C`;
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Color
    const handleChange1 = (event) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange1,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    // Clear Funksiyasi
    function clearFilter() {
        setSelectedValue('');
        setKategory('');
        setValue([0, 100]);
    }

    // All Funksiyasi
    function allFilter() {
        setSelectedValue('')
    }

    return (
        <>
            <Navbar />
            <div className="Product">
                <div className="oneLeft">
                    <div className="hW_left">
                        <div className="deal">
                            <button onClick={() => allFilter()}>All</button>
                            <button onClick={() => setKategory('b')}>Nike <span>2</span></button>
                            <button onClick={() => setKategory('a')}>Airmax <span>48</span></button>
                            <button onClick={() => setKategory('d')}>Adidas <span>15</span></button>
                            <button onClick={() => setKategory('c')}>Vans <span>23</span></button>
                        </div>

                        <div className="price">
                            <h1>PRICES</h1>
                            <div className="priceRange">
                                <h2><span>Ranger: </span> <span>${value[0]} - ${value[1]}</span></h2>
                                <Box sx={{ width: 300 }}>
                                    <Slider
                                        size="small"
                                        getAriaLabel={() => 'Temperature range'}
                                        value={value}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext}
                                    />
                                </Box>
                            </div>
                        </div>

                        <div className="price color">
                            <h1>COLOR</h1>
                            <div className="colorSelect">
                                <Radio {...controlProps('a')} />
                                <Radio {...controlProps('b')} color="secondary" />
                                <Radio {...controlProps('c')} color="success" />
                                <Radio {...controlProps('d')} color="default" />
                                <Radio
                                    {...controlProps('e')}
                                    sx={{
                                        '&.Mui-checked': {
                                            color: pink[600],
                                        },
                                    }}
                                />
                            </div>
                        </div>

                        <div className="deal brand">
                            <h1>BRAND</h1>
                            <button>Nike <span>99</span></button>
                            <button>Nike <span>99</span></button>
                            <button>Adidas <span>99</span></button>
                            <button>Siemens <span>99</span></button>
                        </div>

                        <button className="moreBtn" onClick={clearFilter}>Clear</button>
                    </div>
                </div>
                <div className="oneRight">
                    <div className="topOne">
                        <div className="tOneLeft">
                            <h1>Adidas Men Running
                                Sneakers</h1>
                            <span id='nas'>Performance and design. Taken right to the edge</span>
                            <p id='nas2'>SHOP NOW</p>
                            <hr />
                        </div>
                        <div className="tOneRight"><img src="./img/producr_top.png" alt="" /></div>
                    </div>
                    <div className="centerOne">
                        <div className="left">
                            <span>{allIinfo.length} Items</span>
                            {/* <span>Sort By</span>
                            <span>Name</span>
                            <span>*</span> */}
                            <span>Show</span>
                            <select name="#" id="#" onChange={(e) => setShow(e.target.value)}>
                                <option value="">None</option>
                                <option value="6">6</option>
                                <option value="9">9</option>
                                <option value="12">12</option>
                                <option value="15">15</option>
                            </select>
                        </div>
                        <div className="right">
                            <button onClick={bilmadimF}><span><CgMenuGridO /></span></button>
                            <button onClick={bilmadimT}><span><CgMenu /></span></button>
                        </div>
                    </div>
                    {
                        bilmadim ?
                            <PaginateST />
                            :
                            <PaginateND />
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Product;