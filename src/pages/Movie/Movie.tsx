// import React from 'react'
import { Blocks, ChevronDown, ChevronRight, List } from 'lucide-react'
import './Movie.css'
import BlocMovie from '../../components/Blocs/BlocMovie/BlocMovie';
// import BlocActor from '../../components/Blocs/BlocActor/BlocActor';
import Form from '../../components/Form/Form';
import BlocPoint from '../../components/Blocs/Bloc3Points/BlocPoint';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
// import { useMovie } from '../../hooks/useMovie';
// import { useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { getAllMovies, Movies, PaginatedResponse } from '../../api/endpoints/movie';


export default function Movie() {
    const dbMovie = [
        { image: 'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg', title: 'andyFilm', note: '6.7', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, dolorum, facere illum quibusdam dignissimos officia veritatis quaerat perspiciatis cum modi deserunt molestias minima. Molestias facilis ullam atque, quia tempore quibusdam.' },
        { image: 'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg', title: 'andyFilm', note: '6.7', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, dolorum, facere illum quibusdam dignissimos officia veritatis quaerat perspiciatis cum modi deserunt molestias minima. Molestias facilis ullam atque, quia tempore quibusdam.' },
        { image: 'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg', title: 'andyFilm', note: '6.7', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, dolorum, facere illum quibusdam dignissimos officia veritatis quaerat perspiciatis cum modi deserunt molestias minima. Molestias facilis ullam atque, quia tempore quibusdam.' },
        { image: 'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg', title: 'andyFilm', note: '6.7', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, dolorum, facere illum quibusdam dignissimos officia veritatis quaerat perspiciatis cum modi deserunt molestias minima. Molestias facilis ullam atque, quia tempore quibusdam.' },
        { image: 'http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg', title: 'andyFilm', note: '6.7', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, dolorum, facere illum quibusdam dignissimos officia veritatis quaerat perspiciatis cum modi deserunt molestias minima. Molestias facilis ullam atque, quia tempore quibusdam.' }
    ]

    // const [page, setPage] = useState(1)
    // const [limit, setLimit] = useState(10)

    // const { data, isLoading, error } = useQuery<PaginatedResponse<any>>({
    //     queryKey: ['movies', { page, limit }],
    //     queryFn: () => getAllMovies({ page, limit })
    // })

    // if (isLoading) return <p>Loading movies...</p>
    // if (error) return <p>Error loading movies</p>

    // console.log("Fetched movies: ", data)


    return (
        <div className='Movie'>
            <Header align='center' titre='Movie listing-list' smallTitle='movie listing' />
            <main className='mainMovie'>
                <section className='sectionMovie'>
                    <div className="row1">
                        <p className='p'>Found <span>1,608</span> movies in total Sort by:</p>
                        <select name="" id="">
                            <option value="raiting">ratislotng Descending</option>
                            <option value="popularity">Popularity Descending</option>
                        </select>
                        <div className="Rowicone1">
                            <List color='white' width='20px' />
                        </div>
                        <div className="Rowicone2">
                            <Blocks color='white' width='20px' />
                        </div>
                    </div>
                    <div className="FilmMovie">
                        <ul>
                            {dbMovie.map((el, index) => (
                                <li key={index}><BlocMovie titre={el.title} description={el.description} note={el.note} image={el.image} /> </li>
                            ))}
                        </ul>
                    </div>
                    <div className="barMenu2">
                        <p>Movie per page:</p>
                        <p><span>10 pages</span><ChevronDown /></p>
                        <p> page 1 of 2:  <span>1  2  <ChevronRight /></span></p>
                    </div>
                </section>
                <aside className='asideMovie'>
                    <div className="PartieForm">
                        <h4>search for movie</h4>
                        <hr style={{ width: '100%', marginBottom: '50px' }} />
                        <Form />
                    </div>
                    <div className="BlocImage">
                        <img src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/ads1.png" alt="image" />
                    </div>
                    <div className='lienFacebook'>
                        <h4>FIND IN FACEBOOK</h4>
                        <hr style={{ width: '100%', background: 'gray', marginTop: '5px' }} />
                    </div>
                    <div className="lienSuivre">
                        <div className="lesPoints">
                            <h4><span>tweet to us</span> <ChevronRight /></h4>
                            <BlocPoint id='dsds' />
                        </div>
                        <hr style={{ width: '100%', zIndex: '2' }} />
                    </div>
                </aside>
            </main>
            <Footer />
        </div>
    )
}
