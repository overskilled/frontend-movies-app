import React from 'react'
import { NavLink } from 'react-router-dom'
import BlocPoint from '../Blocs/Bloc3Points/BlocPoint'
import './NavMenu.css'

export default function NavMenu() {
  const smallerdb = [
    {nom:'#POPULAR',lien:'nav'},
    {nom:'#POPULAR',lien:'nav'},
    {nom:'#POPULAR',lien:'nav'},
    {nom:'#POPULAR',lien:'nav'}
  ] 
  return (
    <div className='NavMenu'>
        <ul className="listeNavMenu">
          {smallerdb.map((el,index)=>(
            <li key={index}><NavLink to={el.lien}>{el.nom}</NavLink></li>
          ))}
        </ul>
          <div className="points">
            <BlocPoint id='sda' />
          </div>
    </div>
  )
}
