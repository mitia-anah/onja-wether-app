import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App"
import { WeatherContextProvider } from './WeatherContext'

ReactDOM.render(
    <WeatherContextProvider>
        <App></App>
    </WeatherContextProvider>
    , document.getElementById('root'))