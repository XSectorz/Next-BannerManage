
import { configureStore } from '@reduxjs/toolkit';
import photoReducer from '@/app/redux/photo-slice';

const store = configureStore({
  reducer: {
    photo: photoReducer,
  },
});

export default store;
