import React from 'react'
import './BlocMovie.css'
import { Star } from 'lucide-react'


type components = {
  image: string,
  titre: string,
  note: string,
  description:string
}
export default function BlocMovie({image, titre, note, description}:components) {
  return (
    <div className='BlocMovie' >
        <div className="ImageMovie">
          <img src={image} alt="" />
        </div>
        <div className="describMovie">
          <h3>{titre}</h3>
          <span><Star color='yellow' /> {note}/10.</span>
          <p className='p' >{description}</p>
          <hr style={{width:'95%'}}/>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum dolor nihil animi ut fuga quos eos adipisci sapiente, deserunt quisquam?</p>
        </div>
    </div>
  )
}
