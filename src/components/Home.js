import React from 'react'


const Home = () => {
  return (
    <>
      <section className='home'>
        <div className="container-home grid">
            <div className="left">
                <div className="img">
                    <img src="../assets/image-2.jpg" alt="" />
                </div>
            </div>
            <div className="right topMargin">
                <h4>We are here to help you <br />
                 find your dream job</h4>
                <div className="socialIcon">
                    <i className='fab fa-facebook-f facebook'></i>
                    <i className='fab fa-instagram instagram'></i>
                    <i className='fab fa-twitter twitter'></i>
                    <i className='fab fa-youtube youtube'></i>
                    <i className='fab fa-pinterest pinterest'></i>
                    <i className='fab fa-dribble dribble'></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rerum perspiciatis ipsam architecto! Autem ipsam ipsum dolorum, voluptate laudantium commodi adipisci incidunt provident maxime quae, ratione nihil culpa tenetur non!</p>
                <button className='primary-btn'>Contact us</button>
            </div>
        </div>
      </section>

    </>
  )
}

export default Home
