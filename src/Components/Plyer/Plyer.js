import React from 'react';
import {useNavigate } from 'react-router-dom';
import './Plyer.css'
const Plyer = ({ plyers,children }) => {
    const { strNationality, strPlayer, strThumb,idPlayer } = plyers || {}
    const { Description, Location, Height,Weight } = children || {}
    const Navigate=useNavigate()
    const Players =()=>{
        Navigate(`/plyers/${idPlayer}`)
    }
    return (
        <div className='cart-style rounded-2xl shadow-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 '>
            <img className='w-[90%] mx-auto rounded-2xl' src={strThumb == null ? 'https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/max_1300x1300/public/2021-10/RS8003_GettyImages-994576028-hig.jpg?itok=Ll1aydU5' : strThumb} alt="" />
            <div className='text-left my-10'>
                <p className='text-2xl font-mono text-white'>Names: {strPlayer}</p>
                <p className='text-xl  text-white'>Nationality: {strNationality}</p>
                <p className='text-xl  text-white  text-slate-300'>Description: {Description}</p>
                <p className='text-xl  text-white'>Location: {Location}</p>
                <p className='text-xl  text-white'>Height: {Height}</p>
                <p className='text-xl  text-white'>Weight: {Weight}</p>
               
            </div>
            <button onClick={Players}  className='cart-text py-3 bg-slate-400 rounded-2xl text-lg font-mono text-white'>Details</button>
        </div>
    );
};

export default Plyer;