import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  menu: {
    results: [
      // {
      //   title: '',
      //   price: 200,
      //   description: '1п',
      //   image: 'data:image/png;base64,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'
      // },
      // {
      //   title: 'Нохат шорпо',
      //   price: 200,
      //   description: '1п',
      //   image: 'data:image/png;base64,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'
      // },
      // {
      //   title: 'Нохат шорпо',
      //   price: 200,
      //   description: '1п',
      //   image: 'data:image/png;base64,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'
      // },
      // {
      //   title: 'Нохат шорпо',
      //   price: 200,
      //   description: '1п',
      //   image: 'data:image/png;base64,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'
      // },
    ]
  },
  categories: [
    {
      name: 'Блюдо 1'
    },
    {
      name: 'Блюдо 2'
    },
    {
      name: 'Блюдо 3'
    },
    {
      name: 'Блюдо 4'
    },
    {
      name: 'Блюдо 5'
    },
    {
      name: 'Блюдо 6'
    },
    {
      name: 'Блюдо 7'
    },
    {
      name: 'Блюдо 8'
    },
    {
      name: 'Блюдо 9'
    },
  ],
  token: null,
  toggleEditModal: {},
  basket: [],
  isAddedToBasket: false,
  order: null,
  adminNumber: '996755551707'
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
    },
    setToggleEditModal: (state, action) => {
      state.toggleEditModal = action.payload
    },
    setToBasket: (state, action) => {
      state.basket = action.payload
    },
    isAddToBasket: (state, action) => {
      state.isAddedToBasket = action.payload
    },
    setOrder: (state, action) => {
      state.order = action.payload
    }
    
  },
})

export const { setCategories, setAllMenu, setToken, 
  setToggleEditModal, setToBasket, isAddToBasket, setOrder 
} = menuSlice.actions;
// ACTIONS
const api = process.env.NEXT_PUBLIC_API_URL;

export const isTokenRefresh = () => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem('token'))
  const basket = JSON.parse(localStorage.getItem('basket'))

  dispatch(setToBasket(basket))

  if (token?.refresh || token?.access) {
    try {
      const res = await axios.post(api + '/token/refresh/', {refresh: token.refresh});
      dispatch(setToken(res.data))
      console.log(res.data, 'REFRESH-TOKEN');
    } catch (error) {
      localStorage.removeItem('token');
      localStorage.removeItem('basket');
    }
  } else {
    localStorage.removeItem('token');
    localStorage.removeItem('basket');
  }
}

export const authAdmin = (data) => async (dispatch) => {
  try {
    const res = await axios.post(api + '/token/', data);
    localStorage.setItem('token', JSON.stringify(res.data))
    console.log(res.data, 'RES_AUTH');
    dispatch(setToken(res.data))
  } catch (error) {
  }
}
//MENU
export const getAllMenu = () => async (dispatch) => {
  try {
    const res = await axios.get(api + '/meals/');
    dispatch(setAllMenu(res.data))
  } catch (error) {
  }
}
export const getMenuByCategory = (id) => async (dispatch) => {
  try {
    const res = await axios.get(api + '/meals/?category=' + id);
    console.log(res, 'res-CATEGORY-one ');
    dispatch(setAllMenu(res.data))
  } catch (error) {
  }
}
export const removeMeal = (id) => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem('token'))

  try {
    const res = await axios.delete(api + `/meals/${id}/`, {
      headers: {
        Authorization: 'JWT ' + token.access
      },
    });
    dispatch(getAllMenu())
  } catch (error) {
  }
}
export const createMeal = (item, defaultCategory) => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem('token'))
  const formData = new FormData();

  formData.append('image', item.image);
  formData.append('title', item.title);
  formData.append('price', item.price);
  formData.append('discount', item.discount);
  formData.append('category', item.category || +defaultCategory.id);
  
  try {
    const res = await axios.post(api + '/meals/', formData, {
      headers: {
        Authorization: 'JWT ' + token.access
      },
    });
    dispatch(getAllMenu())
  } catch (error) {
  }
}
export const editMeal = (item) => async (dispatch) => {
  console.log(item, 'item');
  const token = JSON.parse(localStorage.getItem('token'))
  const formData = new FormData();

  if (typeof item.image !== 'string') {
    formData.append('image', item.image);
  }
  formData.append('title', item.title);
  formData.append('price', item.price);
  formData.append('discount', item.discount);
  formData.append('description', item.description);
  formData.append('category', item.category.id);
  
  try {
    const res = await axios.patch(api + `/meals/${item.id}/`, formData, {
      headers: {
        Authorization: 'JWT ' + token.access
      },
    });
    dispatch(getAllMenu())
  } catch (error) {
  }
}
//CATEGORY
export const getCategories = () => async (dispatch) => {
  try {
    const res = await axios.get(api + '/categories/');
    dispatch(setCategories(res.data))
  } catch (error) {
  }
}
export const createCategory = (item) => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem('token'))
  try {
    const res = await axios.post(api + '/categories/', item, {
      headers: {
        Authorization: 'JWT ' + token.access
      },
    });
    dispatch(getCategories())
  } catch (error) {
  }
}
export const removeCategory = (id) => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem('token'))
  try {
    const res = await axios.delete(api + '/categories/' + id, {
      headers: {
        Authorization: 'JWT ' + token.access
      },
    });
    dispatch(getCategories())
  } catch (error) {
  }
}

//MODAL
export const toggleEditModal = (value) => async (dispatch) => {
  try {
    dispatch(setToggleEditModal(value))
  } catch (error) {
  }
}

//BASKET
export const addToBasket = (item) => async (dispatch) => {
  try {
    dispatch(setToBasket(item))
    dispatch(isAddToBasket(true))

  } catch (error) {
  }
}

export const isBasketAdded = (is) => async (dispatch) => {
  dispatch(isAddToBasket(is))
}

//ORDER
export const createOrder = (item) => async (dispatch) => {
  const basket = JSON.parse(localStorage.getItem('basket'))

  const basket_ids = basket.map((card) => {
    return {
      meal: card.id,
      quantity: card.count
    }
  })
  const data = {
    ...item,
    ordering_meals: basket_ids
  }
  try {
    const res = await axios.post(api + '/orders/', data);
    const newData = res.data.meals.map((card) => {
      return {
        title: card.meal.title,
        count: card.quantity
      }
    })
    const text = newData.map((item) => {
      return item.count + ' ' + item.title
    })
    console.log(res, 'res-CHECK');
    const staticText = `Здравствуйте! Мой номер телефона ${res.data.client_phone} .Я заказал `
    const decode = `https://wa.me/${initialState.adminNumber}?text=` + staticText + text;
    console.log(encodeURI(decode), 'decode');
    await dispatch(setOrder(decode))
  } catch (error) {
  }
}

export default menuSlice.reducer