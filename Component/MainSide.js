import React, { useContext } from 'react'
import { Context } from '../WeatherContext'

function MainSide() {
    const { state } = useContext(Context)
    const { todayWeather } = state
    console.log(todayWeather && todayWeather);

    const weatherDuringTheWeek = todayWeather && todayWeather.consolidated_weather && todayWeather.consolidated_weather.slice(1, 7);
    console.log(weatherDuringTheWeek);
    const hightLights = todayWeather && todayWeather.consolidated_weather && todayWeather.consolidated_weather[0];
    console.log(hightLights);

    return (
        <div className='mainSide_wrapper'>
            <div className='C_F'>
                <button type='button' className='C'>℃</button>
                <button type='button' className='F'>℉</button>
            </div>
            <div className='weather_formation'>
                {weatherDuringTheWeek && weatherDuringTheWeek.map(weather =>
                    <li className='weather_card' key={weather.id}>
                        <p>{new Date(weather.applicable_date).toDateString()}</p>
                        <img className='forcast_img' src={`https://www.metaweather.com//static/img/weather/png/${weather.weather_state_abbr}.png`} />
                        <div className='temp'>
                            <span>{Math.round(weather.max_temp)}°C</span>
                            <span>{Math.round(weather.min_temp)}°C</span>
                        </div>
                    </li>
                )
                }
            </div >
            <div className="today_Hightlights">
                <h4>Today's Hightlights</h4>
                <div className='hightlights_cards'>
                    <div className='card wind_status'>
                        <h5>Wind status</h5>
                        <p className='big_letter'>{Math.floor(hightLights && hightLights.wind_speed)} <span>mph</span></p>
                        <i className="ri-arrow-left-down-line"></i>{hightLights && hightLights.wind_direction_compass}
                    </div>
                    <div className='card humidity'>
                        <h5>humidity</h5>
                        <p className='big_letter' >{hightLights && hightLights.humidity} <span>%</span></p>
                        <div className="label_list">
                            <span className="label">0</span>
                            <span className="label">50</span>
                            <span className="label">100</span>
                        </div>
                        <progress className='yellow_bar' value={hightLights && hightLights.humidity} max='100' style={{ width: 230, color: 'lightyellow' }} > {hightLights && hightLights.humidity}</progress>
                        <p className='align_end'>%</p>
                    </div>
                    <div className='card visibility'>
                        <h5>visibility</h5>
                        <p className='big_letter'>{Math.round(hightLights && hightLights.visibility * 10) / 10} <span>miles</span></p>
                    </div>
                    <div className='card air_pressure'>
                        <h5>Air Pressure</h5>
                        <p className='big_letter'>{hightLights && hightLights.air_pressure} <span>mb</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSide
