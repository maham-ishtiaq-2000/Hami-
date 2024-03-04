import React from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
      navigate('/home');
    };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-navy"> 
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-lg shadow-md">
      <div>
            <h2 className="text-center text-1xl text-gray-900">
                Welcome Back
            </h2>
            <h2 className="mt-2 text-center text-3xl font-bold text-gray-900">
                Login to your account
            </h2>
        </div>

        <form className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />

        <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email</label>
            <input id="email-address" name="email" type="email" autoComplete="off" required 
                className="mt-2 appearance-none block w-full px-3 py-2 border 
                border-gray-300 placeholder-gray-500 text-gray-900 rounded-md 
                focus:outline-none focus:border-indigo-500 focus:z-10 sm:text-sm" 
                placeholder="Email address" />
            </div>
            <div className="flex justify-between items-center"> 
            <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-2">Password</label>
            <a className="text-sm text-[#f3937d] hover:text-[#f3937d] mb-2">Forgot?</a>

            </div>
            <input 
                id="password" 
                name="password" 
                type="password" 
                autoComplete="off" 
                required 
                className="mt-2 appearance-none block w-full px-3 py-2 border 
                        border-gray-300 placeholder-gray-500 text-gray-900 rounded-md 
                        focus:outline-none focus:border-indigo-500 focus:z-10 sm:text-sm" 
                placeholder="Password" 
            />
        </div>
        <div>
        <button type="submit" 
                style={{ backgroundColor: '#df7f69' }}
                onClick={handleLogin}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:bg-pink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                 Login Now
        </button>

        </div>

        </form>



      </div>
    </div>
  );
}

export default Login;
