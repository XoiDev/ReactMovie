import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header className="flex items-center justify-center py-10 mb-10 text-[25px] transition-all text-white bg-secondary header gap-x-5">
        <NavLink to={"/"} className={({isActive})=> isActive ? "text-primary transition-all" : "hover:text-primary transition-all"}>Home</NavLink>
        <NavLink to={"/movies"} className={({isActive})=> isActive ? "text-primary transition-all" : "hover:text-primary transition-all"}>RandomFilm</NavLink>
        <NavLink to={"/feature"} className={({isActive})=> isActive ? "text-primary transition-all" : "hover:text-primary transition-all"}>Phim Lẻ</NavLink>
        <NavLink to={"/tvSerires"} className={({isActive})=> isActive ? "text-primary transition-all" : " hover:text-primary transition-all"}>Phim Bộ</NavLink>
      
       
      </header>
    );
};

export default Header;