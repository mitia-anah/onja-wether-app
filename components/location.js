import React, { useContext, useEffect } from 'react'
import { Context } from '../WeatherContext'

function Location() {
    const { state, dispatch } = useContext(Context)
    const { location } = state
    console.log(location);
    return (
        <div>
            <p>hahhahah</p>
        </div>
    )
}

export default Location
