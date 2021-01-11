import React, { createContext, useReducer, useEffect } from 'react'
const Context = createContext()

function WeatherContextProvider({ children }) {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'LOCATION': {
                return {
                    ...state,
                    location: action.data
                }
            }
            case 'TODAY_WEATHER': {
                return {
                    ...state,
                    todayWeather: action.data
                }
            }
            case 'TEMPERATURE': {
                return {
                    ...state,
                    temperature: action.data
                }
            }

            default:
                break;
        }
        return state
    }, {
        location: [],
        todayweather: [],
        temperature: 'c'
    })
    return <Context.Provider
        value={{ state, dispatch }}>
        {children}
    </Context.Provider>
}

export { WeatherContextProvider, Context } 
