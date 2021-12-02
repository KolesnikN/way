import { combineReducers, createStore } from "redux"
import dialogReducer from "./dialog-reducer"
import friendReducer from "./friends-reducer"
import profileReducer from "./profile-reducer"
import userReducer from "./user-reducer"

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  friendPage: friendReducer,
  userPage: userReducer,
})

let store = createStore(reducers)

export default store
