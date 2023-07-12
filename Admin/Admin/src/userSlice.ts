import {createSlice, Dispatch} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
  username: '',
  password: '',
  profiles: [] as Array<any> 
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{username: string, password: string}>) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    saveProfiles: (state, action: PayloadAction<Array<any>>) => {
      
      state.profiles = action.payload
    }
  }
})

export const { login, saveProfiles } = userSlice.actions;
export const getProfiles = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get('https://645644b92e41ccf16918360b.mockapi.io/profile');
    dispatch(saveProfiles(response.data));
  } catch (e) {
    console.log(e);
  }
}

export default userSlice.reducer