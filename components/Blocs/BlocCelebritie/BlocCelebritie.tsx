// import React from 'react'
import './BlocCelebritie.css'

type myComponent = {
    name: string,
    description: string,
    role: string,
    image: string
}

export default function BlocCelebritie({name,image,description,role}:myComponent) {
  return (
    <div className='BlocCelebritie'>
      <div className="IMAGE">
        <img src={image} alt="image" />
      </div>
        <div className="CelebritieContainer">
            <h2>{name}</h2>
            <span>{role}</span>
            <p>{description}</p>
        </div>
    </div>
  )
}
