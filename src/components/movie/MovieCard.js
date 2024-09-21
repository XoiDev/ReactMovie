import React from 'react';

const MovieCard = ({ ...props }) => {
    return (
        <div className="flex flex-col h-full p-3 text-white rounded-lg cursor-pointer movie-card bg-slate-800">
            <img src={`https://image.tmdb.org/t/p/original${props.images}`} alt="" className="w-full h-[250px] object-cover rounded-lg mb-3 " />
            <div className="flex flex-col flex-1">
                <h3 className="mb-3 text-xl">{props.title}</h3>
                <div className="flex items-center justify-between mb-3 text-sm opacity-50 ">
                    <span>{new Date(props.time).getFullYear()}</span>
                    <span>{props.rate} <i class="fa-solid fa-star text-[#ffea01]"></i> </span>
                </div>
                <button className="w-full font-bold rounded-lg bg-primary h-[40px] mt-auto">Watch Now</button>
            </div>
        </div>
    );
};

export default MovieCard;