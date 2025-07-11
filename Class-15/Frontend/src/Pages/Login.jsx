import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigat = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    // Function to handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault()
      const data = {
        email,
        password
      }

      const response = await axios.post("http://localhost:5000/api/login", data); 
      if(response.status === 200){
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        alert("Login Successfully");
        navigat('/');
      } else {
        alert("Login Failed");
      }
    }

    
    // Function to navigate to the Signup page
    const navigate = () => {
        navigat('/Signup');
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl p-10 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
        <h2 className="text-4xl font-extrabold text-green-700 mb-2 text-center">Login Your Account</h2>
        <p className="text-center text-gray-500 mb-8">Join us and get started in seconds!</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address</label>
            <input onChange={(e)=>{setEmail(e.target.value)}} type="email" id="email" name='email' className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-3 border"/>
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
            <input onChange={(e)=>{setPassword(e.target.value)}} type="password" id="password" name='password' className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-3 border"/>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <span className='text-green-700 font-bold underline hover:text-green-900 cursor-pointer' onClick={navigate}>Sign Up</span>
            </p>
          </div>

          <div>
            <button type="submit" className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white py-3 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
