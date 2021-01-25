import React, { useContext, useState } from 'react'
import { Context } from '../WeatherContext';

function Input({ query, setQuery }) {
    const [activeSearch, setActiveSearch] = useState(false);

    const { state, dispatch, FetchData } = useContext(Context);
    const { location } = state

    function handleSubmit(e) {
        e.preventDefault()
        console.log('I am fetched', location);
        dispatch({ type: 'LOCATION', location: FetchData() })
    }

    return (
        <>
            {activeSearch === false ?
            (
                <div className='first_page_btn'>
                    <button className='active_btn' onClick={() => setActiveSearch(!activeSearch)}>Search For Places</button>
                    <button>icon</button>
                </div>)
                :
                (
                <form onSubmit={handleSubmit}>
                    <input
                        className='inputSearch'
                        value={query}
                        placeholder='london'
                        onChange={(e) => setQuery(e.target.value)} />
                    <button className='buttonSearch'>
                        Search
                </button>
                </form>)
            }
        </>
    )
}

export default Input