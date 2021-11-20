import React from "react"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import store from "./Redux/state"

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={store.getState()}
        addPost={store.addPost.bind(store)}
        updatePostText={store.updatePostText.bind(store)}
        addDialog={store.addDialog.bind(store)}
        updateDialogText={store.updateDialogText.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById("root")
  )
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

reportWebVitals()
