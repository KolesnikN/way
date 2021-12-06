import { authAPI } from "../components/api/api"

const SET_USER_DATA = "SET_USER_DATA"

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      }

    default:
      return state
  }
}

export const setAuthUserData = (id, login, email) => ({
  type: SET_USER_DATA,
  data: { id, login, email },
})

export const authProfile = () => {
  return (dispatch) => {
    authAPI().then((resp) => {
      if (resp.data.resultCode === 0) {
        let { id, login, email } = resp.data.data
        dispatch(setAuthUserData(id, login, email))
      }
    })
  }
}

export default authReducer
