import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [{id: 1, name: "Nick"}, {id: 2, name: "Uliana"}]
let messages = [{id: 1, message: "Kak dela"}, {id: 2, message: "4to delaew"}]

let posts = [{id: 1, message: "Privet kak dela to?", likes: 23}, {id: 2, message: "4e delaew", likes: 4}]

ReactDOM.render(
    <React.StrictMode>
        <App dialogs={dialogs} messages={messages} posts={posts}/>
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
