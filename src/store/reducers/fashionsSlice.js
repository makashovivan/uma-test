import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  classId: 184,
  fashionsCount: null,
  pagesCount: null,
  currentPage: 1,
  isLoading: false,
  fashionsMap: new Map(),
  productsMap: new Map(),
};


export const mainSlice = createSlice({
  name: 'fashions',
  initialState,
  reducers: {
    setIsLoading : (state, action) => {
      state.isLoading = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPagesCount: (state, action) => {
      state.pagesCount = action.payload;
    },
    setFashionsCount: (state, action) => {
      state.fashionsCount = action.payload.fashionsCount;
    },
    addFashion: (state, action) => {
      state.fashionsMap.set(action.payload.fashionId, action.payload);
    },
    addFashionsList: (state, action) => {
      action.payload.forEach(fashion => {
        state.fashionsMap.set(fashion.fashionId, fashion);
      });
    },
    addProductsList: (state, action) => {
      state.productsMap.set(action.payload.fashionId, action.payload.productsList);
    },
    getFashionsData: () => {},
    getProductsData: () => {},
  }
});

export const selectProductsByFashionId = id => state => state.fashions.productsMap.get(id) || [];

export const selectFashionsList = (state) => Array.from(state.fashions.fashionsMap.values());

export const selectClassId = (state) => state.fashions.classId;

export const selectCurrentPage = (state) => state.fashions.currentPage;

export const selectPagesCount = (state) => state.fashions.pagesCount;

export const selectIsLoading = (state) => state.fashions.isLoading;

export const {
  setIsLoading,
  setCurrentPage,
  setPagesCount,
  setFashionsCount,
  addFashion,
  addProductsList,
  addFashionsList,
  getFashionsData,
  getProductsData,
} = mainSlice.actions;


export default mainSlice.reducer;
