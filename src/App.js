import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import React from 'react'
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="content">
                    <Route path='/profile' render={() => <Profile posts={props.posts}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                        {/*<Route path="/" component={}/>*/}
                        {/*<Route path="/" component={}/>*/}
                        {/*<Route path="/" component={}/>*/}
                </div>
            </div>
        </BrowserRouter>
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