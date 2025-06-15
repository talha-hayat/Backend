import axios from "axios"
import { useState } from "react"



const Signup = ()=> {
    // State VARIBLES 
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // FUNCTIONS 
    const handlesubmit =  async (e) => {
        e.preventDefault()
        // console.log(name , email , password)

        const response = await axios.post("http://localhost:5000/signup",{
            name,
            email,
            password
        })

        console.log(response)
    }


    return (
        <div>
            <h1>SignUp</h1>
            <form onSubmit={handlesubmit}>
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter Your Name' /> <br />  <br />
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Your Email' /> <br /> <br />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter Your Password' /> <br /> <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Signup