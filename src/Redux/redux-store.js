import { combineReducers, createStore } from "redux"
import authReducer from "./auth-reducer"
import dialogReducer from "./dialog-reducer"
import friendReducer from "./friends-reducer"
import profileReducer from "./profile-reducer"
import userReducer from "./user-reducer"

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  friendPage: friendReducer,
  userPage: userReducer,
  auth: authReducer,
})

let store = createStore(reducers)

window.store = store

export default store
