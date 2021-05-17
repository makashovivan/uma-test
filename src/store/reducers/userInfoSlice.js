import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mnem: 'tanya_tilcha',
  photoUrl: '',
  mysite: '',
  phone: '',
  email: '',
};

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.photoUrl = action.payload.photoUrl;
      state.mysite = action.payload.mysite;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
    },
    getUserData: () => {},
  }
});

export const selectMnem = (state) => state.userInfo.mnem;

export const selectUserInfo = (state) => state.userInfo;

export const selectUserPhotoUrl = (state) => state.userInfo.photoUrl;

export const selectTelegram = (state) => `https://t.me/${state.userInfo.mnem}`;

export const selectWhatsApp = (state) => `https://api.whatsapp.com/send?phone={${state.userInfo.phone}}`;

export const selectInstagram = (state) => `https://www.instagram.com/${state.userInfo.mnem}`;

export const selectEmail = (state) => `mailto:${state.userInfo.email}`;

export const selectMysite = (state) => state.userInfo.mysite;

export const { setUserInfo, getUserData } = userInfoSlice.actions;

export default userInfoSlice.reducer;
