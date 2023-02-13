import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate()

    useEffect(() => {
        //* you need to add withCredentials bc if you don't have it with logout, it won't clear the cookies
        axios.get("http://localhost:8000/api/logout", {withCredentials: true})
            .then (() => {
                console.log("Logged out")
                navigate("/")
            })
    }, [])
}

export default Logout;