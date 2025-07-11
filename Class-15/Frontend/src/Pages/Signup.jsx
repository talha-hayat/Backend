import { useState } from 'react';
import  { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const navigat = useNavigate();

    // const [data, setData] = useState({
    //     firstName: '',
    //     lastName: '', 
    //     email: '',
    //     phoneNo: '', 
    //     password: '',
    //     profileImage: ""
    // })

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState(''); 
    const [password, setPassword] = useState('');
    const [profileImage, setProfileImage] = useState('');

    // Function to handle input changes
    const handleChange = (e) => {
        e.preventDefault()
    }

    // Function to handle image change
    // This function updates the profileImage state with the selected file
    const imageChange = (e) => {
        setProfileImage(e.target.files[0]);
    }

    // Function to handle form submission
    // This function can be used to send the form data to the server   
    const handleSubmit = async (e) => {
        e.preventDefault()
        let imgUrl = null    

        const formdata = new FormData();
        formdata.append("key",profileImage)

        const imageResponse = await axios.post("http://localhost:5000/upload", formdata)
        imgUrl = imageResponse.data.ImageUrl;

        const finalData = {
            firstName,
            lastName,
            email,
            phoneNo,
            password,
            profileImage: imgUrl
        }

        const response = await axios.post("http://localhost:5000/api/signup", finalData);
        if(response.status === 201){
            alert("User Created Successfully");
            navigat('/login');
        } else {
            alert("Error creating user");
        }
    }

    // Function to navigate to the login page
    const navigate = () => {
        navigat('/login');
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl p-10 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
        <h2 className="text-4xl font-extrabold text-green-700 mb-2 text-center">Create Your Account</h2>
        <p className="text-center text-gray-500 mb-8">Join us and get started in seconds!</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold text-gray-700">First Name</label>
              <input onChange={(e)=>{setFirstName(e.target.value)}} type="text" id="first-name" name='firstName' className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-3 border"/>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold text-gray-700">Last Name</label>
              <input onChange={(e)=>{setLastName(e.target.value)}} type="text" id="last-name" name='lastName' className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-3 border"/>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address</label>
            <input onChange={(e)=>{setEmail(e.target.value)}} type="email" id="email" name='email' className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-3 border"/>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Phone Number</label>
            <input type="tel" id="phone" name='phoneNo' className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-3 border"/>
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
            <input onChange={(e)=>{setPassword(e.target.value)}} type="password" id="password" name='password' className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-3 border"/>
          </div>

        <div className="relative border-2 border-dashed border-green-400 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-green-50 transition cursor-pointer">
            <div className="flex flex-col items-center space-y-2">
              <svg  className="w-14 h-14 text-green-500"  fill="none"  stroke="currentColor"  strokeWidth={1.5}  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16V4m0 0l-4 4m4-4l4 4M4 16h16v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" />
              </svg>
              <p className="text-green-700 font-semibold">
                Choose a file <span className="text-gray-500">or drag it here</span>
              </p>
              <input onChange={imageChange} type="file" accept="image/*" className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-500 file:text-white hover:file:bg-green-700 transition-colors duration-200 cursor-pointer" />
            </div>
        </div>


          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <span className='text-green-700 font-bold underline hover:text-green-900 cursor-pointer' onClick={navigate}>Sign In</span>
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

export default Signup
