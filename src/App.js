import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SearchJob from './components/SearchJob';
import JobList from './components/JobList';
import CompanyInfo from './components/CompanyInfo';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Validate from './components/Validate';
import ApplicantProfile from './components/ApplicantProfile';
import ApplicantTest from './components/ApplicantTest';
import Jobs from './components/Jobs';
import Navbar from './components/Navbar';



function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/TalentPool" element={<SearchJob/>}/>
            <Route path="/CompanyInfo" element={<CompanyInfo/>}/>
            <Route path="/JobList" element={<JobList/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Validate/>}/>
            <Route path="/About" element={<HomePage/>}/>
            <Route path="/ApplicantProfile" element={<ApplicantProfile/>}/>
            <Route path="/test" element={<ApplicantTest/>}/>
            <Route path="/PostAJob" element={<Jobs/>}/>
            <Route path="/Navbar" element={<Navbar/>}/>
           
        </Routes>
    </Router>
    
  );
}

export default App;
