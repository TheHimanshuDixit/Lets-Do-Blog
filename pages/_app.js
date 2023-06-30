import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// import '../styles/style.css'

// all page start from here 

export default function App({ Component, pageProps }) {
  const Router = useRouter();
  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState({ value: null })

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ value: token })
    }
    setKey(Math.random())

  }, [Router.query])

  const handlelogout = () => {
    localStorage.clear();
    setUser({ value: null })
    setKey(Math.random())
    alert('Logout Successfully');
    setTimeout(() => {
      Router.push("/");
    }, 2000);
  }


return <>
  {key && <Navbar user={user} key={key} handlelogout={handlelogout} />}
  <Component {...pageProps} />
  <Footer />
</>
}
