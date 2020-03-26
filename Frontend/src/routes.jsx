import React from 'react';

import Register from './user/Register';
import Login from './user/Login';

export default [
    {
        component: Login, 
        path: '/', 
        exact: true,
    },
    {
      component: Register,
      path: '/register',
    }
]