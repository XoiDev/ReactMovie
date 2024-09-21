import { Fragment } from "react";
import MovieCard from "./components/movie/MovieCard";
import MovieList from "./components/movie/MovieList";
// import {NavLink} from "react-router-dom"


function App() {
  return (
    <Fragment>
      <header className="flex items-center justify-center py-10 mb-10 text-white header gap-x-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[500px] page-container mb-20">
        <div className="relative w-full h-full rounded-lg">
          <div className="absolute inset-0 overlay bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]"></div>
          <img src="https://cdn.tuoitre.vn/thumb_w/480/2022/7/25/marvel-1658738317583685598873.jpg" alt="" className="object-cover w-full h-full rounded-lg" />
          <div className="absolute w-full text-white left-5 bottom-5">
            <h2 className="mb-5 text-3xl font-bold">Avenger: Endgame</h2>
            <div className="flex items-center mb-8 gap-x-3">
              <span className="px-4 py-2 border border-white">Adventure</span>
              <span className="px-4 py-2 border border-white">Adventure</span>
              <span className="px-4 py-2 border border-white">Adventure</span>
            </div>
            <button className="px-6 py-3 font-medium text-white rounded-lg bg-primary">Watch Now</button>
          </div>
        </div>
      </section>

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
}

export default App;
