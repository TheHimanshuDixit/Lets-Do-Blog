import Navbar from '@/components/Navbar';
import '@/styles/globals.css'
// import '../styles/style.css'

// all page start from here 

export default function App({ Component, pageProps }) {
  console.log('app');
  return <>
    <Navbar />
    <Component {...pageProps} />
  </>
}
