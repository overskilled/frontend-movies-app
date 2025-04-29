import React from 'react'
import './Community.css'
import Header from '../../components/Header/Header'
import { Blocks, ChevronDown, ChevronRight, List } from 'lucide-react'
import Footer from '../../components/Footer/Footer'
import BlocMovie from '../../components/Blocs/BlocMovie/BlocMovie'


export default function Community() {
    const dbMovie = [
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',title:'andyFilm',note:'6.7',description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, dolorum, facere illum quibusdam dignissimos officia veritatis quaerat perspiciatis cum modi deserunt molestias minima. Molestias facilis ullam atque, quia tempore quibusdam.'},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',title:'andyFilm',note:'6.7',description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, dolorum, facere illum quibusdam dignissimos officia veritatis quaerat perspiciatis cum modi deserunt molestias minima. Molestias facilis ullam atque, quia tempore quibusdam.'},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',title:'andyFilm',note:'6.7',description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, dolorum, facere illum quibusdam dignissimos officia veritatis quaerat perspiciatis cum modi deserunt molestias minima. Molestias facilis ullam atque, quia tempore quibusdam.'},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',title:'andyFilm',note:'6.7',description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, dolorum, facere illum quibusdam dignissimos officia veritatis quaerat perspiciatis cum modi deserunt molestias minima. Molestias facilis ullam atque, quia tempore quibusdam.'},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',title:'andyFilm',note:'6.7',description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, dolorum, facere illum quibusdam dignissimos officia veritatis quaerat perspiciatis cum modi deserunt molestias minima. Molestias facilis ullam atque, quia tempore quibusdam.'}
    ]
  return (
    <div className='Community'>
        <Header align='start' titre='Edward kennedy’s profile' smallTitle='Favorite movies'/>
        <main className='mainCom'>
            <aside className='asideCom'>
                <div className="asideComcontainer">
                <div className="profile">
                    <div className="profileImage">
                        <img src="/Pictures/19.jpeg" alt="" />
                    </div>
                    <button> change avatar</button>
                </div>
                <div className="detailC">
                    <div className="details">
                        account details
                        <p>Profile <ChevronDown /></p>
                        <p>Favorite movie</p>
                        <p>Rated movies</p>
                    </div>
                </div>
                <div className="deconectionC">
                    <div className="deconnectionCom">
                        others
                        <p>change password</p>
                        <p>log out</p>
                    </div>
                </div>
                </div>
            </aside>
            <section className='sectionCom'>
            <div className="row1">
                  <div className="p">
                    <p>Found <span>1,608 celebrities</span> in total</p>  
                    <p>Sort by:</p>
                  </div>
                  <select name="" id="">
                    <option value="dsd">dsdsdsdf</option>
                    <option value="dsd">dsdsdsdf</option>
                  </select>
                  <div className="Rowicone1">
                    <List />
                  </div>
                  <div className="Rowicone2">
                    <Blocks />
                  </div>
              </div> 
              <div className="favorieMovie">
                <ul>
                    {dbMovie.map((el,index) => (
                        <li key={index}><BlocMovie image={el.image} titre={el.title} note={el.note} description={el.description} /></li>
                    ))}
                </ul>
              </div>
              <div className="row2">
                <p className='p'>review per page:</p>
                <select name="" id="">
                  <option value="sdsds">dsdsd</option>
                  <option value="sdsds">dsdsd</option>
                </select>
                <p><span>page 1 of 6: </span> 1 2 3 4 5 <ChevronRight /></p>
              </div>
            </section>
        </main>
        <Footer />
    </div>
  )
}
