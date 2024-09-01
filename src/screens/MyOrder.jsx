import React, {useEffect,useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import "../screens/MyOrder.css"
export default function MyOrder() {
    const [orderData, setorderData] = useState({});

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'))
        await fetch("http://localhost:5000/api/myOrderData", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json()
            await setorderData(response)
        })



        // await res.map((data)=>{
        //    console.log(data)
        // })


    }
    useEffect(() => {
        fetchMyOrder()
    }, [])
    
  return (
    <>
    <div>
        <Navbar/>
    </div>
    
    <div className='container bg-black text-cyan-100 '>
                <div className='fdiv'>

                    {orderData !== ("") ? Array(orderData).map(data => {
                        return (
                            data.orderData ?
                                data.orderData.order_data.slice(0).reverse().map((item) => {
                                    return (
                                        item.map((arrayData) => {
                                            return (
                                                <div>
                                                    {arrayData.Order_date ? <div className='m-auto mt-5'>
                                                        <hr/>
                                                        
                                                        {data = arrayData.Order_date}
                                                        {/* <hr /> */}
                                                    </div> :

                                                        <div className='sdiv' >
                                                            <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                                {/* <img src={arrayData.img} className="card-img-top" alt="FOOD" style={{ height: "120px", objectFit: "cover" }} /> */}
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{arrayData.name}</h5>
                                                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                        <span className='m-1'>Qty-{arrayData.qty}</span>
                                                                        <span className='m-1'>Size: {arrayData.size}</span>
                                                                        <div>
                                                                        <span className='m-1'>OrderDate: {data}</span>
                                                                        </div>
                                                                        
                                                                        <div className='' >
                                                                            ₹{arrayData.price}/-
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        


                                                    }
                                                    
                                                </div>
                                            )
                                        })

                                    )
                                }) : ""
                        )
                    }) : ""}
                </div>


            </div>
    <div>
        <Footer/>
    </div>
    </>
  )
}
