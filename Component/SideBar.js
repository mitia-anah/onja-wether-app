import React, { useContext, useState } from 'react'
import { Context } from '../WeatherContext'
import Modal from './Modal'


function SideBar() {
    const { state } = useContext(Context)
    const { todayWeather } = state

    const weatherToday = todayWeather && todayWeather.consolidated_weather && todayWeather.consolidated_weather[0];
    console.log(weatherToday);


    return (
        <>
            <div className='sideBar_container'>
                <Modal />
                <div className='sideBar_content'>
                    <img className='today_forcast-img' src={`https://www.metaweather.com//static/img/weather/png/${weatherToday && weatherToday.weather_state_abbr}.png`} />
                    <p className='the_temp'>{Math.round(weatherToday && weatherToday.the_temp)}°C</p>
                    <p className='weather_state_name'>{weatherToday && weatherToday.weather_state_name}</p>
                    <p className='date_location'>{new Date(weatherToday && weatherToday.applicable_date).toDateString()}</p>
                    <p className='date_location'>{todayWeather.title}</p>
                </div>
            </div>
        </>
    )
}

export default SideBar
