import React, { useEffect } from 'react';
import './presentation.css'
import avatar from '../../assets/avatar1.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { HashLink } from 'react-router-hash-link';

//background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
// background: radial-gradient(circle, rgba(238,174,203,1) 0%, rgba(233,198,148,1) 100%);
// background-color: #EEDDD4;


function Presentation(props) {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id='main' className='hero' data-aos='fade-up'>
      <div id='main-content' className='hero-content'>
      <div>
        <h1 className='hero-content-title'> Hello I'm Kelsey Franken </h1>
      </div>
      <div>
        <p className='hero-content-description'>
        I'm a Software Engineer focused on Frontend Development. 
        I enjoy building beautfiul, seamless, intuitive and accessible interfaces and experiences.
        </p>
      </div>
      </div>
      <div id='avatar'>
        <img src={avatar} alt="Kelsey's Avatar">
        </img>

      </div>
    </section>
  );
}

export default Presentation;