import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoadingState {
  status: Boolean;
}

const initialState: LoadingState = {
    status: false,
};

const authAdmin= createSlice({
  name: 'authAdmin',
  initialState,
  reducers: {
    setAuthAdmin(state, action: PayloadAction<Boolean>) {
      state.status = action.payload;
    },
  },
});

export const { setAuthAdmin } = authAdmin.actions;
export default authAdmin.reducer;
