import React, { useEffect, useRef, useState } from "react";
import "./Card.css";
import { useDispatchCart, useCart } from "./ContextReducer";
// import { set } from "mongoose";
export default function Card(props) {

    let dispatch = useDispatchCart();
    let data = useCart()
    const priceRef = useRef();
    let options = props.options;
    let priceOptions = Object.keys(options);
    // let foodItem = props.foodItems;
    const [qty,setQty] = useState(1)
    const [size,setSize] = useState("")
    // useState(1)
    const handleAddToCart = async() =>{
        

        await dispatch({type:"ADD", id:props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty:qty, size:size})
        console.log(data)
    }
    
    let finalPrice = qty * parseInt(options[size]);
    useEffect(()=>{
            setSize(priceRef.current.value)
    }, [])

    return (
        
    <div>
        
        <div className="background bg-black">
        <div
            className="max-w-sm bg-teal-950   border border-gray-200 rounded-lg shadow  dark:bg-gray-800  dark:border-gray-700"
            style={{ width: "20rem", maxHeight: "360px" }}
        >
            <a href="#">
            <img
                className="rounded-t-lg"
                src={props.foodItem.img}
                alt=""
                style={{height:"220px",objectFit:"fill"}}
            />
            </a>
            <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-cyan-50  dark:text-white">
                {props.foodItem.name}
                </h5>
            </a>
            {/* <p className="mb-3 font-normal text-cyan-50 dark:text-gray-400">
                This Is Some impotant Taxt.
            </p> */}
            <div className="container w-100">
                <select className="select  m-2 h-100  bg-emerald-500/100 rounded" onChange={(e)=>setQty(e.target.value)} >
                {Array.from(Array(6), (e, i) => {
                    return (
                    <option key={i + 1} value={i + 1}>
                        {" "}
                        {i + 1}{" "}
                    </option>
                    );
                })}
                </select>
                <select className="selcat m-2 h-100  bg-emerald-500/100 rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)} >
                    {priceOptions.map((data)=>{
                        return <option key={data} value={data}>{data}</option>
                    })}
                {/* <option value="half">Half (1person)</option>
                <option value="full">Full (2 person)</option> */}
                </select>
                <div className="fprice text-cyan-50 inline  ">₹{finalPrice}/-</div>
            </div>
            <hr>

            </hr>
            <button className="bg-teal-400 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded" onClick={handleAddToCart}>
                Add to Cart
                </button>
            {/* <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Read more
                <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
                >
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                />
                </svg>
            </a> */}
            </div>
        </div>
        </div>
    </div>
    );
}
