import React, { Fragment } from 'react';
import Banner from '../components/banner/Banner';
import MovieList from '../components/movie/MovieList';

const Homepage = () => {
    return (
        <Fragment>
            {/* Now Playing */}
            <section className="mb-20 movies-layout page-container">
                <h2 className="mb-10 text-2xl font-bold text-white capitalize">Now Playing</h2>
                <MovieList type="now_playing"></MovieList>
            </section>
            {/* Rating */}
            <section className="mb-10 movies-layout page-container">
                <h2 className="mb-5 text-2xl font-bold text-white capitalize ">Top rated movies</h2>
                <MovieList type="top_rated"></MovieList>
            </section>
            {/* Trending */}
            <section className="mb-10 movies-layout page-container">
                <h2 className="mb-5 text-2xl font-bold text-white capitalize ">Treding</h2>
                <MovieList type="popular"></MovieList>
            </section>
        </Fragment>
    );
};

export default Homepage;