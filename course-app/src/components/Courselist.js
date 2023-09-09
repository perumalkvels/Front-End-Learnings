import React, { useState, useEffect,useContext } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import UserData from "../ContextUserData";


export default function Courselist({filterData}) {

    let filterMinAmount = filterData?.min_amount ;
    let filterCourseName = filterData?.course_name ;
    let filterMode = filterData?.filterMode ;

    const value = useContext(UserData);

    const {courses,setCourses} = value;

    useEffect(() => {
       getCourseList();
    },
    [filterData]
    )

    const getCourseList = async () => {
        const { data } = await axios.get('https://karka.academy/api/action.php?request=getCourses');
        let courseData =  data.data;
       
     if(filterMode && filterCourseName || filterMinAmount){
                let filteredItems = courseData.filter((val) => {
                    
                    if( filterCourseName && filterMinAmount ){
                        // console.log("Both",filterCourseName,filterMinAmount)
                        return val.name == filterCourseName && val.price >= filterMinAmount;

                    } 
                    else if( filterCourseName || filterMinAmount ){
                        // console.log("Any One",filterCourseName,filterMinAmount)
                       return filterMinAmount ? parseInt(val.price) >= filterMinAmount : val.name == filterCourseName;
                    }
                    else{
                        return val;
                    }
                })
                console.log('filteredItems',filteredItems);
                setCourses(filteredItems);
                }
        else{
            console.log('This Is else part');
                setCourses(courseData);
        }
  
    }
                    
     

    return (<>
        <div className='courselist text-center m-0 p-0'>
            {courses.map((item, index) =>(
            <React.Fragment key={index}>
                <div className='card courselist-card  mb-3 '>
                    <div className='card-body courselist-body bg-secondary text-white'>
                        <h2 className='card-title text-center'>{item.name}</h2>
                        <span className='badge badge-dark mb-2 mr-2 p-2 font-weight-normal'></span>
                        <p className='card-text'>{item.time}</p>
                        <button className='font-weight-bold btn btn-dark btn-block'>
                            <Link to={`/course/${item.id}`}><i class='fa fa-external-link pr-3 text-white' aria-hidden='true'>Get Course @ {item.price}</i>
                            </Link></button>
                    </div>
                    <div className='card-footer bg-warning text-dark text-center'>
                        <small className='h6'>offers Available</small>
                    </div>
            </div>
            </React.Fragment>))}
        </div>
    </>)


} 