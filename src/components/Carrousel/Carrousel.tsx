import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type MoviesProps = {
    movies: {
        image: string;
        title: string;
        lien: string;
        note: string;
    }[];
};

const CarouselPage = ({ movies }: MoviesProps) => {
    return (
        <Carousel>
            {movies.map((movie, index) => (
                <div key={index}>
                    <img src={movie.image} alt={movie.title} />
                    <p className="legend">{movie.title}</p>
                </div>
            ))}
        </Carousel>
    );
};
export default CarouselPage