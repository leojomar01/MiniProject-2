import React from 'react';
import '../css/ApplicantProfile.css'
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';


const ApplicantProfile = () => {
    const applicant = useLocation().state;
    window.scrollTo(0,0,);

  return (
    <>
        <Navbar/>
        <div className='ApplicantProfile'>
            <div className='container'>
                <span className='title'>PROFILE</span>
                <div className='header'>
                    <span className='profile'>
                        {(applicant.gender==="F")? <img src="../images/f.jpg" alt=""/>:<img src="../images/m.png" alt=""/>}
                    </span>
                    <span className='name'>{applicant.fname} {applicant.lname}</span>
                    <span className='email'>{applicant.email}</span>
                    <span className='bio'>{applicant.experience} with {applicant.yearsOfExp}years of experience</span>
                    <span className='skills'>{applicant.skills.map((skill)=><span>{skill}</span>)}</span>
                    <span className='info'>other info: <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nobis magnam voluptatibus qui tenetur obcaecati maxime a, non rerum consectetur.</span>

                </div>
                <div className='body'>
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero reiciendis officiis unde voluptas accusantium, molestiae inventore a assumenda et eius nostrum error rem, possimus sapiente obcaecati eaque iste distinctio earum accusamus doloremque fuga architecto. Consequuntur distinctio quo nesciunt ducimus vero excepturi quos. Iusto nobis est voluptates saepe dolorum ad quia quisquam repellat iste? Labore deleniti porro laboriosam mollitia exercitationem reiciendis eligendi repellat, ullam eius dolorem molestiae, delectus at sequi facilis!</span>
                    <br /><br />
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero reiciendis officiis unde voluptas accusantium, molestiae inventore a assumenda et eius nostrum error rem, possimus sapiente obcaecati eaque iste distinctio earum accusamus doloremque fuga architecto. Consequuntur distinctio quo nesciunt ducimus vero excepturi quos. Iusto nobis est voluptates saepe dolorum ad quia quisquam repellat iste? Labore deleniti porro laboriosam mollitia exercitationem reiciendis eligendi repellat, ullam eius dolorem molestiae, delectus at sequi facilis!</span>
                    <br /><br />
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero reiciendis officiis unde voluptas accusantium, molestiae inventore a assumenda et eius nostrum error rem, possimus sapiente obcaecati eaque iste distinctio earum accusamus doloremque fuga architecto. Consequuntur distinctio quo nesciunt ducimus vero excepturi quos. Iusto nobis est voluptates saepe dolorum ad quia quisquam repellat iste? Labore deleniti porro laboriosam mollitia exercitationem reiciendis eligendi repellat, ullam eius dolorem molestiae, delectus at sequi facilis!</span>
                    <br /><br />
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero reiciendis officiis unde voluptas accusantium, molestiae inventore a assumenda et eius nostrum error rem, possimus sapiente obcaecati eaque iste distinctio earum accusamus doloremque fuga architecto. Consequuntur distinctio quo nesciunt ducimus vero excepturi quos. Iusto nobis est voluptates saepe dolorum ad quia quisquam repellat iste? Labore deleniti porro laboriosam mollitia exercitationem reiciendis eligendi repellat, ullam eius dolorem molestiae, delectus at sequi facilis!</span>
                </div>

            </div>

        </div>
    </>
  )
}

export default ApplicantProfile