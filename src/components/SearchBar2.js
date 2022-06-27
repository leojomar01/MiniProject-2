import React, { useState } from 'react';
import applicantRecord from '../JSON/applicantRecord';
import '../css/SearchBar.css';
import ApplicantList from './ApplicantList2';





let retrieveApplicantData;
retrieveApplicantData = localStorage.getItem('ApplicantRecord')?JSON.parse(localStorage.getItem('ApplicantRecord')): retrieveApplicantData = applicantRecord;

let data = retrieveApplicantData;
let filterSkill

const SearchBar = () => {
    const [wordEntered, setWordEntered] = useState("");
    let allSkills = [];
    let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});

console.log(uniqueChars);

    
    //push all skill in 1 array
    data.forEach((data) => {
        data.skills.filter((value)=>{
            return allSkills.push(value)
        })
    });

    //filter duplicates skills
    allSkills = allSkills.filter((c,index)=>{
        return allSkills.indexOf(c)===index;
    })
    
    //filter search words
    const handleFilter = (e)=>{
        const searchWord = e.target.value;
        setWordEntered(searchWord);
        filterSkill = allSkills.filter(value=>{
            return value.toLowerCase().includes(searchWord.toLowerCase());
        });
    }

    let searchData;
    const handleOnclick=(e)=>{
        searchData = e;
        alert(e);
    }

  return (
    <div className="searchBar">2
        <div className="title">Find your next great tech hire</div>
        <div className='searchInputs'>
            <input type="text" value={wordEntered} onChange={handleFilter} />
            <div className='result'>
                {wordEntered.length!==0 && filterSkill.map((data)=><p onClick={()=>{handleOnclick(data)}} className='searchList'>{data}</p>)}
            </div>
        </div>
        <ApplicantList search={searchData}/>
    </div>
  )
}

export default SearchBar