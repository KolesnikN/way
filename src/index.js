import React from "react"
import "./index.css"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import store from "./Redux/state"
import { Provider } from "./context"

let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App state={store.getState()} />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  )
}

rerenderEntireTree()

store.subscribe(() => {
  rerenderEntireTree()
})
