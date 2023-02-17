import axios from 'axios'
import React, { useEffect } from 'react'

const Test = () => {
    const testUrl = async () => {
        return await axios.post('http://127.0.0.1:4000/api/v1/test', {}, { withCredentials: true })
    }
    useEffect(() => {
        testUrl();
    }, [])
    return (
        <div>Test</div>
    )
}

export default Test