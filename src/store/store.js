import { configureStore } from '@reduxjs/toolkit';
import { mainListReducer, isSideReducer } from './reducer';

export default configureStore({
  reducer: { mainList: mainListReducer, isSide: isSideReducer },
});
