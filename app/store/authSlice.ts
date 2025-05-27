import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // or user data object
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      console.log(state.user + ' logged in');
    },
    logout(state) {
      state.user = null;
      console.log('User logged out');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;