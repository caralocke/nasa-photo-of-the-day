import React from 'react'

export default function Picture(props) {
    const {nasaData} = props
    return (
        <div>
            <img src={nasaData.hdurl} alt='astronomy for today'/>
        </div>
    )
}
