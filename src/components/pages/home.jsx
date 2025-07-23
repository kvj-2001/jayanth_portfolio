import './../../App.css'
import Hero from '../main/main';
import { useEffect } from 'react'
import Footer from './../footer/footer';

function Home(){

    useEffect(() => {
        document.title = 'KVJ | Home';
    }, []);

    return(
        <>
        
        <Hero/>
        <Footer/>
        </>
    )
}

export default Home;