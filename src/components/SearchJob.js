import React from 'react';
import '../css/SearchJob.css';
import ApplicantList from './ApplicantList';
import SearchBar from './SearchBar';
import Header from './Header';

const SearchJob = () => {
  return (
   <>
   <Header/>
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