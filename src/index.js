import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost, updateDialogText, subscribe, updatePostText, addDialog} from "./Redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updatePostText={updatePostText}
                 addDialog={addDialog}
                 updateDialogText={updateDialogText}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree)

reportWebVitals();
