import React from 'react'
import './BlocMini.css'
import { NavLink } from 'react-router-dom'
import { Star } from 'lucide-react';

type MyComponentProps = {
    title: string;
    image: string;
    lien: string;
    note: string;
  };

export default function BlocMini({title,image,lien,note}:MyComponentProps) {
  return (
    <NavLink to={lien} className='BlocMini'>
        <div className="Blocmini" style={{backgroundImage: `url(${image})`}}>
            <div className="description">
                <p>{title}</p>
                <p><Star width='15px' color='yellow' />{note}/10</p>
            </div>
        </div>
    </NavLink>
  )
}
