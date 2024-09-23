import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import MovieCard from '../components/movie/MovieCard';
import { fetcher } from '../config';
import useDebounce from '../hooks/useDebounce';
import ReactPaginate from 'react-paginate';
const MoviePage = () => {

    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [nextPage, setNextPage] = useState(1);
    const itemsPerPage = 20;
    const [filter, setFilter] = useState('')
    const [url, setUrl] = useState(`https://api.themoviedb.org/3/movie/popular?api_key=46fc0be5658f5f38950ada201f57a245&page=${nextPage}`)
    const deBounce = useDebounce(filter, 1000)
    const handleSearch = (e) => {
        setFilter(e.target.value)
        console.log(e.target.value);

    }
    const { data, isLoading, error } = useSWR(`${url}`, fetcher)
    useEffect(() => {
        if (!data || !data.total_results) return ;
        setPageCount(Math.ceil(data.total_results / itemsPerPage));
      }, [data, itemOffset]);
      const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.total_results;
        setItemOffset(newOffset);
        setNextPage(event.selected + 1);
      };
      useEffect(() => {
        if (deBounce) {
          setUrl(`https://api.themoviedb.org/3/search/movie?query=${filter}&api_key=46fc0be5658f5f38950ada201f57a245&page=${nextPage}`);
        } else {
          setUrl(`https://api.themoviedb.org/3/movie/popular?api_key=46fc0be5658f5f38950ada201f57a245&page=${nextPage}`);
        }
      }, [deBounce, nextPage]);
      const movies = data?.results || [];

    // const { page, total_pages } = data
    return (
        <div className='p-10 page-container'>
            <div className='flex mb-10'>
                <div className='flex-1'>  <input onChange={handleSearch}  className='outline-none bg-slate-800 p-4 w-full h-[50px] text-white' type="text" placeholder='Enter Your Film...' /></div>
                <button className='p-3 text-white bg-primary'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </div>

            {isLoading && <div className='w-10 h-10 mx-auto border-4 border-t-2 rounded-full border-primary border-t-transparent animate-spin'></div>}
            <div className='grid grid-cols-4 gap-20'>
                {movies.length > 0 && movies.map((item, index) => (
                    <MovieCard key={index} item={item}></MovieCard>
                ))}
            </div>
            {/* loadmore */}
            <div className='flex items-center justify-center hidden text-white mt-14'>
                <span onClick={() => {
                    if (nextPage >= 2) {
                        setNextPage(nextPage - 1)
                    }
                }} className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </span>

                {/* {new Array(pageCounts).fill().map((item, index) => (
                    <span onClick={() => { setNextPage(index + 1) }} className='px-2 py-1 mx-2 leading-none cursor-pointer bg-slate-700'>{index + 1}</span>
                ))} */}

                <span onClick={() => {
                    setNextPage(nextPage + 1)
                }} className='cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
            </div>
            <div className="mt-10 text-white">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    forcePage={nextPage - 1}
                    className="pagination"
                />
            </div>
        </div>
    );
};

export default MoviePage;