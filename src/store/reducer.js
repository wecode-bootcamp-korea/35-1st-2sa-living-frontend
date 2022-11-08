import { createSlice } from '@reduxjs/toolkit';

// 메인데터 리스트
export const mainList = createSlice({
  name: 'mainList',
  initialState: { value: [] },
  reducers: {
    getList: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { getList } = mainList.actions;
export const mainListReducer = mainList.reducer;

export const isSide = createSlice({
  name: 'isSide',
  initialState: { value: false },
  reducers: {
    isShowAndHide: state => {
      state.value = prev => !prev;
    },
  },
});
export const { isShowAndHide } = isSide.actions;
export const isSideReducer = isSide.reducer;
