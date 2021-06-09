import React from 'react'

export default function Details(props) {
    const {nasaData} = props
    return (
        <div>
            <h4>Explanation: </h4>
            <p>{nasaData.explanation}</p>
            <p>Copyright: {nasaData.copyright}</p>
        </div>
    )
}
