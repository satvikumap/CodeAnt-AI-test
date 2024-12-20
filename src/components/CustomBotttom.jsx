import React from 'react'
import { useNavigate } from 'react-router-dom';

function CustomBotttom(props) {
    const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/dashboard');
  };

  return (
    <div onClick={handleNavigation} className='flex justify-center items-center max-w-[100%] lg:max-w-[75%]  gap-5 py-4 mx-auto rounded-lg my-4 border-[1px]  hover:cursor-pointer  '>
            <img src={props.icon}/>
            <p>{props.text}</p>
    </div>

  )
}

export default CustomBotttom