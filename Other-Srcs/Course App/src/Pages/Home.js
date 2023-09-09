import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Courselist from '../components/Courselist';
import UserData from "../ContextUserData";

function Home() {

  let navigate = useNavigate();

  const contextUserData = useContext(UserData);
  const { isLogged } = contextUserData;

  useEffect(() => {
    if (!isLogged) navigate('/')
  },
    [isLogged]
  )

  return (
    <div>

      <h1 className='text-center mt-3 display-4'>Welcome to the Learning App</h1>
      <p className='text-center mt-3 pb-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <div className='row d-flex justify-content-center p-0 m-0'>

        <div className='col-3 m-4 p-3 bg-secondary rounded text-white'>
          <h3 className='text-center display-5 '>Cources Offered</h3>
          <p className='text-center mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
        <div className='col-3 m-4 p-3 bg-info rounded'>
          <h3 className='text-center display-5'>Cources Offered</h3>
          <p className='text-center mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
        <div className='col-3 m-4 p-3 bg-danger rounded text-white'>
          <h3 className='text-center display-5 '>Cources Offered</h3>
          <p className='text-center mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>

      </div>

    </div>
  );
}

export default Home;