import React from "react";
// import Delete from '@material-ui/icons/Delete'
import { useCart, useDispatchCart } from "../components/ContextReducer";
import { FaTrash } from "react-icons/fa";
export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-center fs-3">The Cart is Empty!</div>
      </div>
    );
  }
  // const handleRemove = (index)=>{
  //   console.log(index)
  //   dispatch({type:"REMOVE",index:index})
  // }

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    // console.log(data,localStorage.getItem("userEmail"),new Date())
    let response = await fetch("http://localhost:5000/api/orderData", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString(),
      }),
    });
    console.log("JSON RESPONSE:::::", response.status);
    if (response.status === 200) {
      dispatch({ type: "DROP" });
    }
  };

  let totalPrice = data.reduce((total, food) => total + food.price, 0);
  return (
    <div>
      {console.log(data)}
      {/* <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' ></div> */}
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Option
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index + 1}
                </th>
                <td className="px-6 py-4">{food.name}</td>
                <td className="px-6 py-4">{food.qty}</td>
                <td className="px-6 py-4">{food.size}</td>
                <td className="px-6 py-4">{food.price}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => dispatch({ type: "REMOVE", index: index })}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline">
                    <FaTrash /> {/* Assuming FaTrash is imported properly */}
                  </button>
                </td>

                {/* <td className='px-6 py-4'><button type="button" className="btn p-0">Remove</button> </td> */}
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className="fs-2">Total Price: {totalPrice}/-</h1>
        </div>
        <div>
          <button className="btn bg-green-500 mt-5 " onClick={handleCheckOut}>
            {" "}
            Check Out{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

// import React from 'react'

// export default function Cart() {
//     let data = useCart();
//   let dispatch = useDispatchCart();
//   if (data.length === 0) {
//     return (
//       <div>
//         <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
//       </div>
//     )
//   }const handleCheckOut = async () => {
//     let userEmail = localStorage.getItem("userEmail");
//     // console.log(data,localStorage.getItem("userEmail"),new Date())
//     let response = await fetch("http://localhost:5000/api/Cart", {
//       // credentials: 'include',
//       // Origin:"http://localhost:3000/login",
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         order_data: data,
//         email: userEmail,
//         order_date: new Date().toDateString()
//       })
//     });
//     console.log("JSON RESPONSE:::::", response.status)
//     if (response.status === 200) {
//       dispatch({ type: "DROP" })
//     }
//   }
//   let totalPrice = data.reduce((total, food) => total + food.price, 0)

//   return (
//     <div>{console.log(data)}
//     <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
//       <table className='table table-hover '>
//         <thead className=' text-success fs-4'>
//           <tr>
//             <th scope='col' >#</th>
//             <th scope='col' >Name</th>
//             <th scope='col' >Quantity</th>
//             <th scope='col' >Option</th>
//             <th scope='col' >Amount</th>
//             <th scope='col' ></th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((food, index) => (
//             <tr>
//               <th scope='row' >{index + 1}</th>
//               <td >{food.name}</td>
//               <td>{food.qty}</td>
//               <td>{food.size}</td>
//               <td>{food.price}</td>
//               <td ><button type="button" className="btn p-0"><Delete onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
//           ))}
//         </tbody>
//       </table>
//       <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
//       <div>
//         <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
//       </div>
//     </div>
//     </div>
//   )
// }
