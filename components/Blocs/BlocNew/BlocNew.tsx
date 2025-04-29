import React from 'react'
import './BlocNew.css'


type MyComponentProps = {
    title: string;
    image: string;
    describ: string;
    Date: string;
  };

export default function BlocNew({title, image, describ, Date}: MyComponentProps) {
  return (
    <div className='BlocNew'>
         <div className="BlocNewImage">
            <img src={image} alt="" />
         </div>
        <div className="BlocNewDescription">
            <h4>{title}</h4>
            <span>{Date}</span>
            <p>{describ}</p>
        </div>
    </div>
  )
}
