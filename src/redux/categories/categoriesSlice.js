import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catagories: [],
};

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state) => {
      if (state.catagories === []) {
        return 'Under construction!';
      }
      return state.catagories;
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
