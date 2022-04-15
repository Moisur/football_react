import React, {  } from 'react';
import './Home.Module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import CustomHook from '../../Hook/CustomHook';
import Plyer from '../../Plyer/Plyer';
const Home = () => {
    const [data] = CustomHook()
    return (
        <div>
            <div className="grid  bg-style grid-cols-1 lg:grid-cols-2 gap-4  px-10  md:pt-32">
                <div className='md:pt-20 '>
                    <h1 className='text-7xl mb-10 text-white font-mono'>Lionel Messi</h1>
                    <h1 className='text-4xl mb-10 text-white font-mono'>Argentine professional footballer</h1>
                    <Link to='/' className=' text-white text-xl font-bold py-4 px-16 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md'>
                        Plyers
                        <span className='px-2'><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span>
                    </Link>
                </div>
                <div className="shadow-2xl rounded-2xl mt-16 animate-bounce  ...">
                    <img className='w-[450px] mx-auto' src={require('../../img/messi.png')} alt="" />
                </div>
            </div>
            <div className=' text-center mt-52 md:mt-0 my-10 flex items-center justify-center'>
                <input type="text" className='input-style py-2 px-4' />
                <button className=' text-white text-xl font-mono py-2 px-4 mx-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md'>Submit</button>
            </div>
            <div className='p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 text-center'>
                {
                    data.map(plyers => <Plyer plyers={plyers}></Plyer>)
                }
            </div>
            {/* data show  */}


        </div>
    );
};

export default Home;