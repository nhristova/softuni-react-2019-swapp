import { setContext } from 'apollo-link-context';
import { validateToken } from './validateToken';

const authLink = setContext((_, { headers }) => {
  // get token from local storage
  const token = localStorage.getItem('token');
    
  // spread existing headers
  // add authorization token
  return {
    headers: {
      ...headers,
      authorization: validateToken(token) ? `Bearer ${token}` : '',
    },
  };
});

export default authLink;
