import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { FaCode } from 'react-icons/fa';


const Login = () => {

  const [credential, setCredential] = useState({ email: "", password: "" })
  const Router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      Router.push('/')
    }
  }, [])

  const onChange = (e) => {
    e.preventDefault();
    setCredential({ ...credential, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`/api/login`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: credential.email, password: credential.password }), // body data type must match "Content-Type" header
    });
    const resp = await response.json();
    if (resp.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', resp.token)
      alert('Logged in Successfully');
      setTimeout(() => {
        Router.push("/");
      }, 2000);
    }
    else {
      alert('Invalid Credentials');
    }

  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <FaCode className='text-2xl text-pink-500 mx-auto h-14 w-auto' />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                <input onChange={onChange} id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 focus:outline-none sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              </div>
              <div className="mt-2">
                <input onChange={onChange} id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 focus:outline-none sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login