import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App"
import { WeatherContextProvider } from './weatherContext'

ReactDOM.render(
    <WeatherContextProvider>
        <App />
    </WeatherContextProvider>
    , document.getElementById('root'))