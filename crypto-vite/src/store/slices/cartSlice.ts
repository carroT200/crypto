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
    removeItem(state, action: PayloadAction<IItems>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalCartAmount -= newItem.current_price;

      if (existingItem?.qty === 1) {
        state.items = state.items.filter((item) => item.id !== newItem.id);
        state.totalCartCount--;
      } else {
        {
          existingItem?.qty && existingItem.qty--;
        }
        state.totalCartCount--;
      }
    },
    addItem(state, action: PayloadAction<IItems>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalCartCount++;
      state.totalCartAmount += newItem.current_price;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          current_price: newItem.current_price,
          image: newItem.image,
          qty: 1,
        });
      } else {
        {
          existingItem.qty && existingItem.qty++;
        }
        existingItem.current_price += newItem.current_price;
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
