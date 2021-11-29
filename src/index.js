import React from "react"
import "./index.css"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import store from "./Redux/state"
import { Provider } from "./context"

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider>
        <App
          state={store.getState()}
          dispatch={store.dispatch.bind(store)}
          store={store}
        />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  )
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state)
})
