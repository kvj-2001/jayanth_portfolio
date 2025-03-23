import './../../App.css'
import Headers from './../header/Headers'
import Hero from '../main/main';
import { useEffect } from 'react'
import Footer from './../footer/footer';

function Home(){

    useEffect(() => {
        document.title = 'KVJ | Home';
    }, []);

    return(
        <>
        <Headers/>
        <Hero/>
        <Footer/>
        </>
    )
}

export default Home;