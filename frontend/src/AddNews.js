import React, { useState } from 'react';

const AddNews = () =>{
    const [titulo, setTitulo] = useState('');
    const [imagem, setImagem] = useState('');
    const [tipo, setTipo] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      console.log({ titulo, imagem, tipo });
      const data = {
        titulo,
        imagem,
        tipo: parseInt(tipo)
      };

      fetch('http://localhost:5000/news', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(result => {
          console.log(result);
        
        })
        .catch(error => {
          console.error(error);
        });

        setTitulo('');
        setImagem('');
        setTipo('');
    };
  
    return (
      <section className="s-AddNews"> 
        <div className="content">
          <div className="title">
            <h2>Add News</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input">
              <label htmlFor="titulo">Título:</label>
              <input
                type="text"
                id="titulo"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>
          
            <div className="input">
              <label htmlFor="imagem">Imagem:</label>
              <input
                type="text"
                id="imagem"
                value={imagem}
                onChange={(e) => setImagem(e.target.value)}
              />
            </div>

            <div className="input">
              <label htmlFor="tipo">Tipo:</label>
              <select
                id="tipo"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              >
                <option value="">Selecione um tipo</option>
                <option value="0">Principais</option>
                <option value="1">Recentes</option>
              </select>
            </div>
          
            <button className='btn-success' type="submit">Enviar</button>
          </form>
        </div>
      </section>

    );
};


export default AddNews;