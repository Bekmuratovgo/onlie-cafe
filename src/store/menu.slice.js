import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  menu: null,
  categories: null,
  basket: null,
}

export const menuSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    setAllMenu: (state, action) => {
      state.menu = action.payload
    },
    setCategories: (state, action) => {
      state.categories = action.payload
    },
  },
})

export const { setCategories, setAllMenu } = menuSlice.actions;
// ACTIONS
const api = process.env.NEXT_PUBLIC_API_URL;

export const getAllMenu = () => async (dispatch) => {
  try {
    const res = await axios.get(api + '/meals');
    dispatch(setAllMenu(res.data))
  } catch (error) {
    console.log(error, 'err');
  }
}

export const getCategories = () => async (dispatch) => {
  try {
    const res = await axios.get(api + '/categories');
    console.log(res, 'RE-CATEGORIES');
    dispatch(setCategories(res.data))
  } catch (error) {
    console.log(error, 'err');
  }
}

export default menuSlice.reducer