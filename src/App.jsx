import { useEffect } from 'react'
import './App.css'
import Homeontainer from './container/home/Homeontainer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Lenis from "lenis";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    })
  }, [])
//for smooth----------------
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // cleanup
    };
  }, []);

  return (
    <>
      <Homeontainer />
    </>
  )
}

export default App
