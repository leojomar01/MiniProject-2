import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SearchJob from './components/SearchJob';
import ApplicantList from './components/ApplicantList';
import SearchBar from './components/SearchBar';
import Applicant from './components/Applicant';
import JobList from './components/JobList';
import CompanyInfo from './components/CompanyInfo';
import Home from './components/Home';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Validate from './components/Validate';


function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/SearchJob" element={<SearchJob/>}/>
            <Route path="/CompanyInfo" element={<CompanyInfo/>}/>
            <Route path="/JobList" element={<JobList/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Validate" element={<Validate/>}/>
           
        </Routes>
    </Router>
    
  );
}

export default App;
