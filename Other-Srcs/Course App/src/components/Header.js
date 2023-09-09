import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserData from "../ContextUserData";


export default function Header() {

    let navigate = useNavigate();

    const contextUserData = useContext(UserData);
    const { isLogged, setIslogged,loggedUser } = contextUserData;


    useEffect(() => {
        if (!isLogged) navigate('/')
    },
        [isLogged]
    )

    let LogOutUser = () => {
      
        setIslogged(false);
        navigate('/')
    }

    return (<>
        <div className='page'>
            <nav className="p-3 bg-secondary">
                <ul className="navbar nav-ul p-0 m-0 ">
                    <div className=" d-flex justify-content-start w-50">
                        <li className="nav-item">
                            <h2 className="ml-4 text-warning mt-1">REACT </h2>
                        </li>
                        <li className="nav-item ml-5 active">
                            <Link to="/Home" className="nav-link text-white text-left h4">Home <span className="ml-3 text-warning">|</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Course" className="nav-link text-white  h4">Cources <span className="ml-3 text-warning">|</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/About" className="nav-link text-white  h4">About <span className="ml-3 text-warning">|</span></Link>
                        </li>
                    </div>
                    <div className=" d-flex justify-content-end w-50">
                        <li className="nav-item mr-5">
                            <h2 className="ml-4  text-white">Hi {loggedUser} </h2>
                        </li>
                        <li className="nav-item mr-3 mt-1">
                            <button className="btn btn-warning text-dark" onClick={LogOutUser} >Logout </button>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    </>

    )
}