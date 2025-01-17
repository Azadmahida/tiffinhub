import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state,action)=>{
switch(action.type){
    case "ADD" :
        return [...state,{id:action.id, name:action.name, qty:action.qty, size:action.size, price:action.price, img:action.img}]

    case "REMOVE":
        let newArr = [...state]
        newArr.splice(action.index, 1)
        return newArr; 
        case "DROP":
        let empArray = []
        return empArray  
        default:
            console.log("Error in Reducer");
}
}

export const CartProvider =({children}) =>{

    const[state,dispatch] = useReducer(reducer,[])
    return(
<CartDispatchContext.Provider value={dispatch} >
    <CartStateContext.Provider value={state}>
        {children}
    </CartStateContext.Provider>
</CartDispatchContext.Provider>
    )
}

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () =>useContext(CartDispatchContext);













// import React, { createContext, useContext, useReducer } from 'react';

// const CartStateContext = createContext();
// const CartDispatchContext = createContext();

// // Define your initial state for the cart
// const initialState = {
//   items: [], // Array to hold cart items
// };

// // Define your reducer function to handle actions related to the cart
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       // Add the item to the cart
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     case 'REMOVE_FROM_CART':
//       // Remove the item from the cart
//       return {
//         ...state,
//         items: state.items.filter(item => item.id !== action.payload.id),
//       };
//     // Add more cases as needed for other actions
//     default:
//       return state;
//   }
// };

// export const CartProvider = ({ children }) => {
//   // Use useReducer hook to manage state and dispatch actions
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <CartDispatchContext.Provider value={dispatch}>
//       <CartStateContext.Provider value={state}>
//         {children}
//       </CartStateContext.Provider>
//     </CartDispatchContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartStateContext);
// export const useDispatchCart = () => useContext(CartDispatchContext);
