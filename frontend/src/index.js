import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {BrowserRouter} from "react-router-dom";

const app = (
    <BrowserRouter basename={'/'}>
        <App/>
    </BrowserRouter>
)

ReactDOM.render(
    app,
    document.getElementById('root')
)

