import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
const Login = () => {
    const [lock, setLock] = useState(false)
    const [emailInfo,setEmail]=useState({
        email:'',
        password:'',
    })
    const [errorInfo,setError]=useState({
        email:'',
        password:'',
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
    /* ============================== Login ================================ */
    const SignUp =(e)=>{
        const email =emailInfo.email
        const password =emailInfo.password
        if(email=== '' && password===''){
            toast.error("Enter you Email")
            return;
        }
        console.log(email,password)
        e.preventDefault()
    }
    /* ======================= ===================== */
    // const [
    //     signInWithEmailAndPassword,
      
    //   ] = useSignInWithEmailAndPassword(auth);

    /* ====================== Google with ====================== */
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const GoogleSignUp =()=>{
        signInWithGoogle()
    }
    return (
        <div className=' w-[300px] p-5 py-10 mt-20  mx-auto register'>
            <h1 className='text-3xl text-center text-slate-500 font-mono font-semibold'>Login</h1>
            <form>
                <div className='text-slate-500 font-mono font-semibold'>
                    <div className='my-2'>
                        <label htmlFor="email">Enter  Email</label>
                        <input onChange={handelEmail}  className='w-[100%] input-style py-2 px-2' type="email" id="email" required />
                        <p className='text-[12px] text-red-600'>
                            {errorInfo.email}
                        </p>
                    </div>
                    <div className='my-2'>
                        <label htmlFor="pd">Enter  Password</label>
                        {/*  */}
                        <input onChange={handelPassword} className='w-[100%] input-style py-2 px-2 relative' type={lock ? 'text' : 'password'} id="pd" required />
                        <span onClick={() => setLock(!lock)} className='absolute mt-2 ml-[-25px] '>
                            {
                                lock ? <FontAwesomeIcon icon={faUnlock}></FontAwesomeIcon> : <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                            }
                        </span>
                        <p className='text-[12px] text-red-600'>{errorInfo.password} </p>
                        

                    </div>
                    <button onClick={SignUp} className='w-[100%] text-center text-white font-mono font-semibold bg-slate-400 py-1 rounded-lg'>Login</button>
                </div>
                <p className='text-slate-500 font-mono font-semibold'>Forget Password ..?</p>
                <p className=' text-slate-500 font-mono font-semibold'>Crete account <Link className='text-xl text-red-400' to='/register'>Register</Link></p>
            </form>
            <div onClick={GoogleSignUp} className='flex justify-center items-center py-2 mt-2 rounded-lg text-slate-500 font-mono font-semibold bg-white '>
                <p> Google with</p>
                <img className='w-[30px] mx-2' src="https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png" alt="colorful google logo transparent clipart download @transparentpng.com" />
            </div>
        </div>
    );
};

export default Login;