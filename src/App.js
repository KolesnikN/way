import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import React from "react"
import { Route } from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import FriendsContainer from "./components/Friends/FriendsContainer"
import UsersContainer from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import HeaderContainer from "./components/Header/HeaderContainer"
import { Login } from "./components/Login/Login"

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="content">
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/friends" render={() => <FriendsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/login" render={() => <Login />} />
        {/*<Route path="/" component={}/>*/}
      </div>
    </div>
  )
}

export default App
