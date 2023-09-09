                    {/* <li className="nav-item">
                        <Link to="/Login" className="nav-link text-white">Login</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link to="/Register" className="nav-link text-white">Register</Link>
                    </li>



{/* <div class='product-id col-lg-3 col-md-4 col-12' style='width: 18rem;' >{item.name}
<div class='product-card card mb-3 '>
<div class='card-body product-card-body bg-danger text-white'>
<h5 class='card-title'>{item.name}</h5>
<span class='badge badge-dark mb-2 mr-2 p-2 font-weight-normal'>{item.price}</span>
<p class='card-text' id='food-description'>{item.time}</p>
<button class='font-weight-bold text-dark btn btn-light btn-block'>
<i class='fa fa-external-link pr-3' aria-hidden='true'>{item.video_id}</i></button> 
</div><div class='card-footer bg-dark text-white text-center'>
<small class='h6' id='food-price' ></small></div></div>
</div>  */}


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import About from './Pages/About';
import SingleCourse from './Pages/SingleCourse';
import Addcourses from './Pages/Addcourses';
import UserData from './ContextUserData';

function MainRoutes() {

    const [isLogged,setIslogged] = useState(false);

    

    return (
        <UserData.Provider value={{isLogged,setIslogged}}>
        <Router>

            {isLogged == true ? <Header setIslogged={setIslogged} /> : null}
            
            <Routes>
                {isLogged == false ? (<>
                    <Route path='/'          element={<Login />}         />
                    <Route path='/Register'  element={<Register />}      />
                </>) : (<>
                    <Route path='/Home'      element={<Home />}          />
                    <Route path='/About'     element={<About  />}        />
                    <Route path='/Addcourse' element={<Addcourses  />}   />
                    <Route path='/course/:id'element={<SingleCourse />}  />
                </>)
                }
            </Routes>

            {isLogged == true ? <Footer /> : null}

        </Router>
        </UserData.Provider>
    )
}

export default MainRoutes;