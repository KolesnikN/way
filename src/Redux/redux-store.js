import { applyMiddleware, combineReducers, createStore } from "redux"
import authReducer from "./auth-reducer"
import dialogReducer from "./dialog-reducer"
import friendReducer from "./friends-reducer"
import profileReducer from "./profile-reducer"
import userReducer from "./user-reducer"
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  friendPage: friendReducer,
  userPage: userReducer,
  auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store
