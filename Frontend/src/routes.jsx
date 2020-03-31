import Register from './user/Register';
import Login from './user/Login';
import Home from './dashboard/Home';

export default [
    {
        component: Login, 
        path: '/', 
        exact: true,
    },
    {
      component: Register,
      path: '/register',
    }, 
    {
      component: Home, 
      path: '/dasboard'
    }
]