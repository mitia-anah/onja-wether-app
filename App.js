import React, { useContext, useState } from 'react'
import SideBar from './Component/SideBar'
import MainSide from './Component/MainSide'
import { Context } from './WeatherContext'


function App() {
   

    return (
        <div>
            <h3>Weather App</h3>
            <div className='main'>
                <SideBar className='sideBar' />
                <MainSide className='mainSide' />
            </div>
        </div>
    )
}

export default App
