import React from 'react';
import { useLocation } from 'react-router-dom';
import '../css/CompanyInfo.css';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import BusinessIcon from '@mui/icons-material/Business';
import Navbar from './Navbar';
import {useNavigate} from 'react-router-dom'; 


let isLogin = localStorage.getItem('isActive')?JSON.parse(localStorage.getItem('isActive')):false;
const CompanyInfo = (props) => {
    const arr = [1,2,3,4,5,6,7,8,9];
    const navigate = useNavigate();
    const company = useLocation().state;
    console.log(company);
    window.scrollTo(0, 0);
    const signinBtn =() => {navigate('/Login')};

    
  return (
    <div>
        <Navbar/>
        <div className='companyInfo' id='head'>
        <div className='header'>
            <span className='job'>{company.job}</span>
            <br />
            <span className='salary'><span className='companyName'><BusinessIcon/> {company.company} </span><MonetizationOnOutlinedIcon/> {company.salStart? (company.salStart*10)+",000 - "+(company.salEnd*10)+",000":"Undisclosed"}</span>
        </div>
        <div className='body'>
            <span className='skills'>Must Have Skills: {company.skills.map((skill)=><span>{skill},   </span>)} </span>
            <br /><br />
            <span className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellat provident accusantium tenetur distinctio iure? Ipsa earum voluptate, nobis labore corrupti ducimus sunt eaque nostrum. Quo neque delectus dicta aspernatur quam. Repellendus assumenda iure voluptatem eveniet repellat, vel optio suscipit minus tenetur fugiat doloribus enim velit ducimus, sequi nulla natus ea, porro in. Nostrum harum quos possimus illo rerum dolorum officia ipsa repellendus ratione debitis at itaque voluptas, commodi est odio provident porro nobis temporibus rem odit. Neque molestiae, a, aspernatur nobis praesentium consequatur voluptate eligendi repellendus voluptatum illo ex omnis dolorem expedita? Nam voluptate voluptates minus laudantium, possimus atque esse dolorum. Voluptate officia, minus reiciendis odit itaque, hic laboriosam officiis quasi velit nisi magnam beatae repellat eveniet. Nihil, praesentium.</span>
                <br /><br />
            <span className='otherInfo'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium iusto obcaecati id ipsam? Blanditiis, ipsum. Aut iste animi praesentium consequuntur perferendis tenetur sapiente est eius? Quibusdam consequuntur possimus ducimus. Ullam cumque quasi, aperiam minima quod aliquid libero deleniti, quo dolore sint modi! Omnis obcaecati nam sapiente harum eius fugiat in laboriosam voluptatem sint, labore reprehenderit tempore, quod totam, laborum rem enim incidunt nostrum qui autem? Incidunt explicabo atque maiores quibusdam a optio tempora laudantium facilis modi quo fugit iure vero ipsa autem harum ab quasi sapiente, repellat suscipit deserunt officia!</span>
                <br />
            <h3>Preferred Qualifications:</h3>
            <ul>
                {arr.map(()=><li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>)}
            </ul>
        </div>
        {isLogin?<button className='button'>Apply Now</button>:null}
        {!isLogin?<button className='button' onClick={()=>signinBtn()}>Sign in to Apply</button>:null}
    </div>
    </div>
  )
}

export default CompanyInfo