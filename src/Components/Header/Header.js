import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import CustomLink from '../../CustomLink';
import { Link, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const Location=useLocation()
    const [menu, setMenu] = useState(false)
    const menubar = () => {
        setMenu(!menu)
    }
    /* Login Work ===================== */
    const [user] = useAuthState(auth);
    return (
        <nav style={Location.pathname.includes('blog')?{display:"none"}:{display:"block"}} className="bg-gray-400 text-white sticky top-0 z-10" >
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
                            <span className='px-2 text-2xl font-mono'>Football</span>
                        </div>
                        <div className="hidden sm:block sm:ml-6 ">
                            <div className="flex space-x-4 ">
                                <CustomLink to="/home" className=" px-3 py-2  text-sm font-medium" >Home</CustomLink>

                                <CustomLink to={`/plyers`} className=" px-3 py-2  text-sm font-medium">Details</CustomLink>

                                <CustomLink to="/details" className=" px-3 py-2  text-sm font-medium">Plyers</CustomLink>

                                <CustomLink to="/blog" className=" px-3 py-2  text-sm font-medium">Blog</CustomLink>
                            </div>
                        </div>
                    </div>
                    {
                        user?.uid?<Link onClick={()=>signOut(auth)} to='/'>Logout</Link>:<Link to='/Register'>Register</Link>
                    }
                    
                </div>
              
                {
                    menu ?
                        <div className="sm:hidden" id="mobile-menu">
                            <div class="px-2 pt-2 pb-3 space-y-1">
                                <CustomLink to="/home" className=" py-2 px-3  text-base font-medium" >Home</CustomLink>

                                <CustomLink to="/plyers" className=" block px-3 py-2  text-base font-medium">Details</CustomLink>

                                <CustomLink to="/details" className=" block px-3 py-2  text-base font-medium">Plyers</CustomLink>
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