import React, { useState } from 'react'
import './New.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Blocks, ChevronLeft, ChevronRight, List } from 'lucide-react'
import BlocNew from '../../components/Blocs/BlocNew/BlocNew'
import { NavLink } from 'react-router-dom'

export default function New() {
    const dbNew = [
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',title:'andyFilm',time:'27 mai 2025',description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, dolorum, facere illum quibusdam dignissimos officia veritatis quaerat perspiciatis cum modi deserunt molestias minima. Molestias facilis ullam atque, quia tempore quibusdam.'},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',title:'andyFilm',time:'27 mai 2025',description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, dolorum, facere illum quibusdam dignissimos officia veritatis quaerat perspiciatis cum modi deserunt molestias minima. Molestias facilis ullam atque, quia tempore quibusdam.'},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',title:'andyFilm',time:'27 mai 2025',description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, dolorum, facere illum quibusdam dignissimos officia veritatis quaerat perspiciatis cum modi deserunt molestias minima. Molestias facilis ullam atque, quia tempore quibusdam.'},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',title:'andyFilm',time:'27 mai 2025',description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, dolorum, facere illum quibusdam dignissimos officia veritatis quaerat perspiciatis cum modi deserunt molestias minima. Molestias facilis ullam atque, quia tempore quibusdam.'},
        {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',title:'andyFilm',time:'27 mai 2025',description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, dolorum, facere illum quibusdam dignissimos officia veritatis quaerat perspiciatis cum modi deserunt molestias minima. Molestias facilis ullam atque, quia tempore quibusdam.'}
    ]
    const [inputV, setInputV] = useState<string>('');
    const HandleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputV(e.target.value);
    };
  return (
    <div className='New'>
        <Header align='center' smallTitle='blog listing' titre='blog listing - list'  />
        <main className='Celebritie__main'>
          <section className="Celebritie__section">
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
              <div className="Contenair__Section">
                <ul className="listeCelebritie">
                  {dbNew.map((el, index) => (
                    <li key={index}><BlocNew title={el.title} Date={el.time} image={el.image} describ={el.description} /></li>
                  ))}
                </ul>
              </div>
              <div className="row2New">
                <div className="boitei"><ChevronLeft /></div>
                <div className="boite1">1</div>
                <div className="boite2">2</div>
                <div className="boite3">3</div>
                <div className="boite4">4</div>
                <div className="boite5">5</div>
                <div className="boite6">6</div>
                <div className="boite7">7</div>
                <div className="boitee"><ChevronRight /></div>
              </div>
          </section>
          <aside className='New__aside'>
                  <h4>Search</h4>
                  <hr />
                  <input type="text" placeholder='enter Keywords' value={inputV} onChange={HandleChange} />
                  <h4>categories</h4>
                  <hr />
                  <ul className='categorieListeNew'>
                    <li><NavLink to='#'>Awards (50)</NavLink></li>
                    <li><NavLink to=''>Box office (38)</NavLink></li>
                    <li><NavLink to=''>Film reviews (72)</NavLink></li>
                    <li><NavLink to=''>News (45)</NavLink></li>
                    <li><NavLink to=''>Global (06)</NavLink></li>
                  </ul>
                  <h4>most popular</h4>
                  <hr />
                  <ul className='popularListeNew'>
                    <li><span className="rang">01</span><NavLink to=''>fsdfksfs jfsdjnjs fjsnsdl fsnsl</NavLink></li>
                    <li><span className="rang">01</span><NavLink to=''>fsdfksfs jfsdjnjs fjsnsdl fsnsl</NavLink></li>
                    <li><span className="rang">01</span><NavLink to=''>fsdfksfs jfsdjnjs fjsnsdl fsnsl</NavLink></li>
                  </ul>
                  <h4>tags</h4>
                  <hr />
                  <ul className='tagsListeNew'>
                    <li>black snack</li>
                    <li>batman</li>
                    <li>ce que pense les hommes</li>
                    <li>gaterie</li>
                    <li>yo la mif</li>
                    <li>chuck norris</li>
                  </ul>
                  <img src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/ads1.png" alt="" />
          </aside>
        </main>
        <Footer />
    </div>
  )
}
// le style des rows se trouve dans App.css