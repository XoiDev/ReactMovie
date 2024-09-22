import React from 'react';
import { useParams } from 'react-router-dom';
import { SwiperSlide, Swiper } from 'swiper/react';
import useSWR from 'swr';
import MovieCard from '../components/movie/MovieCard';
import { apiKey, fetcher } from '../config';

// https://api.themoviedb.org/3/movie/{movie_id}?api=api_key
const MovieDetailsPage = () => {
    // const [movies, setMovies] = useState([])
    const { Idmovies } = useParams()
    const { data } = useSWR(`https://api.themoviedb.org/3/movie/${Idmovies}?api_key=${apiKey}`, fetcher)
    if(!data) return
    const movies = data || []
    // console.log(movies);
    const { backdrop_path, poster_path, title, genres,
        overview } = movies



    return (
        <div className='py-10'>
            <div className='w-full h-[600px] relative'>
                <div className='inset-0 bg-black absoulute bg-opacity-70'></div>
                <div className='w-full h-full bg-no-repeat bg-cover'
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`
                    }}></div>
            </div>
            <div className='w-full h-[400px] max-w-[800px] mx-auto -translate-y-2/4'>
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="" className='object-cover w-full h-full rounded-lg' />
                <h1 className='text-5xl font-extrabold text-center text-white mt-[58px]'>{title}</h1>
            </div>
            <div className='flex items-center justify-center'>
                {genres && genres.length > 0 && genres.map((item) => (
                    <span key={item.id} className='px-4 py-2 mx-6 font-bold border border-purple-500 border-solid cursor-pointer text-primary rounded-3xl hover:text-purple-600 hover:border-primary'>{item.name}</span>
                ))}
            </div>
            <div className='flex items-center   mt-[58px]'>
                <p className='text-white text-[16px] font-normal leading-relaxed max-w-[600px] mx-auto' style={{ textIndent: '1rem' }}>{overview}</p>
            </div>

            <MovieCredit></MovieCredit>
            <MovieVideos></MovieVideos>
            <MovieSimilar></MovieSimilar>
        </div>


    );
};

function MovieCredit() {
    // https://api.themoviedb.org/3/movie/{movie_id}/credits
    const { Idmovies } = useParams()
    const { data } = useSWR(`https://api.themoviedb.org/3/movie/${Idmovies}/credits?api_key=${apiKey}`, fetcher)
    // console.log(data);
    if(!data) return
    const { cast } = data

    return (
        <div className='mt-[58px] mx-auto max-w-[1280px]'
        >
            <h1 className='font-extrabold text-center text-primary text-[50px]'>Cast</h1>
            <div className='grid grid-cols-4 gap-5'>
                {cast.length > 0 && cast.slice(0, 4).map((item) => (
                    <div key={item.id} className='cursor-pointer hover:scale-90 hover:!text-primary'>
                        <img src={`https://image.tmdb.org/t/p/original${item.profile_path
                            }`} className='w-full rounded-lg h-[400px] object-cover' alt="" />
                        <h3 className='font-semibold text-white  text-[20px] text-center'>{item.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

function MovieVideos() {
    const { Idmovies } = useParams()
    const { data } = useSWR(`https://api.themoviedb.org/3/movie/${Idmovies}/videos?api_key=${apiKey}`, fetcher)
    // console.log(data);
    if(!data) return
    const { results } = data
    return (
        <div>
            <h1 className='text-center text-primary mt-[58px] text-[50px] font-semibold'>Trailer</h1>
            {results.length > 0 && results.slice(0,1).map((item)=>(
                <div key={item.id} className='max-w-[1280px] mx-auto'>
                    <iframe width="1236" height="695" src={`https://www.youtube.com/embed/${item.key}`}  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            ))}
            
        </div>
    )
}
function MovieSimilar() {
    const { Idmovies } = useParams()
    const { data } = useSWR(`https://api.themoviedb.org/3/movie/${Idmovies}/similar?api_key=${apiKey}`, fetcher)
    console.log(data);
    if(!data) return
    const { results } = data
    return(
        <div className=''>
            <h1 className='text-center text-primary mt-[58px] text-[50px] font-semibold'>Similar Film</h1>
            <div className="movie-list mx-auto !max-w-[1450px]">
            <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
            {results.length > 0 && results.map((item)=>(
                <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            ))}
            </Swiper>
          </div>
        </div>
    )
}

export default MovieDetailsPage;