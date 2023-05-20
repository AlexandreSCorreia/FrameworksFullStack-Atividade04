import React, { useState, useEffect } from 'react';

const About = () =>{
    const [data, setData] = useState('');

    useEffect(() => {
      fetch('http://localhost:5000/about')
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setData(json)
      });
    }, []);

  return (
    <section style={{
      width: '100%',
      maxWidth: '1250px',
      margin: '0 auto',
      textAlign: 'center',
      padding: '1.5rem 1rem'
    }}>
      <div style={{
        marginBottom: '1rem'
    }}>
        <h2 style={{
         textTransform: 'uppercase'
        }}>
          About
        </h2>
      </div>
      <div>
        <p style={{
          fontSize: '1.6rem',
          lineHeight: '150%',
          letterSpacing: '1px',
          textAlign: 'justify'
        }}>
          {data}
        </p>
      </div>
    </section>
  );
}

export default About;