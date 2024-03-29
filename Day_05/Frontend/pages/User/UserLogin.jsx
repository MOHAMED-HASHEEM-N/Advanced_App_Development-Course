import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './UserLogin.css'
import {useSelector} from 'react-redux'
import Navbar from '../../components/Nav'
function UserLogin() {

    // const login = useSelector((state) => state.UserLogin)
    // const APIURL = useSelector((state) => state.APIURL.url);

    // const queryParams = {
    //     email: login.email,
    //     password: login.password,
    // };
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            console.log(token);
        } else {
            console.log("nothing");
        }
    });


    // const dispatch = useDispatch()
    // const navigate = useNavigate()

    // const onChange = (e) => {
    //     dispatch(UserLoginAction(e.target.name, e.target.value))
    // }



    const handleLogin = async (e) => {
        e.preventDefault()

        // try {
        //     const response = await axios.get(`${APIURL}/login`, { params: queryParams })
        //     if (response.data.userData && response.data.userData.email) {
        //         localStorage.setItem('token', response.data.token)
        //         localStorage.setItem('userEmail', response.data.userData.email);
        //         navigate('/home')
        //     } else {
        //         alert(response.data.message);
        //     }
        // } catch (error) {
        //     console.log(error);
        //     alert(error.message);
        // }
    }



    return (
        <div>
            <Navbar />
            <div className='login-container'>
                <div className='login-form'>
                    <div className="login-image">
                        <img src="https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-3530.jpg?w=740&t=st=1689943085~exp=1689943685~hmac=794f53b53426265d50e593b8a17cd386a6c5992d6c7a72536c7bddf8953360d4" alt="" />
                    </div>
                    <div className="login">
                        <h1>Welcome back!</h1>
                        <form onSubmit={handleLogin} >
                            <div>
                                <input
                                    type="text"
                                    className='input'
                                    name='email'
                                    placeholder='Enter your email'
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <input type="password"
                                    className='input'
                                    name='password'
                                    placeholder='Enter your password'
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button>LogIn</button>
                        </form>
                        <div className='login-footer'>
                            <p>Not yet registered?</p>
                            <p className='signup-p'
                                onClick={() => {
                                    navigate('/signup')
                                }}
                            >Signup here!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserLogin