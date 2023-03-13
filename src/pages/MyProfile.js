import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ContexData } from "../context/ContextDate"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function MyProfile() {

    const { backfunc, } = useContext(ContexData);

    const [allUsers, setAllUsers] = useState(JSON?.parse(localStorage.getItem('users')) || []);
    const [loginState, setLoginState] = useState(true);
    const [eyeState, setEyeState] = useState(true);
    const [collectUsers, setCollectUsers] = useState({
        email: "",
        password: "",
    });
    const addAcc = useNavigate();

    // Refresh all users state
    function refUsers() {
        setAllUsers(
            JSON?.parse(localStorage.getItem('users')) || []
        )
    }

    // Collect all user's information
    function collUsersFunc(e) {
        setCollectUsers({
            ...collectUsers,
            [e.target.name]: e.target.value
        })
    }

    // My Profile link
    function myProf(e) {
        e.preventDefault();
        if (collectUsers.email !== "" && collectUsers.password !== "") {
            if ((allUsers.filter(a => a.email === collectUsers.email && a.password === collectUsers.password)).length > 0) {
                Swal.fire(
                    'Warning!',
                    'This user has already logged in, please log in!',
                    'info'
                )
            }
            else {
                if (localStorage.getItem('users')) {
                    localStorage.setItem('users', JSON.stringify([
                        ...JSON.parse(localStorage.getItem('users')),
                        { ...collectUsers }
                    ]))
                }
                else {
                    localStorage.setItem('users', JSON.stringify([{ ...collectUsers }]));
                }
                setCollectUsers({
                    email: "",
                    password: "",
                });
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'You have successfull register!',
                    showConfirmButton: false,
                    timer: 1500
                })
                addAcc('/crud');
            }
            refUsers();
        }
        else {
            alert("Please fill all fields");
        }
    }
    // console.log((allUsers.filter(a => a.email === collectUsers.email && a.password === collectUsers.password));

    function loginFunc() {
        if ((allUsers.filter(a => a.email === collectUsers.email && a.password === collectUsers.password)).length > 0) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'You have successfull login!',
                showConfirmButton: false,
                timer: 1500
            })
            setCollectUsers({
                email: "",
                password: "",
            });
            addAcc('/crud');
        }
        else {
            Swal.fire(
                'Warning!',
                'User does not exist, please register!',
                'info'
            )
        }
    }

    return (
        <>
            <div className="myProfile">
                <div className="logIn">
                    <div className="topLI">
                        <div className="leftTop">
                            <button onClick={backfunc}><span>back</span></button>
                        </div>
                        <div className="centerTop">
                            {
                                loginState ? <h1>Register</h1> : <h1>Log In</h1>
                            }
                        </div>
                        <div className="rightTop">

                        </div>
                    </div>
                    <div className="centerLI">
                        <div className="inputUchun">
                            <label htmlFor="email">email</label>
                            <input onInput={(e) => collUsersFunc(e)} value={collectUsers.email} type="text" name="email" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="inputUchun">
                            <label htmlFor="password">password</label>
                            <button onClick={() => setEyeState(!eyeState)}>{eyeState ? <span><AiOutlineEye /></span> : <span><AiOutlineEyeInvisible /></span>}</button>
                            <input onInput={(e) => collUsersFunc(e)} value={collectUsers.password} type={eyeState ? 'password' : 'text'} name="password" id="password" placeholder="Enter your password" />
                        </div>
                    </div>
                    <div className="bottomLI">
                        <button onClick={loginState ? (e) => myProf(e) : loginFunc} id="submit">{loginState ? 'Register' : 'Login'}</button>
                    </div>
                    <div className="login">{loginState ? <button onClick={() => setLoginState(false)}>Login here ...</button> : <button onClick={() => setLoginState(true)}>Register here ...</button>}</div>
                </div>
            </div>
        </>
    )
}
export default MyProfile