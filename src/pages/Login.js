import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!inputs.email) {
      tempErrors.email = 'Email is required';
    } else if (!regex.test(inputs.email)) {
      tempErrors.email = 'Email is not valid';
    }
    if (!inputs.password) {
      tempErrors.password = 'Password is required';
    } else if (inputs.password.length < 8) {
      tempErrors.password = 'Password must be at least 8 characters long';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (validate()) {
      navigate('/home');
    }
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

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email</label>
              <input id="email-address" name="email" type="email" autoComplete="off" required 
                  className="mt-2 appearance-none block w-full px-3 py-2 border 
                  border-gray-300 placeholder-gray-500 text-gray-900 rounded-md 
                  focus:outline-none focus:border-indigo-500 focus:z-10 sm:text-sm" 
                  placeholder="Email address" value={inputs.email} onChange={handleChange} />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
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
                placeholder="Password" value={inputs.password} onChange={handleChange}
            />
            {errors.password && <p className="text-pink text-xs mt-1 italic">{errors.password}</p>}
          </div>
          <div>
            <button type="submit" 
                    style={{ backgroundColor: '#df7f69' }}
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
