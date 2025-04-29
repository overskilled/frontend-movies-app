import React, { useState } from 'react'
import './FormCbt.css'

export default function FormCbt() {
    const [inputValue, setInputValue] = useState<string>('');
    const handlechange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
  return (
    <div className='FormCbt'>
        <div className="FormCbtContainer">
            <label htmlFor="name">Actor Name</label>
            <input type="text" id='name' value={inputValue} onChange={handlechange} placeholder='enter the name'/>
            <label htmlFor="genre">Genres & Subgenres</label>
            <select name="Genres" id="Genres">
                <option value="romantique">romantique</option>
                <option value="romantique">romantique</option>
                <option value="romantique">romantique</option>
                <option value="romantique">romantique</option>
                <option value="romantique">romantique</option>
            </select>
            <label htmlFor="rating">Rating Range</label>
            <select name="rating" id="rating">
                <option value="sangoku">sangoku</option>
                <option value="sangoku">sangoku</option>
                <option value="sangoku">sangoku</option>
                <option value="sangoku">sangoku</option>
            </select>
            <label htmlFor="yo">Release Year</label>
            <div className='doubleSelectFormCbt'>
                <select name="from1" id="from1">
                    <option value="from1">from1</option>
                    <option value="from1">from1</option>
                    <option value="from1">from1</option>
                    <option value="from1">from1</option>
                </select>
                <select name="from2" id="from2">
                    <option value="from2">from2</option>
                    <option value="from2">from2</option>
                    <option value="from2">from2</option>
                    <option value="from2">from2</option>
                </select>
            </div>
            <button>submit</button>
        </div>
    </div>
  )
}
