import React, { createContext, useEffect, useReducer } from 'react'
const Context = createContext()

function WeatherContextProvider({ children }) {

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'LOCATION': {
                return {
                    ...state,
                    location: action.location
                }
            }
            case 'CITY': {
                return {
                    ...state,
                    query: action.query
                }
            }
            default:
                return state
        }
    }, {
        location: [],
        query: 'london'
    })

    const CORS_URL = 'https://cors-anywhere.herokuapp.com/'
    const BASE_URL = 'https://www.metaweather.com/api/location/search/?query='

    async function FetchData() {
        const res = await fetch(CORS_URL + BASE_URL + state.query)
        const data = await res.json()
        dispatch({ type: 'LOCATION', location: data })
    }
    useEffect(() => {
        FetchData()
    }, [])

    return <Context.Provider value={{ state, dispatch, FetchData }}>
        {children}
    </Context.Provider>
}

export { WeatherContextProvider, Context }