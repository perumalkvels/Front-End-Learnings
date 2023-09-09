import React, { useEffect, useContext,useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Courselist from '../components/Courselist';
import UserData from "../ContextUserData";

export default function Course() {

  let navigate = useNavigate();

  const [filterData,setFilterData] = useState({});

  const contextUserData = useContext(UserData);
    const {isLogged, courses} = contextUserData;

  //  if(filterData.course_name == ''){
    
  //   setFilterData({...filterData,filterMode : ''})
  // } 

  useEffect(() => {
    console.log(filterData);
    if (!isLogged) navigate('/')
  },
    [isLogged]
  )

  return (
    <div>
      <h1 className='text-center mt-3 display-4'>Building Your Self With Your Favs</h1>
      <p className='text-center mt-3 pb-0'>We studied the tech and science behind text messaging. I know, yeah it's so simple, but there is a good way to do it. With this course, you will quickly discover a winning formula to master text message conversations. Donnot worry, it is not rocket science. With practice, our lessons will become second nature to you! We studied the tech and science behind text messaging. I know, yeah it's so simple, but there is a good way to do it. With this course, formula to master text message conversations.</p>
      <div>
        <div class="pos-f-t">
          
          <nav class="navbar navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              <span class=" ml-2">Filter</span>
            </button>
            <div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-dark p-3 text-center d-flex align-middle w-100">
             
              <div className='d-flex w-25'>
                  <label className='text-white h4 mr-4'>Amount</label>
                  <div className='d-flex'>
                  <input className='form-control  text-center' placeholder="min" 
                  onChange={(e) => setFilterData({...filterData,"min_amount" : e.target.value})}/>
                  </div>
              </div>
              <div className='d-flex'>
                  <label className='text-white text-center ml-4 h4'>Course</label>
                  <input className='form-control  w-50 text-center m-0 ml-3' placeholder="Course Name"
                   onChange={(e) => setFilterData({...filterData,"course_name" : e.target.value})}/>
                  <button className='btn btn-warning text-dark ml-3' 
                  onClick={(e)=>  setFilterData({...filterData,filterMode : true})}>Apply</button>
                  <button className='btn btn-danger text-white ml-3'
                  onClick={(e)=>  setFilterData({})}>Clear</button>
              </div>
            </div>
          </div>
        </nav>
        </div>
      </div>
      <div className='text-right mt-5 mr-5'>
        <button className='btn btn-success text-white  mr-5'>
          <Link to={`/Addcourse`}><span className='text-white'>Add New Cources</span></Link>
        </button>
      </div>
      
      <div className='row d-flex justify-content-center'>
        <h3 className='text-center mt-3 text-danger'>All Courses are here with the contents...</h3>
        <div className='courselist-wrapper p-0'>
          <Courselist filterData={filterData} />
        </div>
      </div>
    </div>
  );
}

