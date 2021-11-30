import { combineReducers, createStore } from "redux"
import dialogReducer from "./dialog-reducer"
import friendReducer from "./friends-reducer"
import postReducer from "./post-reducer"
import userReducer from "./user-reducer"

let reducers = combineReducers({
  profilePage: postReducer,
  dialogPage: dialogReducer,
  friendPage: friendReducer,
  userPage: userReducer,
})

let store = createStore(reducers)

export default store
