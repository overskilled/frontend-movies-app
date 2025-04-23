import { ChevronDown, ChevronRight, ChevronUp, Facebook, Instagram, Search, Twitter, Youtube } from 'lucide-react'
import React, { useState } from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'
import Title from '../../components/Title/Title'
import BlocPub from '../../components/Blocs/BlocPub/BlocPub'
import NavMenu from '../../components/NavMenu/NavMenu'
import BlocMini from '../../components/Blocs/BlocMini/BlocMini'
import BlocActor from '../../components/Blocs/BlocActor/BlocActor'
import BlocFilm from '../../components/Blocs/BlocFilm/BlocFilm'
import BlocPoint from '../../components/Blocs/Bloc3Points/BlocPoint'

export default function Home() {
    const [inputValue, setInputValue] = useState<string>('') ;
    const [email, setEmail] = useState<string>('') ;
    const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value) ;
        setEmail(e.target.value);
    } 
    const db =[
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',title:'The Last of Us',lien:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',note:'8.5'},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',title:'The Last of Us',lien:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',note:'8.5'},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',title:'The Last of Us',lien:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',note:'8.5'},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',title:'The Last of Us',lien:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',note:'8.5'},
        // {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',title:'The Last of Us',lien:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',note:'8.5'},
        // {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',title:'The Last of Us',lien:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',note:'8.5'}
    ];
    const dbActor =[
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',name:'The Last of Us',role:'actor'},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',name:'The Last of Us',role:'actor'},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',name:'The Last of Us',role:'actor'},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',name:'The Last of Us',role:'actor'}
    ];
    const dbFilm =[
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',name:'the last ship',time:'5:45:03s',},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',name:'the last ship',time:'5:45:03s',},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',name:'the last ship',time:'5:45:03s',},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',name:'the last ship',time:'5:45:03s',},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',name:'the last ship',time:'5:45:03s',},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',name:'the last ship',time:'5:45:03s',},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',name:'the last ship',time:'5:45:03s',},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',name:'the last ship',time:'5:45:03s',},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',name:'the last ship',time:'5:45:03s',},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',name:'the last ship',time:'5:45:03s',}
    ];
  return (
    <div className='Home'>
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
        <div className='SearchBar'>
            <select name="inputSelect" id="inputSelect">
                <option value="SHOW">TV SHOW</option>
                <option value="REIGIEUX">REIGIEUX</option>
                <option value="ROMANTIQUE">ROMANTIQUE</option>
                <option value="PERVERS">PERVERS</option>
                <option value="INTELECT">INTELECT</option>
            </select>
            <input type="text" placeholder='Enter your movies' className='search-input' value={inputValue} onChange={handlechange}/>
            <button className='search-button'><Search  color='white'/></button>
        </div>
        <div className="follow">
            <p>FOLLOW US:</p>
            <ul className='social-list'>
                <li><NavLink to=''><Facebook  color='white' width='20px'/></NavLink></li>
                <li><NavLink to=''><Twitter  color='white' width='20px'/></NavLink></li>
                <li><NavLink to=''><Youtube color='white' width='20px'/></NavLink></li>
                <li><NavLink to=''><Instagram color='white' width='20px'/></NavLink></li>
            </ul>
        </div>
        <div className="tendance">
            <ul className="Caroussel">
                {db.map((item, index) => (
                    <li key={index}><BlocPub image={item.image} title={item.title} lien={item.lien} note={item.note} /> </li>
                ))}
            </ul>
        </div>
        </header>
        <main className='mainHome1'>
            <section className="sections">
                <section className="section1">
                    <Title />
                    <NavMenu />
                    <ul className="listeSection1">
                        {db.map((item,index)=>(
                            <li key={index}><BlocMini image={item.image} title={item.title} lien={item.lien} note={item.note} /></li>
                        ))}
                    </ul>
                </section>
                <section className="section2">
                    <Title />
                    <NavMenu />
                    <ul className="listeSection2">
                        {db.map((item,index)=>(
                            <li key={index}><BlocMini image={item.image} title={item.title} lien={item.lien} note={item.note} /></li>
                        ))}
                    </ul>
                </section>
            </section>
            <aside className='Asides'>
                <div className="BlocImage">
                    <img src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/ads1.png" alt="image" />
                </div>
                <div className="presentCelebriti">
                    <h4>spotlight CELEBRITIES</h4>
                    <hr style={{width:'93%'}}/>
                </div>
                <ul className="listeCelebrities">
                    {dbActor.map((item,index)=>(
                        <li key={index}><BlocActor image={item.image} name={item.name} role={item.role} /></li>
                    ))}
                </ul>
                <p className='voirLesActeurs'><NavLink to=''>view all <ChevronRight /></NavLink></p>
            </aside>
        </main>
        <main className='mainHome2'>
            <Title />
            <section className="mainHome2Section1">
                <div className='viewfilm'>
                    <video src=""></video>
                </div>
                <div className="divList">   
                    <ChevronUp />
                    <ul className="listedefilm">
                        {dbFilm.map((el,index)=>(
                            <li key={index}><BlocFilm image={el.image} name={el.name} time={el.time} /></li>
                        ))}
                    </ul>
                    <ChevronDown />
                </div>
            </section>
            <section className="mainHome2section2">
                <div className="imageMainHome2section2">
                    <img src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/ads2.png" alt="image" />
                </div>
                <div className='textMainHome2section2'>
                    <h4>FIND IN FACEBOOK</h4>
                    <hr style={{width:'100%',background:'gray',marginTop:'5px'}}/>
                </div>
            </section>
            <section className="mainHome2section3">
                <div className="star">
                    <div className="imageStar">
                        <img src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/blog-it1.jpg" alt="dsd" />
                    </div>
                    <div className="infoStar">
                        <h3>name of star</h3>
                        <span>age de la star</span>
                        <p>description de la star Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempora, doloribus ad incidunt labore corrupti beatae esse ratione unde inventore.</p>
                    </div>
                </div>
                <div className="Points">
                    <div className="lesPoints">
                        <h4>tweet to us <ChevronRight /></h4>
                        <BlocPoint id='dsds' />    
                    </div>
                    <hr style={{width:'100%'}}/>
                </div>
            </section>
            <section className="mainHome2section4">
                <div className='lesPetitsTitres'>
                    <div className="petitTitre">
                        <h4><NavLink to=''> dsjhkajfn ajdfndjk aslds dlsnldasd;da</NavLink></h4>
                        <span>13 hours ago</span>
                    </div>
                    <div className="petitTitre">
                        <h4><NavLink to=''> dsjhkajfn ajdfndjk aslds dlsnldasd;da</NavLink></h4>
                        <span>13 hours ago</span>
                    </div>
                    <div className="petitTitre">
                        <h4><NavLink to=''> dsjhkajfn ajdfndjk aslds dlsnldasd;da</NavLink></h4>
                        <span>13 hours ago</span>
                    </div>
                    <div className="petitTitre">
                        <h4><NavLink to=''> dsjhkajfn ajdfndjk aslds dlsnldasd;da</NavLink></h4>
                        <span>13 hours ago</span>
                    </div>
                </div>
            </section>
        </main>
        <footer className="HomeFooter">
            <div className="FooterHome">
                <div className="colone1">
                    <div className='logofooter'><img src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/logo1.png" alt="logo" /></div>
                    <span>Grand moullin, DOUALA <br /> New York, NY 10001</span>
                    <p>Call us: (+237) 658341359</p>
                </div>
                <div className="colone2">
                    <h4>RESOURCES</h4>
                    <ul>
                        <li>About</li>
                        <li>Blockbuster</li>
                        <li>Contact us</li>
                        <li>Forums</li>
                        <li>Blog</li>
                        <li>Help Center</li>
                    </ul>
                </div>
                <div className="colone3">
                    <h4>Legal</h4>
                    <ul>
                        <li>Terms of Use</li>
                        <li>Privacy</li>
                        <li>Security</li>
                    </ul>
                </div>
                <div className="colone4">
                    <h4>Account</h4>
                    <ul>
                        <li>My Account</li>
                        <li>Watchlist</li>
                        <li>Collections</li>
                        <li>User guide</li>
                    </ul>
                </div>
                <div className="colone5">
                    <h4>Newsettler</h4>
                    <p>Subscribe to our newsletter system now
                    to get latest news from us.</p>
                    <input type="text" placeholder='Ente your email...' value={email} onChange={handlechange} />
                    <span>SUBSCRITE NOW <ChevronRight /></span>
                </div>
            </div>
            <hr style={{marginTop:'40px'}}/>
            <div className="end">
                <p>© fais par Andy</p>
            </div>
        </footer>
    </div>
  )
}
