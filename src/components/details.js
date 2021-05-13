import React, {useState ,useEffect} from 'react'
import {BASE_URL, API_KEY} from '../constants'
import axios from 'axios'
import styled from 'styled-components'

export default function details(props) {
    const {nasaData} = props
    // const [details, setDetails] = useState(null)

    // useEffect(() => {
    //     axios.get(`${BASE_URL}/?/${API_KEY}`)
    //     .then (res => {setDetails(res.explanation)})
    //     .catch (err => { debugger })
    // }, [])


    return (
        <div className='container'>
            <h2>{nasaData.title}</h2>
            <h3>{nasaData.date}</h3>
            <p>{nasaData.explanation}</p>
        </div>
    )
}
