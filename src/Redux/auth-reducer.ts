import { authAPI, usersAPI } from "../components/api/api"

const SET_USER_DATA = "SET_USER_DATA"

export type InitialStateType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
}

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}

type setAuthUserDataPayloadType = {
  id: number
  login: string
  email: string
  isAuth: boolean
}
type setAuthUserDataType = {
  type: typeof SET_USER_DATA
  data: setAuthUserDataPayloadType
}

export const setAuthUserData = (
  id: any,
  login: any,
  email: any,
  isAuth: any
): setAuthUserDataType => ({
  type: SET_USER_DATA,
  data: { id, login, email, isAuth },
})

export const getAuthUserData = () => (dispatch: any) => {
  authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data
      dispatch(setAuthUserData(id, email, login, true))
    }
  })
}

export const login =
  (email: string, password: string, rememberME: boolean) => (dispatch: any) => {
    authAPI.login(email, password, rememberME).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData)
      }
    })
  }

export const logout = () => (dispatch: any) => {
  authAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
    }
  })
}

export default authReducer
