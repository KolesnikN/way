import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import React from 'react'
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Friends from "./Friends/Friends";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.ownFriends}/>
            <div className="content">
                <Route path='/profile' render={() => <Profile
                    state={props.state.profilePage} addPost={props.addPost}/>}/>
                <Route path='/dialogs' render={() => <Dialogs
                    state={props.state.messagesPage}/>}/>
                <Route path="/friends" render={() => <Friends
                    state={props.state.ownFriends}/>}/>
                {/*<Route path="/" component={}/>*/}
                {/*<Route path="/" component={}/>*/}
            </div>
        </div>
    );
}

export default App;

// return (
//     <div className="app-wrapper">
//         <BrowserRouter>
//             <Header/>
//             <Navbar/>
//             <div className="content">
//
//                 <Route path='/dialogsNames'>
//                     <Dialog/>
//                 </Route>
//                 <Route path='/profile'>
//                     <Profile/>
//                 </Route>
//                 {/*<Route path="/profile">*/}
//                 {/*    <Profile/>*/}
//                 {/*</Route>*/}
//                 {/*<Route path="/profile">*/}
//                 {/*    <Profile/>*/}
//                 {/*</Route>*/}
//                 {/*<Route path="/profile">*/}
//                 {/*    <Profile/>*/}
//                 {/*</Route>*/}
//
//             </div>
//         </BrowserRouter>
//     </div>