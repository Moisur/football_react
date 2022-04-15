import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import CustomLink from '../../CustomLink';

const Header = () => {
    const [menu, setMenu] = useState(false)
    const menubar = () => {
        setMenu(!menu)
    }
    console.log(menu)
    return (
        <nav className="bg-gray-400 text-white">
            <div className="max-w-7xl mx-auto px-2  sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button onClick={menubar} className="inline-flex text-2xl text-white items-center justify-center p-2 rounded-md ">{
                            menu?<FontAwesomeIcon icon={faXmark} />:<FontAwesomeIcon icon={faBars} />
                        }</button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center md:mr-20">
                            <img className=" h-8 w-auto" src={require('../img/football-logo1.png')} alt="Workflow" />
                            <span className='px-2 text-2xl'>Football</span>
                        </div>
                        <div className="hidden sm:block sm:ml-6 ">
                            <div className="flex space-x-4 ">
                                <CustomLink to="/home" className=" px-3 py-2  text-sm font-medium" >Home</CustomLink>

                                <CustomLink to="/plyers" className=" px-3 py-2  text-sm font-medium">Plyers</CustomLink>

                                <CustomLink to="/details" className=" px-3 py-2  text-sm font-medium">Details</CustomLink>

                                <CustomLink to="/blog" className=" px-3 py-2  text-sm font-medium">Blog</CustomLink>
                            </div>
                        </div>
                    </div>
                    <button>Login</button>
                </div>
              
                {
                    menu ?
                        <div className="sm:hidden" id="mobile-menu">
                            <div class="px-2 pt-2 pb-3 space-y-1">
                                <CustomLink to="/home" className=" py-2 px-3  text-base font-medium" >Home</CustomLink>

                                <CustomLink to="/plyers" className=" block px-3 py-2  text-base font-medium">Plyers</CustomLink>

                                <CustomLink to="/details" className=" block px-3 py-2  text-base font-medium">Details</CustomLink>

                                <CustomLink to="/blog" className=" block px-3 py-2  text-base font-medium">Blog</CustomLink>
                            </div>
                        </div>
                        : ''
                }
                
            </div>
            

        </nav>

    );
};


export default Header;