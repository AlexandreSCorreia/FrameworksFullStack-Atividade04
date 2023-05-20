import React, { useState, useEffect } from 'react';

const News = () =>{

    const [data, setData] = useState('');

    useEffect(() => {
      fetch('http://localhost:5000/news')
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setData(json)
      });
    }, []);

  return (
    <section className="s-News"> 
      <div className="content">
        <div className="destaque">
          <ul>
              <h4>Featured News</h4>
              {data && data.principais.map((item) => (
              <li className="card">
                <img src={item.imagem} />
                <p>{item.titulo}</p>
              </li>
            ))}
          </ul>
        </div>
      
        <div className='pricipais'>
          <ul>
              <h4>Most Recent</h4>
              {data && data.recentes.map((item) => (
              <li className="card">
                <img src={item.imagem} />
                <p>{item.titulo}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default News;