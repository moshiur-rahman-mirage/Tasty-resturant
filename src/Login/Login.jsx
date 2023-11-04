
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillGoogleCircle } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const { signInUser, brand,signInWithGoogle } = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')


        signInUser(email, password)
            .then(result => {
                toast.success('Logged In Successfully!');
                navigate("/");
                
            })
            .catch(error => {
                console.log(error)
                if(error.code === 'auth/wrong-password'){
                    toast.error('Please check the Password');
                  }
                  if(error.code === 'auth/invalid-login-credentials'){
                    toast.error('Please check the Email');
                  }
                 
            })


    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                toast.success('Logged In Successfully!');
            })
            .catch(error => {
                toast.error('Error Occured!');
            })
    }
    return (
        <div>
            <ToastContainer/>
            <section className="bg-secondary">
                <div className="flex flex-col  items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold ">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl ">
                            {/* {brand} */}
                        </h1>
                    </a>
                    <div className="w-full bg-neutral  rounded-lg shadow-2xl md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-3 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-neutral-content ">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6 border-neutral-content" onSubmit={handleLogin} >
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-neutral-content ">Your email</label>
                                    <input type="email" name="email" id="email" className=" border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-neutral-content">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 text-neutral-content" required="" />
                                </div>
                                <button type="submit" className="w-full bg-accent text-neutral btn btn-ghost  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                <div>
                                    <p className="text-sm font-light text-neutral-content">
                                        Don’t have an account yet? <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                                    </p>
                                </div>
                                <div className="flex items-center justify-between gap-4">
                                <p className='text-neutral-content'>Login With Google ?</p>
                                <button onClick={handleGoogleSignIn} className="btn "><AiFillGoogleCircle className="text-3xl rounded-lg"></AiFillGoogleCircle></button>
                               </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;