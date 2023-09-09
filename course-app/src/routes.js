import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import About from './Pages/About';
import SingleCourse from './Pages/SingleCourse';
import Course from './Pages/Coursepage';
import Addcourses from './Pages/Addcourses';
import Courselist from './components/Courselist';
import UserData from './ContextUserData';

function MainRoutes() {

   

    const [loggedUser,setLoggedUser] = useState('');

    const [courses,setCourses] = useState([]);

    localStorage.setItem('status',false);

    const [isLogged,setIslogged] = useState(false);



    return (
        <UserData.Provider value={{isLogged,setIslogged,loggedUser,setLoggedUser,courses,setCourses}}>
        <Router>

            {isLogged === true ? <Header setIslogged={setIslogged} /> : null}
            
            <Routes>
                   
                    <Route path='/'      element={ <Login />}         />
                    <Route path='/Register'  element={<Register />}      />
                    <Route path='/Home'      element={<Home />}          />
                    <Route path='/About'     element={<About  />}        />
                    <Route path='/Course' element={<Course />} />
                    <Route path='/Addcourse' element={<Addcourses  />}   />
                    <Route path='/course/:id'element={<SingleCourse />}  />
            </Routes>

            {isLogged === true ? <Footer /> : null}

        </Router>
        </UserData.Provider>
    )
}

export default MainRoutes;