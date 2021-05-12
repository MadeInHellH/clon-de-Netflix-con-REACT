import { createSlice  } from '@reduxjs/toolkit';
 

export const priceSlice = createSlice({
  name: 'uprice',
  initialState: {
    value: 0,
  },
 
  reducers: {
    setPrice: (state, action) => {
        state.price = action.playload;
    },
  },
  
});

export const { setPrice } = priceSlice.actions;


export const selectUser = (state) => state.price.price;


export default priceSlice.reducer;