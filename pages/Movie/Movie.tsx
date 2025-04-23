import { NavLink } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import './Movie.css'


export default function Movie() {
  return (
    <div className='Movie'>
        <header>
            <nav>
                <div className='logo'><img src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/logo1.png" alt="logo" /></div>
                <ul className='nav-list1'>
                    <li className='nav-item'><NavLink to=''>HOME <ChevronDown width='15px'/></NavLink></li>
                    <li className='nav-item'><NavLink to=''>MOVIES <ChevronDown width='15px'/></NavLink></li>
                    <li className='nav-item'><NavLink to=''>CELEBRITIES <ChevronDown width='15px'/></NavLink></li>
                    <li className='nav-item'><NavLink to=''>NEWS <ChevronDown width='15px'/></NavLink></li>
                    <li className='nav-item'><NavLink to=''>COMMUNITY <ChevronDown width='15px'/></NavLink></li>
                </ul>
                <ul className='nav-list2'>
                    <li className='nav-item'><NavLink to=''>PAGES <ChevronDown width='15px'/></NavLink></li>
                    <li className='nav-item'><NavLink to=''>HELP</NavLink></li>
                    <li className='nav-item'><NavLink to=''>LOG IN</NavLink></li>
                    <li className='nav-itemU'><NavLink to=''>SIGN UP</NavLink></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}
