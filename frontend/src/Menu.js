import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () =>{
  return (
    <nav style={{
      width: '100%',
      height: '70px',
      backgroundColor: '#333',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem'
    }}>
        <ul style={{
          display: 'flex'
        }}>
          <li 
            style={{
              marginRight: '1rem'
            }}>
            <Link 
              to="/" 
              style={{
                 color: '#fff'
                ,transition: 'color 0.2s ease-in-out'
                ,textTransform: 'uppercase'
                ,fontWeight: 'bold'
              }}>
                Home
            </Link>
          </li>
          <li 
            style={{
              marginRight: '1rem'
            }}>
            <Link 
              to="/news" 
              style={{
                 color: '#fff'
                ,transition: 'color 0.2s ease-in-out'
                ,textTransform: 'uppercase'
                ,fontWeight: 'bold'
              }}>
                News
            </Link>
          </li>
          <li 
            style={{
              marginRight: '1rem'
            }}>
            <Link 
              to="/about" 
              style={
                {color: '#fff'
                ,transition: 'color 0.2s ease-in-out'
                ,textTransform: 'uppercase'
                ,fontWeight: 'bold'
              }}>
                About
            </Link>
          </li>
          <li>
            <Link 
              to="/AddNews" 
              style={
                {color: '#fff'
                ,transition: 'color 0.2s ease-in-out'
                ,textTransform: 'uppercase'
                ,fontWeight: 'bold'
              }}>
                AddNews
            </Link>
          </li>
        </ul>
      </nav>
  );
}

export default Menu;