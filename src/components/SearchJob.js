import React from 'react';
import '../css/SearchJob.css';
import ApplicantList from './ApplicantList';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import CardDetails from './CardDetails';

const SearchJob = () => {
  return (
   <>
   <Navbar/>
    <div  iv className='SearchJobBody'>
      <div className='searchTag'>
        <SearchBar/>
      </div>
      <div className='search'>
        <CardDetails/>
      </div>
      <div className='applicantList'>
        <ApplicantList/>
      </div>
    </div>
   </>
  )
}

export default SearchJob