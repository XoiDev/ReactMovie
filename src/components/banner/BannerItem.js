import { Navigate } from "react-router-dom";
import useSWR from "swr";
import Button from "../button/Button";
import { apiKey, fetcher } from "../../config";

function BannerItems({item}) {
    const { title , poster_path, id } = item
    const { data } = useSWR(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`, fetcher)
    // console.log(data);
    if(!data) return;
    const {genres} = data
    console.log(genres);
    
    // console.log(data);
   
    return (
        <div  className="relative w-full h-full transition-all rounded-lg cursor-pointer hover:scale-95">
            <div className="absolute inset-0 overlay bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] "></div>
            <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="" className="object-cover w-full h-full rounded-lg" />
            <div className="absolute w-full text-white left-5 bottom-5">
                <h2 className="mb-5 text-3xl font-bold">{title}</h2>
                <div className="flex items-center mb-8 gap-x-3">
                    {genres && genres.map((item)=>(
                        <span className=" px-4 py-2 font-semibold border text-[20px] rounded-lg cursor-pointer text-white bg-secondary hover:bg-primary">{item.name}</span>
                    ))}
                </div>
                <Button onClick={()=>Navigate(`/movies/${id}`)}  className='max-w-[1100px] block !mx-auto' full={true}>Watch Now</Button>
            </div>
        </div>
    )
}

export default BannerItems;