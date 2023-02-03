import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addToCart: (state, action) => {
       const itemExist = state.products.find(item => item.id === action.payload.id)
       if(itemExist){
        itemExist.quantity += action.payload.quantity
       }else{
        state.products.push(action.payload)
       }

    },
    removeFromCart : (state, action) => {
       state.products = state.products.filter(item => item.id !== action.payload)
    },
    increase: (state, action)=>{
        state.value += action.payload
    },
    decrease: (state, action)=>{
        state.value -= 1
    },
    resetCart: (state) => {
        state.products = []
    }

}
})

// Action creators are generated for each case reducer function
export const {addToCart, removeFromCart , increase, decrease , resetCart} = counterSlice.actions

export default counterSlice.reducer