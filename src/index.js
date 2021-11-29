import React from "react"
import "./index.css"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import store from "./Redux/redux-store"
import { Provider } from "react-redux"

let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  )
}

rerenderEntireTree()

store.subscribe(() => {
  rerenderEntireTree()
})
