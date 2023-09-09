import React, { useState, useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserData from "../ContextUserData";

function Login() {

    const [logindata, setLoginData] = useState({
        request: 'candidate_login',
        email: 'vijay@gmail.com',
        password: 'pass@123',
    })
    const value = useContext(UserData);

    const {isLogged,setIslogged,setLoggedUser} = value;

    let navigate = useNavigate();

    let RegisterUser = () => {
        navigate('/Register')
    }

    useEffect(
        () => {
            if (isLogged) {
                navigate('/Home');
             }else{
                navigate('/');
             }
        },
        [isLogged])

    let loginUser = async () => {

        // axios({
        //     method: 'post',
        //     url: 'https://karka.academy/api/action.php?',
        //     data:JSON.stringify(data)
        //   })
        //     .then(function (response) {
        //       console.log(response)
        //     });

        const {data} = await axios.post('https://karka.academy/api/action.php?', JSON.stringify(logindata));

        if (data.status == 'success') {
           
            getAllMembers();
            
            setIslogged(true);

            localStorage.setItem('status',true);
           
            navigate("/Home");
        }
        
    }
    let getAllMembers = async () =>{

        const {data} = await axios.get('https://karka.academy/api/action.php?request=getAllMembers');
        let user = data.data.find(val => logindata.email == val.email );
        setLoggedUser(user.name);

    }
    return (
        <div className="login-wrapper" >
            <div className="login-innerwrapper">
                <div className="w-75 m-auto pt-5 pb-5">
                    <h2 className="text-primary text-center pb-4">Login</h2>

                    <div className='bg-primary d-flex m-2 mb-4 rounded'>
                    <span className='bg-primary text-white p-3 text-center w-25'>Name</span>
                    <input className=" text-center w-75" value={'vijay@gmail.com'} onChange={(e) => setLoginData({ ...logindata, email: e.target.value })} placeholder="Email" />
                    <br />
                    </div>
                    <div className='bg-primary d-flex m-2 mb-4 rounded'>
                    <span className='bg-primary text-white p-3 text-center w-25'>Password</span>
                    <input className=" text-center w-100" value={'pass@123'} onChange={(e) => setLoginData({ ...logindata, password: e.target.value })} placeholder="Password" />
                    <br />
                    </div>
              
                    <span className="text-dark d-block ml-2 ">Didn't have account yet ? <a className="text-primary" onClick={RegisterUser}> Register </a></span>
                    <button className="form-control btn btn-primary mt-4 mb-2" type="button" onClick={loginUser} >Login</button>
                </div>
            </div>
        </div>
    )

}
export default Login; 