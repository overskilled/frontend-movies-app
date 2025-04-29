import React from 'react'
import { NavLink } from 'react-router-dom';
import './BlocFilm.css'

type MyComponentProps = {
    name: string;
    image: string;
    time: string;
};

export default function BlocFilm({name,image,time}:MyComponentProps) {
  return (
    <div className='BlocFilm'>
        <div className="ImageFilm">
            <img src={image} alt='img'/>
        </div>
        <div className="descriptionBlocFilm">
            <h6><NavLink to=''>{name}</NavLink></h6>
            <span>{time}</span>
        </div>
    </div>
  )
}