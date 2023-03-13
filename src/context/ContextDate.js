import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const ContexData = React.createContext();

function ContextFunc({ children }) {

    const [bestSeller, setBestSeller] = useState([
        {
            count: 0, like: false, basket: false, rang: 'a', kategoriya: 'a', id: "best1", img: "./img/krosovka.png", title: "Nike Air Max 270 React", price: 43, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, like: false, basket: false, rang: 'b', kategoriya: 'b', id: "best2", img: "./img/image Product (4).png", title: "Nike Air Max 270 React", price: 93, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, like: false, basket: false, rang: 'c', kategoriya: 'c', id: "best3", img: "./img/image Product (7).png", title: "Nike Air Max 270 React", price: 23, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, like: false, basket: false, rang: 'd', kategoriya: 'd', id: "best4", img: "./img/image Product (3).png", title: "Nike Air Max 270 React", price: 34, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, like: false, basket: false, rang: 'e', kategoriya: 'a', id: "best45", img: "./img/image Product (7).png", title: "Nike Air Max 270 React", price: 42, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, like: false, basket: false, rang: 'a', kategoriya: 'b', id: "best6", img: "./img/Product Picture02.png", title: "Nike Air Max 270 React", price: 55, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, like: false, basket: false, rang: 'b', kategoriya: 'c', id: "best777", img: "./img/image Product (4).png", title: "Nike Air Max 270 React", price: 12, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, like: false, basket: false, rang: 'c', kategoriya: 'd', id: "best888", img: "./img/Product Picture01.png", title: "Nike Air Max 270 React", price: 78, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },

    ])
    const [bestSeller1, setBestSeller1] = useState([
        {
            count: 0, like: false, basket: false, rang: 'e', kategoriya: 'a', id: "best5", img: "./img/image Product (7).png", title: "Nike Air Max 270 React", price: 42, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, like: false, basket: false, rang: 'a', kategoriya: 'b', id: "best116", img: "./img/Product Picture02.png", title: "Nike Air Max 270 React", price: 55, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, like: false, basket: false, rang: 'b', kategoriya: 'c', id: "best7", img: "./img/image Product (4).png", title: "Nike Air Max 270 React", price: 12, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, like: false, basket: false, rang: 'c', kategoriya: 'd', id: "best8", img: "./img/Product Picture01.png", title: "Nike Air Max 270 React", price: 78, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
    ])
    const [bedtSeller2, setBestSeller2] = useState([
        {
            count: 0, like: false, basket: false, rang: 'd', kategoriya: 'a', id: 'best9', img: "./img/qizilKrasovka.png", title: "Nike Air Max 270 React", price: 88, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, like: false, basket: false, rang: 'e', kategoriya: 'b', id: 'best10', img: "./img/qizilKrasovka.png", title: "Nike Air Max 270 React", price: 35, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, like: false, basket: false, rang: 'a', kategoriya: 'c', id: 'best11', img: "./img/qizilKrasovka.png", title: "Nike Air Max 270 React", price: 41, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, like: false, basket: false, rang: 'b', kategoriya: 'd', id: 'best12', img: "./img/qizilKrasovka.png", title: "Nike Air Max 270 React", price: 91, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, like: false, basket: false, rang: 'c', kategoriya: 'a', id: 'best13', img: "./img/qizilKrasovka.png", title: "Nike Air Max 270 React", price: 76, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, like: false, basket: false, rang: 'd', kategoriya: 'b', id: 'best14', img: "./img/qizilKrasovka.png", title: "Nike Air Max 270 React", price: 18, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, like: false, basket: false, rang: 'e', kategoriya: 'c', id: 'best15', img: "./img/qizilKrasovka.png", title: "Nike Air Max 270 React", price: 85, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, like: false, basket: false, rang: 'a', kategoriya: 'd', id: 'best16', img: "./img/qizilKrasovka.png", title: "Nike Air Max 270 React", price: 22, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, like: false, basket: false, rang: 'b', kategoriya: 'a', id: 'best17', img: "./img/qizilKrasovka.png", title: "Nike Air Max 270 React", price: 5, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        }
    ])
    const [bags, setBags] = useState([
        {
            count: 0, like: false, basket: false, rang: 'c', kategoriya: 'b', id: 'bags1', img: './img/bags.jpg', title: 'bags', price: 39.5, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5',
        },
        {
            count: 0, like: false, basket: false, rang: 'd', kategoriya: 'c', id: 'bags2', img: './img/bagsA.jpg', title: 'bags', price: 35, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5',
        },
        {
            count: 0, like: false, basket: false, rang: 'e', kategoriya: 'd', id: 'bags3', img: './img/bagsB.jpg', title: 'bags', price: 99, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5',
        },
        {
            count: 0, like: false, basket: false, rang: 'a', kategoriya: 'a', id: 'bags4', img: './img/bagsC.jpg', title: 'bags', price: 100, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5',
        },
        {
            count: 0, like: false, basket: false, rang: 'b', kategoriya: 'b', id: 'bags5', img: './img/bagsA.jpg', title: 'bags', price: 3, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5',
        },
        {
            count: 0, like: false, basket: false, rang: 'c', kategoriya: 'c', id: 'bags6', img: './img/bags.jpg', title: 'bags', price: 19, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5',
        },
        {
            count: 0, like: false, basket: false, rang: 'd', kategoriya: 'd', id: 'bags7', img: './img/bags.jpg', title: 'bags', price: 45, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5',
        },
        {
            count: 0, like: false, basket: false, rang: 'e', kategoriya: 'a', id: 'bags8', img: './img/bagsA.jpg', title: 'bags', price: 15, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5',
        },
        {
            count: 0, like: false, basket: false, rang: 'a', kategoriya: 'b', id: 'bags9', img: './img/bagsB.jpg', title: 'bags', price: 66, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5',
        },
        {
            count: 0, like: false, basket: false, rang: 'b', kategoriya: 'c', id: 'bags10', img: './img/bagsC.jpg', title: 'bags', price: 67, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5',
        },
        {
            count: 0, like: false, basket: false, rang: 'c', kategoriya: 'd', id: 'bags11', img: './img/bags.jpg', title: 'bags', price: 70, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5',
        },
    ])
    const [sneakers, setSneakers] = useState([
        {
            count: 0, like: false, basket: false, rang: 'd', kategoriya: 'a', id: 'sneaker1', img: './img/krosovka.png', title: 'Sneaker', price: 45, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'e', kategoriya: 'b', id: 'sneaker2', img: './img/krosovka.png', title: 'Sneaker', price: 28, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'a', kategoriya: 'c', id: 'sneaker3', img: './img/krosovka.png', title: 'Sneaker', price: 15.5, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'b', kategoriya: 'd', id: 'sneaker4', img: './img/krosovka.png', title: 'Sneaker', price: 64, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'c', kategoriya: 'a', id: 'sneaker5', img: './img/krosovka.png', title: 'Sneaker', price: 55, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'd', kategoriya: 'b', id: 'sneaker6', img: './img/krosovka.png', title: 'Sneaker', price: 79, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'e', kategoriya: 'c', id: 'sneaker7', img: './img/krosovka.png', title: 'Sneaker', price: 99.5, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'a', kategoriya: 'd', id: 'sneaker8', img: './img/krosovka.png', title: 'Sneaker', price: 13, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'b', kategoriya: 'a', id: 'sneaker9', img: './img/krosovka.png', title: 'Sneaker', price: 43, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'c', kategoriya: 'b', id: 'sneaker10', img: './img/krosovka.png', title: 'Sneaker', price: 73, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'd', kategoriya: 'c', id: 'sneaker11', img: './img/krosovka.png', title: 'Sneaker', price: 65, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'e', kategoriya: 'd', id: 'sneaker12', img: './img/krosovka.png', title: 'Sneaker', price: 88, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'a', kategoriya: 'a', id: 'sneaker13', img: './img/krosovka.png', title: 'Sneaker', price: 94, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'b', kategoriya: 'b', id: 'sneaker14', img: './img/krosovka.png', title: 'Sneaker', price: 21.5, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'c', kategoriya: 'c', id: 'sneaker15', img: './img/krosovka.png', title: 'Sneaker', price: 33, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'd', kategoriya: 'd', id: 'sneaker16', img: './img/krosovka.png', title: 'Sneaker', price: 47, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        }
    ])
    const [belt, setBelt] = useState([
        {
            count: 0, like: false, basket: false, rang: 'e', kategoriya: 'a', id: 'belt1', img: './img/belt1.jpg', title: 'Belt', price: 22, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'a', kategoriya: 'b', id: 'belt2', img: './img/belt2.jpg', title: 'Belt', price: 43, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'b', kategoriya: 'c', id: 'belt3', img: './img/belt3.jpg', title: 'Belt', price: 55, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'c', kategoriya: 'd', id: 'belt4', img: './img/belt4.jpg', title: 'Belt', price: 76, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'd', kategoriya: 'a', id: 'belt5', img: './img/belt5.jpg', title: 'Belt', price: 87, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'e', kategoriya: 'b', id: 'belt6', img: './img/belt6.jpg', title: 'Belt', price: 56, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'a', kategoriya: 'c', id: 'belt7', img: './img/belt1.jpg', title: 'Belt', price: 45, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'b', kategoriya: 'd', id: 'belt8', img: './img/belt2.jpg', title: 'Belt', price: 43, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'c', kategoriya: 'a', id: 'belt9', img: './img/belt3.jpg', title: 'Belt', price: 23, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'd', kategoriya: 'b', id: 'belt10', img: './img/belt4.jpg', title: 'Belt', price: 78, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'e', kategoriya: 'c', id: 'belt11', img: './img/belt5.jpg', title: 'Belt', price: 75, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'a', kategoriya: 'd', id: 'belt12', img: './img/belt6.jpg', title: 'Belt', price: 45, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'b', kategoriya: 'a', id: 'belt13', img: './img/belt1.jpg', title: 'Belt', price: 34, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'c', kategoriya: 'b', id: 'belt14', img: './img/belt2.jpg', title: 'Belt', price: 56, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'd', kategoriya: 'c', id: 'belt15', img: './img/belt3.jpg', title: 'Belt', price: 23, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, like: false, basket: false, rang: 'e', kategoriya: 'd', id: 'belt16', img: './img/belt4.jpg', title: 'Belt', price: 12, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        }
    ])
    // loader
    const [loader, setLoader] = useState(false);

    // search state
    const [search, setSearch] = useState({
        empty: ''
    } && '');

    // console.log(allIinfo);
    const [modalUchun, setModalUchun] = useState(false);
    const [goToState, setGoToState] = useState({
        goToFirst: true,
        goToSecond: false,
        goToThird: false,
    });
    const eyeLink = useNavigate();
    const basketLink = useNavigate();
    const favoriteLink = useNavigate();
    const backLink = useNavigate();
    const crudNav = useNavigate();
    const userProNav = useNavigate();

    // Price Range State
    const [value, setValue] = React.useState([0, 100]);

    // Basket malumotlari
    const [forLocal, setForLocal] = useState(
        JSON.parse(localStorage.getItem('forLocal')) || []
    )

    // Favorite malumotlari
    const [forFavorite, setForFavorite] = useState(
        JSON.parse(localStorage.getItem('forFavorite')) || []
    )

    // Yangi mahsulot
    const [yangiP, setYangiP] = useState(
        JSON.parse(localStorage.getItem('yangiP')) || []
    )

    // Yangi Mahsulot Refresh
    function yangiRef() {
        setYangiP(
            JSON.parse(localStorage.getItem('yangiP')) || []
        )
    }

    // forLocal refresh funksiyasi
    function refresh() {
        setForLocal(
            JSON.parse(localStorage.getItem('forLocal')) || []
        )
    }

    // Favorite refresh funksiyasi
    function refresh1() {
        setForFavorite(
            JSON.parse(localStorage.getItem('forFavorite')) || []
        )
    }

    // Mahsulotni ko'rinish soni
    const [show, setShow] = useState('');

    const [kategory, setKategory] = useState('');

    // Color Radio Button
    const [selectedValue, setSelectedValue] = React.useState('a');

    // console.log(selectedValue);

    // Increment Function
    function incFunc(item) {
        localStorage.setItem(
            'forLocal',
            JSON.stringify(
                JSON.parse(localStorage.getItem('forLocal')).map(
                    biz => biz.id === item.id ?
                        { ...biz, count: biz.count + 1 } : biz
                )
            )
        )
        refresh();
    }

    // Decrement Function
    function decFunc(item) {
        localStorage.setItem(
            'forLocal',
            JSON.stringify(
                JSON.parse(localStorage.getItem('forLocal')).map(
                    biz => biz.id === item.id ?
                        { ...biz, count: biz.count - 1 } : biz
                )
            )
        )
        JSON.parse(localStorage.getItem('forLocal')).map(
            foo => foo.id === item.id && foo.count === 0 ?
                delete_to_basket(item) : foo
        )
        refresh();
    }

    // Bilmayman
    const [bilmadim, setBilmadim] = useState(
        localStorage.getItem('bilmadimLocal') ? JSON.parse(localStorage.getItem('bilmadimLocal')) : localStorage.setItem('bilmadimLocal', 'true')
    )

    function refresh2() {
        setBilmadim(
            localStorage.getItem('bilmadimLocal') ? JSON.parse(localStorage.getItem('bilmadimLocal')) : localStorage.setItem('bilmadimLocal', 'true')
        )
    }

    // bilmadimT
    function bilmadimT() {
        if (localStorage.getItem('bilmadimLocal') === 'true') {
            localStorage.setItem('bilmadimLocal', 'false')
        }
        // else {
        //     setBilmadim(
        //         localStorage.setItem('bilmadimLocal', 'true')
        //     )
        // }
        refresh2()
    }

    // bilmadimT
    function bilmadimF() {
        if (localStorage.getItem('bilmadimLocal') === 'false') {
            localStorage.setItem('bilmadimLocal', 'true')
        }
        // else {
        //     setBilmadim(
        //         localStorage.setItem('bilmadimLocal', 'false')
        //     )
        // }
        refresh2()
    }

    function modalFunc() {
        setModalUchun(true);
    }

    function modalClose() {
        setModalUchun(false);
    }

    // Go To Function
    function goToFunc() {
        if (goToState.goToFirst === true) {
            setGoToState({ ...goToState, goToFirst: false, goToSecond: true });
        }
        if (goToState.goToSecond === true) {
            setGoToState({ ...goToState, goToSecond: false, goToThird: true });
        }
        if (goToState.goToThird === true) {
            setGoToState({ ...goToState, goToThird: false, goToFirst: true });
            modalClose();
        }
    }

    // Back Function
    function modalBack() {
        if (goToState.goToFirst === true) {
            modalClose();
        }
        if (goToState.goToSecond === true) {
            setGoToState({ ...goToState, goToSecond: false, goToFirst: true });
        }
        if (goToState.goToThird === true) {
            setGoToState({ ...goToState, goToThird: false, goToSecond: true });
        }
    }

    // Basket Function
    function basketFunk() {
        basketLink('/basket')

    }

    // add to basket
    function add_to_basket(item) {
        if (forLocal.filter(a => a.id === item.id).length === 0) {
            if (localStorage.getItem('forLocal')) {
                localStorage.setItem(

                    'forLocal',
                    JSON.stringify([
                        ...JSON.parse(localStorage.getItem('forLocal')),
                        { ...item, count: +item.count + 1, basket: !true }
                    ])
                )
            }
            else {
                localStorage.setItem(
                    'forLocal',
                    JSON.stringify([{ ...item }])
                );
            }
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Added successfully!',
                showConfirmButton: false,
                timer: 1500
            })
        }
        else {
            delete_to_basket()
        }
        // basketLink('/basket');
        refresh();
    }

    // delet to basket
    function delete_to_basket(biz) {
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
                    'forLocal',
                    JSON.stringify(
                        JSON.parse(localStorage.getItem('forLocal')).filter(
                            (item) => item.id !== biz.id
                        )
                    )
                )
                refresh();
            }
            else {
                localStorage.setItem(
                    'forLocal',
                    JSON.stringify(
                        JSON.parse(localStorage.getItem('forLocal')).map(
                            (foo) => (foo.id === biz.id && foo.count === 0) ?
                                { ...foo, count: +foo.count + 1 } : foo
                        )
                    )
                )
                refresh();
            }
        })
    }


    // add to favorite
    function add_to_favorite(item) {
        if (forFavorite.filter(a => a.id === item.id).length === 0) {
            if (localStorage.getItem('forFavorite')) {
                localStorage.setItem(
                    'forFavorite',
                    JSON.stringify([
                        ...JSON.parse(localStorage.getItem('forFavorite')),
                        { ...item, count: +item.count + 1, like: !true }
                    ])
                )
            }
            else {
                localStorage.setItem(
                    'forFavorite',
                    JSON.stringify([{ ...item }])
                );
            }
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Added successfully!',
                showConfirmButton: false,
                timer: 1500
            })
        }
        else {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Removed successfully!',
                showConfirmButton: false,
                timer: 1500
            })
            localStorage.setItem(
                'forFavorite',
                JSON.stringify(
                    JSON.parse(localStorage.getItem('forFavorite')).filter(
                        (b) => b.id !== item.id
                    )
                )
            )
        }
        // favoriteLink('/like');
        refresh1();
    }

    // delet to favorite
    function delete_to_favorite(biz) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Removed successfully!',
            showConfirmButton: false,
            timer: 1500
        })
        localStorage.setItem(
            'forFavorite',
            JSON.stringify(
                JSON.parse(localStorage.getItem('forFavorite')).filter(
                    (item) => item.id !== biz.id
                )
            )
        )
        refresh1()
    }

    // Eye Function
    function eyeFunc() {
        eyeLink('/product')
    }

    // Back funck
    function backfunc() {
        backLink('/')
    }

    // Yangi mahsulot qo'shish va uni edit qilish funksiyalari

    const [inputData, setInputData] = useState({
        count: '',
        id: '',
        img: '',
        title: '',
        price: '',
        about: '',
        skidka: '',
        rang: '',
        kategoriya: ''
    });

    function inputFunc(e) {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        })
    }

    // foto func
    function photoFunc(e) {
        setInputData({
            ...inputData,
            img: URL.createObjectURL(e.target.files[0])
        })
    }

    // Add func
    function Add(e) {
        e.preventDefault();
        if (inputData.title !== '' && inputData.about !== ''
            && inputData.count !== '' && inputData.price !== ''
            && inputData.skidka !== '' && inputData.rang !== ''
            && inputData.kategoriya !== '') {
            if (inputData.id === '') {
                if (localStorage.getItem('yangiP')) {
                    localStorage.setItem(
                        'yangiP',
                        JSON.stringify([
                            ...JSON.parse(localStorage.getItem('yangiP')),
                            { ...inputData, id: new Date().getTime() }
                        ])
                    )
                } else {
                    localStorage.setItem(
                        'yangiP',
                        JSON.stringify([{ ...inputData, id: new Date().getTime() }])
                    )

                }
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Added successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            else {
                // Bu yerda mahsulot edit qilingan
                localStorage.setItem(
                    'yangiP',
                    JSON.stringify(
                        JSON.parse(localStorage.getItem('yangiP')).map(baz =>
                            baz.id === inputData.id ? inputData : baz)
                    )
                )
                userProNav('/user-product');
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Edited successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            setInputData({
                count: '',
                img: '',
                title: '',
                price: '',
                about: '',
                skidka: '',
                rang: '',
                kategoriya: ''
            });
            yangiRef();
        }
        else {
            Swal.fire(
                'Warning!',
                'Please fill in all the blanks!',
                'warning'
            )
        }
    }

    // Hamma mahsulotlar
    const [allIinfo, setAllIinfo] = useState([
        ...yangiP, ...bestSeller, ...bestSeller1, ...bedtSeller2, ...bags
    ])


    return (
        <ContexData.Provider value={{
            search,
            setSearch,
            inputData,
            setInputData,
            inputFunc,
            photoFunc,
            Add,
            crudNav,
            bestSeller,
            bestSeller1,
            modalUchun,
            modalFunc,
            modalClose,
            goToState,
            setGoToState,
            modalBack,
            goToFunc,
            basketLink,
            basketFunk,
            eyeLink,
            eyeFunc,
            bedtSeller2,
            bags,
            allIinfo,
            refresh,
            forLocal,
            setForLocal,
            add_to_basket,
            delete_to_basket,
            add_to_favorite,
            delete_to_favorite,
            favoriteLink,
            forFavorite,
            bilmadim,
            refresh2,
            loader,
            setLoader,
            sneakers,
            belt,
            incFunc,
            decFunc,
            backfunc,
            bilmadimT,
            bilmadimF,
            value,
            setValue,
            yangiP,
            setYangiP,
            yangiRef,
            show,
            setShow,
            kategory,
            setKategory,
            selectedValue,
            setSelectedValue
        }}>
            {children}
        </ContexData.Provider>
    )
}

export default ContextFunc;