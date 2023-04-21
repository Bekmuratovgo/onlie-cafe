import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  menu: null,
  categories: null,
  basket: null,
  token: null
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
    setToken: (state, action) => {
      state.token = action.payload
    }
  },
})

export const { setCategories, setAllMenu, setToken } = menuSlice.actions;
// ACTIONS
const api = process.env.NEXT_PUBLIC_API_URL;

export const isTokenRefresh = () => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem('token'))
  if (token) {
    try {
      const res = await axios.post(api + '/token/refresh/', {refresh: token.refresh});
      console.log(res.data, 'Res-1');
      dispatch(setToken(res.data))
    } catch (error) {
      console.log(error, 'err');
    }
  } else {
    localStorage.removeItem('token');
    dispatch(setToken(null))
  }
}

export const authAdmin = (data) => async (dispatch) => {
  try {
    const res = await axios.post(api + '/token/', data);
    localStorage.setItem('token', JSON.stringify(res.data))
    console.log(res.data, 'Res-2');
    dispatch(setToken(res.data))
  } catch (error) {
    console.log(error, 'err');
  }
}

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
    dispatch(setCategories(res.data))
  } catch (error) {
    console.log(error, 'err');
  }
}

export const getMenuByCategory = (id) => async (dispatch) => {
  try {
    const res = await axios.get(api + '/categories/' + id);
    console.log(res, 'RE-CATEGORIES');
    dispatch(setAllMenu(res.data))
  } catch (error) {
    console.log(error, 'err');
  }
}

export default menuSlice.reducer