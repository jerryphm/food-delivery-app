import { createSlice } from '@reduxjs/toolkit';

const showMenuSlice = createSlice({
   name: 'showMenu',
   initialState: {
      isShowMenu: false,
   },
   reducers: {
      toggleShowMenu(state, action) {
         const newValue = action.payload == 'hide' ? false : !state.isShowMenu;
         state.isShowMenu = newValue;
      },
   },
});
export const showMenuActs = showMenuSlice.actions;
export const showMenuReducer = showMenuSlice.reducer;
