import React from 'react';
import '../css/SearchJob.css';
import ApplicantList from './ApplicantList';
import SearchBar from './SearchBar';
import Navbar from './Navbar';

const SearchJob = () => {
  return (
   <>
   <Navbar/>
    <div  iv className='SearchJobBody'>
      <div className='searchTag'>
        <SearchBar/>
      </div>
      <div className='search'>
        
      </div>
      <div className='applicantList'>
        <ApplicantList/>
      </div>
    </div>
   </>
  )
}

export default SearchJob