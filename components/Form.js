import React, { useContext } from 'react'
import { Context } from '../WeatherContext'

function Form() {
    const { state, dispatch, FetchData } = useContext(Context)
    const { query, location } = state

    function handleSubmit(e) {
        e.preventDefault()
        console.log('I am fetched', location);
        dispatch({ type: 'LOCATION', location: FetchData() })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={query}
                placeholder='Search places'
                onChange={(e) => dispatch({ type: 'CITY', query: e.target.value })} />

            <button>
                Search
            </button>
        </form >
    )
}

export default Form
