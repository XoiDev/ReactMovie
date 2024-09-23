import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from 'swr';
import { fetcher } from '../../config';
import BannerItems from './BannerItem';


const Banner = () => {
    const { data } = useSWR(`https://api.themoviedb.org/3/movie/upcoming?api_key=46fc0be5658f5f38950ada201f57a245`, fetcher)
    // console.log(data);
    const movies = data?.results || [];
    console.log(movies);
    // const id = movies.slice(0,1).map((item)=>(
    //     item.id
    // ))
    // const IdConvert = Number(id[0])
    return (
        <section className="banner h-[500px] page-container mb-20">
            <Swiper>
                {movies.length > 0 && movies.map((item) => (
                    <SwiperSlide key={item.id}>
                        <BannerItems item={item}></BannerItems>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Banner;