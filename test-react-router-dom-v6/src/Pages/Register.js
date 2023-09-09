import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {

    const [registerdata, setRegisterData] = useState({
        request: 'create_candidate', name: '', email: '', password: '',
        aadhar: '', address: '', phone: '', city: '', area: '',
        pin: '',
    })

    let navigate = useNavigate();

    let loginUser =() =>{
        navigate('/')
    }
    
    let registerUser = async() => {
        const response = await axios.post('https://karka.academy/api/action.php?', JSON.stringify(registerdata));
        console.log(response);

        // if(data.response)
    }
    return (
        <div className="register-wrapper" >
            <div className="bg-dark register-innerwrapper mb-5 p-5">
            <div className="w-100  pb-3">
                <h2 className="text-warning text-center pb-4">Register</h2>
                <div className='d-flex '>
                <input className="form-control text-center p-4  mr-2" onChange={(e) => setRegisterData({ ...registerdata, name: e.target.value })} placeholder="UserName" />
                <input className="form-control text-center p-4 ml-2" onChange={(e) => setRegisterData({ ...registerdata, email: e.target.value })} placeholder="Email" />
                </div>
                <br />
                <div className='d-flex '>
                <input className="form-control text-center p-4 mr-2 " onChange={(e) => setRegisterData({ ...registerdata, aadhar: e.target.value })} placeholder="Aadhar" />
                <input className="form-control text-center p-4 ml-2 " onChange={(e) => setRegisterData({ ...registerdata, phone: e.target.value })} placeholder="Phone No" />
                </div>
                <br />
                <input className="form-control text-center p-4 " onChange={(e) => setRegisterData({ ...registerdata, password: e.target.value })} placeholder="Password" />
                <br />

                <input className="form-control text-center p-4  " onChange={(e) => setRegisterData({ ...registerdata, address: e.target.value })} placeholder="Street" />
                <br />
                <div className='d-flex '>
                <input className="form-control text-center  p-4 mr-2  " onChange={(e) => setRegisterData({ ...registerdata, city: e.target.value })} placeholder="City" />
               
                <input className="form-control text-center  p-4 ml-2 mr-2 " onChange={(e) => setRegisterData({ ...registerdata, area: e.target.value })} placeholder="Area" />

                <input className="form-control text-center  p-4 ml-2 " onChange={(e) => setRegisterData({ ...registerdata, pin: e.target.value })} placeholder="Pin Code" />
                </div>
              
             
                <br />
                <span className="text-white d-block">If already have an account ? <a className="text-primary" onClick={loginUser}> Login </a></span>
                <button className="form-control btn btn-warning  mt-4 mb-2" type="button" onClick={registerUser} >Register</button>
                {/* <span className="text-white d-block">If already have an account ? <a className="text-warning" href="#"> Register </a></span> */}
                </div>
            </div>
        </div>
    )

}