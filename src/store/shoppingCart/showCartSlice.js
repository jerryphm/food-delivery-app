import { createSlice } from '@reduxjs/toolkit';

const showCartSlice = createSlice({
   name: 'showCart',
   initialState: {
      isShowCart: false,
   },
   reducers: {
      toggleShowCart(state, action) {
         const newValue = action.payload == 'hide' ? false : !state.isShowCart;
         state.isShowCart = newValue;
      },
   },
});
export const showCartActs = showCartSlice.actions;
export const showCartReducer = showCartSlice.reducer;
