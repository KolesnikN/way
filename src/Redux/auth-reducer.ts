import { usersAPI } from "../components/api/api"

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
        ...action.data,
        isAuth: true,
      }

    default:
      return state
  }
}

type setAuthUserDataPayloadType = {
  id: number
  login: string
  email: string
}
type setAuthUserDataType = {
  type: typeof SET_USER_DATA
  data: setAuthUserDataPayloadType
}

export const setAuthUserData = (
  id: number,
  login: string,
  email: string
): setAuthUserDataType => ({
  type: SET_USER_DATA,
  data: { id, login, email },
})

export const authProfile = () => {
  return (dispatch: any) => {
    usersAPI.authAPI().then((resp) => {
      if (resp.data.resultCode === 0) {
        let { id, login, email } = resp.data.data
        dispatch(setAuthUserData(id, login, email))
      }
    })
  }
}

export default authReducer
