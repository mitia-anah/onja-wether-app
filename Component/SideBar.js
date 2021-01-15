import React, { useContext } from 'react'
import { Context } from '../WeatherContext'

function SideBar({ query, setQuery }) {
    const { state, dispatch, FetchData } = useContext(Context)
    const { location, todayWeather } = state

    const weatherToday = todayWeather && todayWeather.consolidated_weather && todayWeather.consolidated_weather[0];
    console.log(weatherToday);

    function handleSubmit(e) {
        e.preventDefault()
        console.log('I am fetched', location);
        dispatch({ type: 'LOCATION', location: FetchData() })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    value={query}
                    placeholder='Search places'
                    onChange={(e) => setQuery(e.target.value)} />

                <button>
                    Search
                </button>
                <div className='sideBar_content'>
                    <img className='today_forcast-img' src={`https://www.metaweather.com//static/img/weather/png/${weatherToday && weatherToday.weather_state_abbr}.png`} />
                    <p className='the_temp'>{Math.round(weatherToday && weatherToday.the_temp)}°C</p>
                    <p className='weather_state_name'>{weatherToday && weatherToday.weather_state_name}</p>
                    <p className='date_location'>{new Date(weatherToday && weatherToday.applicable_date).toDateString()}</p>
                    <p className='date_location'>{todayWeather.title}</p>


                </div>
            </form >



        </>
    )
}

export default SideBar
