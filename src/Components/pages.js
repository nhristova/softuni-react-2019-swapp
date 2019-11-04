import { Login } from './Login';
import { Episodes } from './Episodes';

export const pages = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/episodes',
    name: 'Episodes',
    component: Episodes,
  },
  // {
  //     path: '/characters',
  //     name: 'Characters',
  //     component: Characters
  // },
  // {
  //     path: '/starships',
  //     name: 'Starships',
  //     component: Starships
  // }
];
