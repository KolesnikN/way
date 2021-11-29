import "./App.css"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"
import React from "react"
import { Route } from "react-router-dom"
import Friends from "./components/Friends/Friends"
import DialogsContainer from "./components/Dialogs/DialogsContainer"

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar state={props.state.ownFriends} />
      <div className="content">
        <Route path="/profile" render={() => <Profile store={props.store} />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/friends" render={() => <Friends />} />
        {/*<Route path="/" component={}/>*/}
        {/*<Route path="/" component={}/>*/}
      </div>
    </div>
  )
}

export default App
