import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import toast from 'react-hot-toast';

const Register = () => {
    const [createUserWithEmailAndPassword,user,loading,error] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
    console.log(loading)
    console.log(error)
    /* Password hided */
    const [lock,setLock]=useState(false)
    /* Input handel and value set  */
    const [emailInfo,setEmail]=useState({
        email:'',
        password:'',
        confirm:'',
    })
    const [errorInfo,setError]=useState({
        email:'',
        password:'',
        confirm:'',
    })
    /* ===================  handel Email ======================= */
    const handelEmail =(e)=>{
        const result = (/\S+@\S+\.\S+/).test(e.target.value)
        if(result){
            setEmail({...emailInfo,email:e.target.value})
            setError({...errorInfo,email:''})
        }else{
            setError({...errorInfo,email:'Not valid Email'})
            setEmail({...emailInfo,email:''})
        }
    }
    /* ===================  handel Password ======================= */
    const handelPassword =(e)=>{
        const result =(e.target.value)
        if(result.length>6){
            setEmail({...emailInfo,password:e.target.value})
            setError({...errorInfo,password:''})
        }else{
            setError({...errorInfo,password:'Not valid Password'})
            setEmail({...emailInfo,password:''})
           
        }
    }
    /* ===================  handel Confirm ======================= */
    const handelConfirm =(e)=>{
        const result =(e.target.value)
        if(emailInfo.password === result){
            setEmail({...emailInfo,confirm:e.target.value})
            setError({...errorInfo,confirm:''})
        }else{
            setError({...errorInfo,confirm:'Match Not Password'})
            setEmail({...emailInfo,confirm:''})
        }
    }
    /* ================= SignUp ===================== */
    const SignUp =(e)=>{
        const email =emailInfo.email
        const password =emailInfo.confirm
        if(email=== '' && password===''){
            toast.error("Enter you Email")
            return;
        }
        createUserWithEmailAndPassword(email,password)
        e.preventDefault()
    }
    /* ====================== Google with ====================== */
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const GoogleSignUp =()=>{
        signInWithGoogle()
    }
    /*  route  */
    const Navigate=useNavigate()
    if(user){
        Navigate('/')
        toast.success('SignUp Success')
    }
    /* =================================== Email handel ===================================== */
    useEffect(()=>{
        if(error?.code){
            toast.error('Email Your Register')
        }
    },[error])
    console.log(error)
    
    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className=' w-[300px] p-5 py-10 mt-20  mx-auto register'>
            <h1 className='text-3xl text-center text-slate-500 font-mono font-semibold'>Register</h1>
            <form>
                <div className='text-slate-500 font-mono font-semibold'>
                    <div className='my-2'>
                        <label htmlFor="email">Enter  Email</label>
                        <input onChange={handelEmail}  className='w-[100%] input-style py-2 px-2' type="email"  id="email" required />
                        <p className='text-[12px] text-red-600'>
                           {errorInfo.email}
                        </p>
                    </div>
                    <div className='my-2'>
                        <label htmlFor="pd">Enter  Password</label>
                        <input onChange={handelPassword} className='w-[100%] input-style py-2 px-2 relative'  type={lock?'text':'password'}  id="pd" required/>
                       
                        <span onClick={()=>setLock(!lock)} className='absolute mt-2 ml-[-25px] '>
                        {
                            lock? <FontAwesomeIcon icon={faUnlock}></FontAwesomeIcon> :<FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                        }    
                        </span>
                        <p className='text-[12px] text-red-600'>{errorInfo.password}</p>

                    </div>
                    <div className='my-2'>
                        <label htmlFor="pd">Confirm Password</label>
                        <input onChange={handelConfirm}  className='w-[100%] input-style py-2 px-2 relative'  type={lock?'text':'password'}  id="pd" required />
                        <p className='text-[12px] text-red-600'>{errorInfo.confirm}</p>

                    </div>
                    <button onClick={SignUp} className='w-[100%] text-center text-white font-mono font-semibold bg-slate-400 py-1 rounded-lg'>Register</button>
                </div>
                <p className='text-center text-slate-500 font-mono font-semibold'>Login account <Link className='text-xl text-red-400'  to='/login'>Login</Link></p>
            </form>
            <div onClick={GoogleSignUp} className='flex justify-center items-center py-2 mt-2 rounded-lg text-slate-500 font-mono font-semibold bg-white '>
                <p> Google with</p>
                <img className='w-[30px] mx-2' src="https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png" alt="colorful google logo transparent clipart download @transparentpng.com" />
            </div>
        </div>
    );
};

export default Register;