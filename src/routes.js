import {Signup} from './pages/Signup';
import {Login} from './pages/Login';

const routes = {
  example: {
    path: '/signup',
    component: Signup
  },
  login: {
    path: '/login',
    component: Login
  },
  anotherExample: {
    path: '/another-example',
    component: Signup
  }
};

export default routes;