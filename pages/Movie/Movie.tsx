import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { Blocks, ChevronDown,ChevronRight,List,Search } from 'lucide-react'
import './Movie.css'
import BlocMovie from '../../components/Blocs/BlocMovie/BlocMovie';
import BlocActor from '../../components/Blocs/BlocActor/BlocActor';
import Form from '../../components/Form/Form';
import BlocPoint from '../../components/Blocs/Bloc3Points/BlocPoint';


export default function Movie() {
    const [inputValue, setInputValue] = useState<string>('') ;
    const [email, setEmail] = useState<string>('') ;
    const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value) ;
        setEmail(e.target.value);
    } 
    const dbActor =[
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',name:'The Last of Us',role:'actor'},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',name:'The Last of Us',role:'actor'},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',name:'The Last of Us',role:'actor'},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',name:'The Last of Us',role:'actor'}
    ];

    const dbMovie = [
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',title:'andyFilm',note:'6.7',description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, dolorum, facere illum quibusdam dignissimos officia veritatis quaerat perspiciatis cum modi deserunt molestias minima. Molestias facilis ullam atque, quia tempore quibusdam.'},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',title:'andyFilm',note:'6.7',description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, dolorum, facere illum quibusdam dignissimos officia veritatis quaerat perspiciatis cum modi deserunt molestias minima. Molestias facilis ullam atque, quia tempore quibusdam.'},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',title:'andyFilm',note:'6.7',description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, dolorum, facere illum quibusdam dignissimos officia veritatis quaerat perspiciatis cum modi deserunt molestias minima. Molestias facilis ullam atque, quia tempore quibusdam.'},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',title:'andyFilm',note:'6.7',description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, dolorum, facere illum quibusdam dignissimos officia veritatis quaerat perspiciatis cum modi deserunt molestias minima. Molestias facilis ullam atque, quia tempore quibusdam.'},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',title:'andyFilm',note:'6.7',description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, dolorum, facere illum quibusdam dignissimos officia veritatis quaerat perspiciatis cum modi deserunt molestias minima. Molestias facilis ullam atque, quia tempore quibusdam.'}
    ]
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
            <div className="Bar">
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
            </div>
            <div className="MovieTitle">
                <h1>Movie listing-list</h1>
                <p><NavLink to=''>Home</NavLink> <ChevronRight  style={{margin:'0px 10px',width:'15 px'}}/> movie listing</p>
            </div>
        </header>
        <main className='mainMovie'>
            <section className='sectionMovie'>
            <div className="BarMenu">
                <p><span>Found <strong>1,608</strong> movies in total</span><span>Sort by:</span></p>
                <select name="" id="">
                    <option value="raiting">ratislotng Descending</option>
                    <option value="popularity">Popularity Descending</option>
                </select> 
                <div className="liststyle">
                    <List color='white' width='20px'/>
                </div>
                <div className="blocstyle">
                    <Blocks color='white' width='20px'/>
                </div>
            </div>
            <div className="FilmMovie">
                <ul>
                    {dbMovie.map((el,index) => (
                        <li key={index}><BlocMovie titre={el.title} description={el.description} note={el.note} image={el.image} /> </li>
                    ))}
                </ul>
            </div>
            </section>
            <aside className='asideMovie'>
                <Form />
                <div className="BlocImage">
                    <img src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/ads1.png" alt="image" />
                </div>
                <div className='lienFacebook'>
                    <h4>FIND IN FACEBOOK</h4>
                    <hr style={{width:'100%',background:'gray',marginTop:'5px'}}/>
                </div>
                <div className="lienSuivre">
                    <div className="lesPoints">
                        <h4><span>tweet to us</span> <ChevronRight /></h4>
                        <BlocPoint id='dsds' />    
                    </div>
                    <hr style={{width:'100%'}}/>
                </div>
            </aside>
        </main>
          <footer className="MovieFooter">
            <div className="MovieFooterContainer">
                <div className="FooterMovie">
                    <ul className="footerListe">
                        <li>
                            <div className="colone1">
                                <div className='logofooter'><img src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/logo1.png" alt="logo" /></div>
                                <span>Grand moullin, DOUALA <br /> New York, NY 10001</span>
                                <p>Call us: (+237) 658341359</p>
                            </div>
                        </li>
                        <li>
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
                        </li>
                        <li>
                            <div className="colone3">
                                <h4>Legal</h4>
                                <ul>
                                    <li>Terms of Use</li>
                                    <li>Privacy</li>
                                    <li>Security</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="colone4">
                                <h4>Account</h4>
                                <ul>
                                    <li>My Account</li>
                                    <li>Watchlist</li>
                                    <li>Collections</li>
                                    <li>User guide</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="colone5">
                                <h4>Newsettler</h4>
                                <span>Subscribe to our newsletter system now to get latest news from us.</span>
                                <input type="text" placeholder='Ente your email...' value={email} onChange={handlechange} />
                                <p>SUBSCRITE NOW <ChevronRight /></p>
                            </div>
                        </li>
                    </ul>
                </div>
                <hr style={{width:'100%',marginBottom:'10px'}}/>
                <div className="end">
                    <p>© fais par Andy</p>
                </div>
            </div>
        </footer>
    </div>
  )
}
