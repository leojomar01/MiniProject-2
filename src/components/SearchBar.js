import React, { useState } from 'react';
import applicantRecord from '../JSON/applicantRecord';
import '../css/SearchBar.css';





let retrieveApplicantData;
retrieveApplicantData = localStorage.getItem('ApplicantRecord')?JSON.parse(localStorage.getItem('ApplicantRecord')): retrieveApplicantData = applicantRecord;

let data = retrieveApplicantData;
let filterSkill

const SearchBar = () => {
    const [wordEntered, setWordEntered] = useState("");
    const allSkills = [];

    

    data.forEach((data) => {
        data.skills.filter((value)=>{
            return allSkills.push(value)
        })
    });
    
    const handleFilter = (e)=>{
        const searchWord = e.target.value;
        setWordEntered(searchWord);
        filterSkill = allSkills.filter(value=>{
            return value.toLowerCase().includes(searchWord.toLowerCase());
        });
    }

    const handleOnclick=(e)=>{
        alert(e);
    }

  return (
    <div className="searchBar">
        <div className="title">Find your next great hire</div>
        <div className='searchInputs'>
            <input type="text" value={wordEntered} onChange={handleFilter} />
            <div className='result'>
                {wordEntered.length!==0 && filterSkill.map((data)=><p onClick={()=>{handleOnclick(data)}} className='searchList'>{data}</p>)}
            </div>
        </div>
    </div>
  )
}

export default SearchBar