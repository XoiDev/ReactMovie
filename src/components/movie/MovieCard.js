import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';

const MovieCard = ({ item }) => {
    const { title , vote_average , poster_path, release_date, id  } = item
    const navigate = useNavigate()
    // console.log(navigate);
    
    return (
        <div onClick={()=>navigate(`/movies/${id}`)} className="flex flex-col h-full p-3 text-white transition-all rounded-lg cursor-pointer hover:scale-90 movie-card bg-slate-800">
            <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="" className="w-full h-[250px] object-cover rounded-lg mb-3 " />
            <div className="flex flex-col flex-1">
                <h3 className="mb-3 text-xl">{title}</h3>
                <div className="flex items-center justify-between mb-3 text-sm opacity-50 ">
                    <span>{new Date(release_date).getFullYear()}</span>
                    <span>{vote_average} <i className="fa-solid fa-star text-[#ffea01]"></i> </span>
                </div>
                <Button bgColor='primary'  onClick={()=>navigate(`/movies/${id}`)} >Watch now</Button>
                {/* <button onClick={()=>navigate(`/movies/${id}`)} className="w-full font-bold rounded-lg bg-primary h-[40px] mt-auto">Watch Now</button> */}
              
            </div>
        </div>
    );
};

export default MovieCard;