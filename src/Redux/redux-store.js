import { combineReducers, createStore } from "redux"
import dialogReducer from "./dialog-reducer"
import friendReducer from "./friends-reducer"
import postReducer from "./post-reducer"

let reducers = combineReducers({
  profilePage: postReducer,
  dialogPage: dialogReducer,
  friendPage: friendReducer,
})

let store = createStore(reducers)

export default store
