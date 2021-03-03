import React from 'react';
import * as FeatherIcon from 'react-feather';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FeatherIcon.Home />,
    cName: 'nav-text'
  },
  {
    title: 'Timeline',
    path: '/timeline-page',
    icon: <FeatherIcon.Clock />,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <FeatherIcon.Terminal />,
    cName: 'nav-text'
  },
  {
    title: 'Blog',
    path: '/blog',
    icon: <FeatherIcon.Coffee />,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <FeatherIcon.Mail />,
    cName: 'nav-text'
  }
];