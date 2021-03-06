import React from 'react';
import { useEffect } from 'react';
import * as FeatherIcon from 'react-feather';
import './Navigation.css';

const buttons = [
  {
    label: 'Home',
    name: '#landing',
    icon: <FeatherIcon.Home/>,
  },
  {
    label: 'About',
    name: '#about',
    icon: <FeatherIcon.Feather/>,
  },
  {
    label: 'Timeline',
    name: '#timeline',
    icon: <FeatherIcon.Clock/>,
  },
  {
    label: 'Skills',
    name: '#',
    icon: <FeatherIcon.Terminal/>,
  },
  {
    label: 'Blog',
    name: '#',
    icon: <FeatherIcon.Coffee/>,
  },
  {
    label: 'Contact',
    name: '#contact',
    icon: <FeatherIcon.Mail/>,
  },
];

function SimpleBottomNavigation() {
  useEffect(() => {
    const nav = document.getElementById('nav');
    window.onscroll = function() {
      if (window.pageYOffset > 100) {
        nav.style.background = "#FFFFFF";
      }
      else {
        nav.style.background = "tansparent";
      }
    }})
    
  return(
    <div className="navbar" id='nav'>
      {buttons.map((button) => (
        <a href={button.name}>{button.icon}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{button.label}</a>
      )
      )}
    </div>
  );
}
export default SimpleBottomNavigation; 