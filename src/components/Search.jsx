import { useState } from "react";


const Search = ({searchTerm, setSearchTerm, placeholder=''}) => {
 
  return (
    <>
        <label className="input w-full">
            <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            >
            <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
            >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
            </g>
            </svg>
            <input type="search" className="grow" placeholder={placeholder} onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm}  />
            <kbd className="kbd kbd-sm">⌘</kbd>
            <kbd className="kbd kbd-sm">K</kbd>
        </label>
    </>
  );
};

export default Search;
