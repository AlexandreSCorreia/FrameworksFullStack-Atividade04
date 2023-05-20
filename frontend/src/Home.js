import React from 'react';

const Home = () =>{
  return (
    <section style={{
      width: '100vw',
      height: 'calc(100vh - 70px)',
      background: "url('https://i1.wp.com/www.animefeminist.com/wp-content/uploads/2022/10/eminence6.jpg?fit=1920%2C1080&ssl=1')",
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%'
    }}>
      <span style={{
        position: 'absolute',
        fontSize: '2.5rem',
        fontWeight: '600',
        left: '50%',
        bottom: '2rem',
        transform: 'translate(-50%, -50%)',
        color: '#FFFFFF',
        textTransform: 'uppercase',
        letterSpacing: '3px'

    }}>welcome</span>
    </section>
  );
}

export default Home;