import React, { useState } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { ChevronDown, ChevronRight, Search } from 'lucide-react'

type myComponent = {
    titre: string,
    smallTitle: string,
    align: string
}

export default function Header({ titre, align, smallTitle }: myComponent) {
    const [inputValue, setInputValue] = useState<string>('');
    const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }
    return (
        <div className='Header'>
            <header>
                <div className="HeaderNav">
                    <div className='logo'><img src="/logo-movies.png" alt="logo" /></div>
                    <nav>
                        <ul className='nav-list1'>
                            <li className='nav-item'><NavLink to='/'>HOME </NavLink></li>
                            <li className='nav-item'><NavLink to='/movie'>MOVIES </NavLink></li>
                            <li className='nav-item'><NavLink to='/celebritie'>CELEBRITIES </NavLink></li>
                            <li className='nav-item'><NavLink to='/new'>NEWS </NavLink></li>
                            <li className='nav-item'><NavLink to='/profile'>COMMUNITY </NavLink></li>
                        </ul>
                        <ul className='nav-list2'>
                            <li className='nav-item'><NavLink to=''>PAGES </NavLink></li>
                            <li className='nav-item'><NavLink to=''>HELP</NavLink></li>
                            <li className='nav-item'><NavLink to=''>LOG IN</NavLink></li>
                            <li className='nav-itemU'><NavLink to=''>SIGN UP</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className="Bar">
                    <div className='SearchBar'>
                        <select name="inputSelect" id="inputSelect">
                            <option value="SHOW">TV SHOW</option>
                            <option value="REIGIEUX">REIGIEUX</option>
                            <option value="ROMANTIQUE">ROMANTIQUE</option>
                            <option value="PERVERS">PERVERS</option>
                            <option value="INTELECT">INTELECT</option>
                        </select>
                        <input type="text" placeholder='Enter your movies' className='search-input' value={inputValue} onChange={handlechange} />
                        <button className='search-button'><Search color='white' /></button>
                    </div>
                </div>
                <div className="HeaderTitle" >
                    <div className="HeaderTitleContainer" style={{ alignItems: `${align}` }}>
                        <h1>{titre}</h1>
                        <p><NavLink to=''>Home</NavLink> <ChevronRight style={{ margin: '0px 10px', width: '15 px' }} /> {smallTitle}</p>
                    </div>
                </div>
            </header>
        </div>
    )
}
