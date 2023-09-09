import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserData from "../ContextUserData";
import axios from 'axios';

export default function Addcourse() { 
    const [courseData, setCourseData] = useState({
        request : 'create_course',
        name : '',
        video_id : '',
        description : '',
        price : '',
    })

    const contextUserData = useContext(UserData);
    const { isLogged } = contextUserData;


    let navigate=useNavigate();

    useEffect(() => {
        if(!isLogged) navigate("/")
      }, [isLogged])
     

    let createCourse = async() => {

        let response= await axios.post("http://karka.academy/api/action.php",JSON.stringify(courseData))
        console.log(response);
        response.data.status == "success" ? alert('This Course Upload Successfully') : alert('Course Upload Failed');
        setCourseData({...courseData,name:'',video_id:'',description:'',price:''})
        }

    return (
    <div className='container mt-3 mb-4 w-50'>
        <h1 className='text-dark text-center display-4 '>Createcourse</h1>

        <div className = 'container pl-5 pr-5 pt-2'>
                <div className='bg-secondary d-flex m-2 mb-3 rounded'>
                        <span className='bg-secondary text-white p-3 text-center w-25'>Name</span>
                        <input className=" text-center w-75" value={courseData.name} onChange={(e)=>setCourseData({...courseData,name:e.target.value})}/>
                </div>
                <div className='bg-secondary d-flex m-2  mb-3 rounded'>
                        <span className='bg-secondary  text-white p-3 text-center w-25'>Video-Id</span>
                        <input className=" text-center w-75" value={courseData.video_id} onChange={(e)=>setCourseData({...courseData,video_id:e.target.value})}/>
                </div>
                <div className='bg-secondary d-flex m-2  mb-3 rounded'>
                        <span className='bg-secondary text-white p-3 text-center w-25'>Description</span>
                        <input className=" text-center w-75" value={courseData.description} onChange={(e)=>setCourseData({...courseData,description:e.target.value})}/>
                </div>
                <div className='bg-secondary d-flex m-2  mb-3 rounded'>
                        <span className='bg-secondary text-white p-3 text-center w-25'>Price</span>
                        <input className=" text-center w-75" value={courseData.price} onChange={(e)=>setCourseData({...courseData,price:e.target.value})}/>
                </div>
                <div className='text-right'>
                <button className='btn btn-danger form-control w-25' onClick={createCourse}>Create</button>
                </div>
        </div>
    </div>
        
      )
}

//    let  tocreate= async()=>{
//         let response= await axios.post("http://karka.academy/api/action.php",JSON.stringify(createcourse))
//         console.log(response);
//         setcreatecourse({...setcreatecourse,name:"",video_id:"",description:"",price:""})
//     }


 
// }

