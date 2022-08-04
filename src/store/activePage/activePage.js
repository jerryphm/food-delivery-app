import { createSlice } from '@reduxjs/toolkit';

const activePageSlice = createSlice({
   name: 'activePage',
   initialState: {
      activePage: '',
   },
   reducers: {
      setActivePage(state, action) {
         state.activePage = action.payload;
      },
   },
});
export const { setActivePage } = activePageSlice.actions;
export const activePageReducer = activePageSlice.reducer;
