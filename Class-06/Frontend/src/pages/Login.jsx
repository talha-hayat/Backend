import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
    // STATE VARIABLE 
    const [ email, setEmail ] = useState("")
    const [password, setPassword] = useState("")

    // FUNCTIONS 
    const handlesubmit = async (e)=>{
        e.preventDefault()
        // console.log(email,password)
        const response = await axios.post("http://localhost:5000/signin",{
            email,password
        })
        console.log(response)
    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Enter Your Email' /> <br /><br />
                <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Enter Your Password' /> <br /><br />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login