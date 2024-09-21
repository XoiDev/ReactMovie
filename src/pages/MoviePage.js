import React, { useEffect, useState } from 'react';

import useSWR from 'swr';
import MovieCard from '../components/movie/MovieCard';
import { fetcher } from '../config';
const MoviePage = () => {
    // const [movies , setMovies] = useState([])
    const { data } = useSWR(`https://api.themoviedb.org/3/movie/popular?api_key=46fc0be5658f5f38950ada201f57a245`, fetcher)
    // const movies = data?.results || [];

    const movies = data?.results || []
    // useEffect(()=>{
    //     setMovies(data)
    //     console.log(data.results);
    // },[data])
    console.log(movies);
    
    return (
        <div className='p-10 page-container'>
            <div className='flex mb-10'>
               <div className='flex-1'>  <input className='outline-none bg-slate-800 p-4 w-full h-[50px] text-white' type="text" placeholder='Enter Your Film...' /></div>
                <button className='p-3 text-white bg-primary'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

                </button>
            </div>
            
            <div className='grid grid-cols-4 gap-20'>
            {movies.length > 0 && movies.map((item)=>(
                <MovieCard key={item.id} item={item}></MovieCard>
            ))}
            </div>
        </div>
    );
};

export default MoviePage;