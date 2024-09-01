import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function Login() {

  const [credentials, setcredentials] = useState({ email:"",password:""})
      let navigate = useNavigate()
        const handleSubmit = async(e)=>{
            e.preventDefault();
            console.log(JSON.stringify({ email:credentials.email,password:credentials.password}))
            const response = await fetch("http://localhost:5000/api/loginuser",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({ email:credentials.email, password:credentials.password})
            });
            const json = await response.json()
            console.log(json);

            if(!json.success){
                alert("Enter Valid Credentials")
            }

            if(json.success){
              localStorage.setItem("userEmail",credentials.email);
              localStorage.setItem("authToken",json.authToken);
              console.log(localStorage.getItem("authToken"))
              navigate("/");
          }

        }

        const onChange=(event)=>{
            setcredentials({...credentials,[event.target.name]:event.target.value})
        }


  return (
    <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
      <div className="container">
      <div className="absolute inset-0 z-0">
        <img src="https://source.unsplash.com/random/1920x1080" alt=""
            className="w-full h-full object-cover filter blur-lg brightness-50"/>
        </div>
    <form className="relative py-3 sm:max-w-xl sm:mx-auto" onSubmit={handleSubmit}>
    <div
      className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
    </div>
    <div className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'>
    <div>
        <h1 className="text-2xl font-semibold mb-5">Login</h1>
        </div>
    <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" placeholder="name@abc.com" name="email" value={credentials.email} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" onChange={onChange} required />
    </div>
    <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" placeholder="Enter Password" name="password" value={credentials.password} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" onChange={onChange} required />
    </div> 
        {/* <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
        <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
        </div>
        <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
        </div> */}
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    <Link to="/createuser" className=" m-3 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ">I'm a new user</Link>
    {/* <Link to = "" className=" m-3 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ">Alrady a User</Link> */}
    </div>
    </form>
    </div>
    
</div>
  )
}
