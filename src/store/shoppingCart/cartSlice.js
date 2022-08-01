import { createSlice } from '@reduxjs/toolkit';
const initialState = {
   cartItems: [],
   cartTotalQuantity: 0,
   cartTotalPrice: 0,
};
const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addItems(state, action) {
         const newItem = action.payload;

         const existingItem = state.cartItems.find(
            (cardItem) => cardItem.id == newItem.id
         );
         const isNew = !existingItem;
         const { id, title, price, imgUrl, category } = newItem;
         //check and set
         if (isNew) {
            state.cartItems.unshift({
               itemTotalQuantity: 1,
               itemTotalPrice: price,
               id,
               title,
               price,
               imgUrl,
               category,
            });
         } else {
            existingItem.itemTotalQuantity++;
            existingItem.itemTotalPrice += price;
         }
         //set
         state.cartTotalQuantity++;
         state.cartTotalPrice += price;
      },
   },
});

export const { addItems } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
