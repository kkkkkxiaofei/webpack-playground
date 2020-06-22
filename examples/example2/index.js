import React from 'react';
import User from './components/User';
import Product from './components/Product';

export const routes = [
  {
    path: '/user',
    component: <User />
  },
  {
    path: '/product',
    component: <Product />
  }
];

