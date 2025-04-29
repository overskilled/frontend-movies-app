import React from 'react';
import { NavLink } from 'react-router-dom';
import './BlocActor.css'

type MyComponentProps = {
    name: string;
    image: string;
    role: string;
  };

export default function BlocActor({name,image,role}:MyComponentProps) {
  return (
    <div className='BlocActor'>
        <div className="ImageActore">
            <img src={image} alt='img'/>
        </div>
        <div className="descriptionBlocActor">
            <h6><NavLink to=''>{name}</NavLink></h6>
            <span>{role}</span>
        </div>
    </div>
  )
}
