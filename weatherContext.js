import React, { createContext, useEffect, useReducer, useState } from 'react'
const Context = createContext()

function WeatherContextProvider({ children }) {
    const [query, setQuery] = useState('London')
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'LOCATION': {
                return {
                    ...state,
                    location: action.location
                }
            }
            case 'TODAY_WEATHER': {
                return {
                    ...state,
                    todayWeather: action.todayWeather
                }
            }
            default:
                return state
        }
    }, {
        location: [],
        todayWeather: {}
    })


    async function FetchData() {
        const res = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${query}`)
        const data = await res.json()

        dispatch({ type: 'LOCATION', location: data })
        console.log(data);
        if (data.length) {
            const response = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${data[0].woeid}`)
            console.log(data[0].woeid);
            const todayWeatherData = await response.json()
            dispatch({ type: 'TODAY_WEATHER', todayWeather: todayWeatherData })
        }
    }
    useEffect(() => {
        FetchData()
    }, [])


    return <Context.Provider value={{ state, dispatch, FetchData, setQuery }}>
        {children}
    </Context.Provider>
}

export { WeatherContextProvider, Context }