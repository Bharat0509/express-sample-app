import axios from 'axios'
import React, { useEffect } from 'react'

const Test = () => {
    const testUrl = async () => {
        return await axios.get('http://127.0.0.1:4000/api/v1/getCookie', { withCredentials: true })
    }
    useEffect(() => {
        testUrl();
    }, [])
    return (
        <div>Test</div>
    )
}

export default Test