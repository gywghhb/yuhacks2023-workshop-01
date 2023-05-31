import React, { Component } from 'react';
import PropTypes from 'prop-types';


import './NavBar.css';
import UserSnippet from './UserSnippet.component';

export default function NavBar() {
  return (
    <div className='NavBarContainer flex flex-row items-center justify-between'>
      <div className='NavBarLogo'>
        <a href="/">
          <span>yuHacks(2023)</span>
        </a>
      </div>
      <UserSnippet />
    </div>
  );
}