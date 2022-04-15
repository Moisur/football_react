import React from 'react';
import { Link } from 'react-router-dom';
import './Plyer.css'
const Plyer = ({ plyers }) => {
    const { strNationality, strPlayer, strThumb } = plyers
    return (
        <div className='cart-style rounded-2xl shadow-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-md'>
            <img className='w-[90%] mx-auto rounded-2xl' src={strThumb == null ? 'https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/max_1300x1300/public/2021-10/RS8003_GettyImages-994576028-hig.jpg?itok=Ll1aydU5' : strThumb} alt="" />
            <div className='text-left my-10'>
                <p className='text-2xl font-mono text-white'>Names: {strPlayer}</p>
                <p className='text-xl font-mono text-white'>Nationality: {strNationality}</p>
            </div>
            <Link to='/' className='cart-text py-3 bg-slate-400 rounded-2xl text-lg font-mono text-white'>Details</Link>
        </div>
    );
};

export default Plyer;