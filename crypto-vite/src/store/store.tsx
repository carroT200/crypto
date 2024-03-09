import { configureStore } from '@reduxjs/toolkit';

import cartSliceReducer from '@src/store/slices/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
