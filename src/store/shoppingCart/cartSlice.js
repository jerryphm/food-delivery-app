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
      addItem(state, action) {
         const newItem = action.payload;
         const existingItem = state.cartItems.find(
            (cardItem) => cardItem.id == newItem.id
         );

         const isNew = !existingItem;

         if (isNew) {
            state.cartItems.unshift({
               itemTotalQuantity: 1,
               itemTotalPrice: newItem.price,
               ...newItem,
            });
         } else {
            existingItem.itemTotalQuantity++;
            existingItem.itemTotalPrice += newItem.price;
         }

         state.cartTotalQuantity++;
         state.cartTotalPrice += newItem.price;
      },
      removeItem(state, action) {
         const idPload = action.payload;
         const cartItem = state.cartItems.find((item) => item.id == idPload);
         cartItem.itemTotalQuantity--;
         if (cartItem.itemTotalQuantity == 0) {
            const removeIndex = state.cartItems.indexOf(cartItem);
            state.cartItems.splice(removeIndex, 1);
         } else {
            cartItem.itemTotalPrice -= cartItem.price;
         }
         state.cartTotalQuantity--;
         state.cartTotalPrice -= cartItem.price;
      },
      deleteItem(state, action) {
         const idPload = action.payload;
         const cartItem = state.cartItems.find((item) => item.id == idPload);

         state.cartTotalQuantity -= cartItem.itemTotalQuantity;
         state.cartTotalPrice -= cartItem.itemTotalPrice;

         const removeIndex = state.cartItems.indexOf(cartItem);
         state.cartItems.splice(removeIndex, 1);
      },
   },
});

export const { addItem, removeItem, deleteItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
