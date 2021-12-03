import "./App.css"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import React from "react"
import { Route } from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import FriendsContainer from "./components/Friends/FriendsContainer"
import UsersContainer from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="content">
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/friends" render={() => <FriendsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        {/*<Route path="/" component={}/>*/}
      </div>
    </div>
  )
}

export default App
