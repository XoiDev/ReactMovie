import React, { useEffect, useState } from 'react';
import { SwiperSlide, Swiper } from "swiper/react"
import "swiper/scss"
import MovieCard from './MovieCard';
import useSWR from 'swr';
import { fetcher } from '../../config';
const MovieList = ({type}) => {
    const [movies,setMovie] = useState([])
    const { data, error } = useSWR(`https://api.themoviedb.org/3/movie/${type}?api_key=46fc0be5658f5f38950ada201f57a245`, fetcher)
    // console.log(data);
    
    useEffect(()=>{
        if(data){
            setMovie(data.results)
        }
    },[data])
    console.log(movies);

    
    
    return (
        <div className="movie-list">
            <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
            {movies.length > 0 && movies.map((item)=>(
                <SwiperSlide key={item.id}>
                <MovieCard title={item.title} rate={item.vote_average} time={item.release_date} images={item.poster_path}   ></MovieCard>
              </SwiperSlide>
            ))}
            </Swiper>
          </div>
    );
};

export default MovieList;