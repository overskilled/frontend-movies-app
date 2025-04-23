import React from 'react'
import './BlocPoint.css'

type monComposant = {
    id:string
}

export default function BlocPoint({id}:monComposant) {
  return (
    <div className='BlocPoint'>
        <label htmlFor={id}><div className="Point1"></div></label>
        <label htmlFor={id}><div className="Point2"></div></label>
        <label htmlFor={id}><div className="Point3"></div></label>
    </div>
  )
}
