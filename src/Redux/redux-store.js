import { combineReducers, createStore } from "redux"
import dialogReducer from "./dialog-reducer"
import postReducer from "./post-reducer"

let reducers = combineReducers({
  profilePage: postReducer,
  dialogPage: dialogReducer,
})

let store = createStore(reducers)

export default store
