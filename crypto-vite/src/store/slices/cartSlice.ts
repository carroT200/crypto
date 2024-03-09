import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICart, IItems } from '@src/types/cart';

const initialState: ICart = {
  items: [],
  totalCartAmount: 0,
  totalCartCount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // removeItem(state, action: PayloadAction<IItems>) {},
    addItem(state, action: PayloadAction<IItems>) {
      const newItem = action.payload;

      state.items.push({
        id: newItem.id,
        name: newItem.name,
        current_price: newItem.current_price,
        image: newItem.image,
      });
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
