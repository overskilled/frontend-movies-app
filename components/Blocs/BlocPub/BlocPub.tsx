import React from 'react'
import './BlocPub.css'
import { NavLink } from 'react-router-dom'
import { Star } from 'lucide-react';

type MyComponentProps = {
    title: string;
    image: string;
    lien: string;
    note: string;
  };

export default function BlocPub({title,image,lien,note}:MyComponentProps) {
  return (
    <NavLink to={lien} className='BlocPub'>
        <div className="Blocpub" style={{backgroundImage: `url(${image})`}}>
            <div className="descriptionBlocPub">
                <p>{title}</p>
                <p><Star width='15px' color='yellow' />{note}/10</p>
            </div>
        </div>
    </NavLink>
  )
}
