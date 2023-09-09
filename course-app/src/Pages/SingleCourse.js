import React,{useState,useEffect,useContext } from "react";
import { useNavigate,useParams } from "react-router-dom";
import Courselist from "../components/Courselist";
import UserData from "../ContextUserData";
import axios from 'axios';

function CourseSingle(){

    const params = useParams();
    const [courseDetails,setCourseDetails] = useState({});

    const contextUserData = useContext(UserData);
    const { isLogged } = contextUserData;

    let navigate = useNavigate();

    useEffect(()=>{
        if(!isLogged) navigate('/');
        window.scrollTo(0,0)
        getCourseDetails(params.id);
    },
    [isLogged,params.id]
    )

    const getCourseDetails = async() => {
        const {data} = await axios.get(`http://karka.academy/api/action.php?request=getCourseDetails&id=${params.id}`)
        setCourseDetails(data.data);
        console.log(courseDetails);
    }

    return(<>
            <div className ='overall-cards row w-100 p-0 m-0'>
                <div class='card main-card p-4 w-75'>
                   <div>

                    <div class='card-body  main-card-steady product-card-body bg-primary text-white'>
                        <h2 class='card-title text-center'>{courseDetails.name}</h2>
                        <span class='badge badge-dark mb-2 mr-2 p-2 font-weight-normal'></span>
                        <p class='card-text'>{courseDetails.video_id}</p>
                        <button class='font-weight-bold text-dark btn btn-light btn-block'>Play Now</button>
                    </div>
                    <div class='card-footer bg-dark text-white text-center'>
                        <small class='h6'>{courseDetails.description}</small>
                    </div>
                </div>
                
      <h3 className=' mt-3 text-left'>Video Description</h3>
      <p className='text-left mt-3 pb-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>

                <div class='side-cards w-25 p-0 m-0'>
                    <Courselist/>
                </div>
            </div>
            
    </>)
}

export default CourseSingle;