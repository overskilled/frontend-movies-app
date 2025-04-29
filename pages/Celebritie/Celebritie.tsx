// import React from 'react'
import './Celebritie.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import BlocCelebritie from '../../components/Blocs/BlocCelebritie/BlocCelebritie'
import { Blocks, ChevronRight, List } from 'lucide-react'
import FormCbt from '../../components/Form/FormCbt'
import BlocActor from '../../components/Blocs/BlocActor/BlocActor'


export default function Celebritie() {
  const dbCelebritie = [
    {
      name: 'Tom Cruise',
      image:'../../Pictures/10.jpeg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibu dasda dsadkmkfna kmakdsmamfka akfmadkf avnfkdndksndasknd jnasdknfdkasdka fandknfaldk kasdskad kad askd ask dsakd askdasdmaskmgksniodhfuir frniajowijfo  iofjaidfnsdnrgj rw ssoifjqpojnnfjnd fdiojpejfqijionasdnasodkasdas adasiodns.',
      role: 'Actor'
    },
    {
      name: 'Tom Cruise',
      image:'../../Pictures/20.jpeg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus dasda dsadkmkfna kmakdsmamfka akfmadkf avnfkdndksndasknd jnasdknfdkasdka fandknfaldk kasdskad kad askd ask dsakd askdasdmaskmgksniodhfuir frniajowijfo  iofjaidfnsdnrgj rw ssoifjqpojnnfjnd fdiojpejfqijionasdnasodkasdas adasiodn.',
      role: 'Actor'
    },
    {
      name: 'Tom Cruise',
      image:'../../Pictures/10.jpeg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibu dasda dsadkmkfna kmakdsmamfka akfmadkf avnfkdndksndasknd jnasdknfdkasdka fandknfaldk kasdskad kad askd ask dsakd askdasdmaskmgksniodhfuir frniajowijfo  iofjaidfnsdnrgj rw ssoifjqpojnnfjnd fdiojpejfqijionasdnasodkasdas adasiodns.',
      role: 'Actor'
    },
    {
      name: 'Tom Cruise',
      image:'../../Pictures/10.jpeg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibu dasda dsadkmkfna kmakdsmamfka akfmadkf avnfkdndksndasknd jnasdknfdkasdka fandknfaldk kasdskad kad askd ask dsakd askdasdmaskmgksniodhfuir frniajowijfo  iofjaidfnsdnrgj rw ssoifjqpojnnfjnd fdiojpejfqijionasdnasodkasdas adasiodns.',
      role: 'Actor'
    },
    {
      name: 'Tom Cruise',
      image:'../../Pictures/10.jpeg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibu dasda dsadkmkfna kmakdsmamfka akfmadkf avnfkdndksndasknd jnasdknfdkasdka fandknfaldk kasdskad kad askd ask dsakd askdasdmaskmgksniodhfuir frniajowijfo  iofjaidfnsdnrgj rw ssoifjqpojnnfjnd fdiojpejfqijionasdnasodkasdas adasiodns.',
      role: 'Actor'
    },
    {
      name: 'Tom Cruise',
      image:'../../Pictures/1.jpeg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus dasda dsadkmkfna kmakdsmamfka akfmadkf avnfkdndksndasknd jnasdknfdkasdka fandknfaldk kasdskad kad askd ask dsakd askdasdmaskmgksniodhfuir frniajowijfo  iofjaidfnsdnrgj rw ssoifjqpojnnfjnd fdiojpejfqijionasdnasodkasdas adasiodn.',
      role: 'Actor'
    },
    {
      name: 'Tom Cruise',
      image:'../../Pictures/10.jpeg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibu dasda dsadkmkfna kmakdsmamfka akfmadkf avnfkdndksndasknd jnasdknfdkasdka fandknfaldk kasdskad kad askd ask dsakd askdasdmaskmgksniodhfuir frniajowijfo  iofjaidfnsdnrgj rw ssoifjqpojnnfjnd fdiojpejfqijionasdnasodkasdas adasiodns.',
      role: 'Actor'
    },
  ];
  const dbActor =[
    {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',name:'The Last of Us',role:'actor'},
    {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',name:'The Last of Us',role:'actor'},
    {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',name:'The Last of Us',role:'actor'},
    {image:'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg',name:'The Last of Us',role:'actor'}
];
  return (
    <div className='Celebritie'>
        <Header align='center' titre='celebrity listing - list' smallTitle='celebrity listing' />
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
                  {dbCelebritie.map((el, index) => (
                    <li key={index}><BlocCelebritie name={el.name} image={el.image} description={el.description} role={el.role} /></li>
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
          <aside className='Celebritie__aside'>
                  <h4>Search Actor</h4>
                  <hr />
                  <FormCbt />
                  <img src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/ads1.png" alt="" />
                  <h4>featured celebrity</h4>
                  <hr />
                  <ul>
                    {dbActor.map((el,index) => (
                      <li key={index}><BlocActor image={el.image} name={el.name} role={el.role} /></li>
                    ))}
                  </ul>
          </aside>
        </main>
        <Footer />
    </div>
  )
}
