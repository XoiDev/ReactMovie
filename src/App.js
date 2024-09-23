import { Fragment, lazy , Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { } from "swiper/modules";
import "swiper/scss";
import Banner from "./components/banner/Banner";
import Main from "./components/layout/Main";

// import {NavLink} from "react-router-dom"

const Homepage = lazy(()=> import("./pages/Homepage"))
const MovieDetailsPage = lazy(()=> import("./pages/MovieDetailsPage"))
const MoviePage = lazy(()=> import("./pages/MoviePage"))
const MovieFeature = lazy(()=> import("./pages/MovieFeature"))
const MovieSeries = lazy(()=> import("./pages/MovieSeries"))
function App() {
  return (
    <Fragment>
      <Suspense>
      <Routes>
        <Route element={<Main></Main>}>
            <Route path="/" element={
              <>
                <Banner></Banner>
                <Homepage></Homepage>
              </>}>
            </Route>
            <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
            <Route path="/movies/:Idmovies" element={<MovieDetailsPage></MovieDetailsPage>}></Route>  
            <Route path="/feature" element={<MovieFeature></MovieFeature>}></Route>
            <Route path="/tvSerires" element={<MovieSeries></MovieSeries>}></Route>
        </Route>
        
      </Routes>


      </Suspense>
     
    </Fragment>
  );
}

export default App;
