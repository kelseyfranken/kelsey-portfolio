import React, { useEffect } from 'react';
import AOS from 'aos';
import './about.css';


function About(props) {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id='about' className='about-section' data-aos="fade-up">
      <h1>/ about me</h1>
      
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et lacinia ipsum. Proin et nisl vitae neque tempus varius. Morbi sit amet nisl in ipsum 
      posduere euismod quis id odio. Curabitur vitae turpis porttitor, commodo lacus ac, auctor arcu. Aliquam gravida posuere mi, sagittis pulvinar 
      odio pulvinar at. Morbi hendrerit velit quis elementum consectetur. Integer sed semper justo, nec mollis justo. 
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et lacinia ipsum. Proin et nisl vitae neque tempus varius. Morbi sit amet nisl in ipsum 
      posuere euismod quis id odio. Curabitur vitae turpis porttitor, commodo lacus ac, auctor arcu. Aliquam gravida posuere mi, sagittis pulvinar 
      odio pulvinar at. Morbi hendrerit velit quis elementum consectetur. Integer sed semper justo, nec mollis justo. 
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et lacinia ipsum. Proin et nisl vitae neque tempus varius. Morbi sit amet nisl in ipsum 
      posuere euismod quis id odio. Curabitur vitae turpis porttitor, commodo lacus ac, auctor arcu. Aliquam gravida posuere mi, sagittis pulvinar 
      odio pulvinar at. Morbi hendrerit velit quis elementum consectetur. Integer sed semper justo, nec mollis justo. 
      </p>

    </section>
  );
}

export default About;