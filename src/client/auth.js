import { setContext } from 'apollo-link-context';

const authLink = setContext((_, { headers }) => {
  // get token from local storage
  const token = localStorage.getItem('token');
  // spread existing headers
  // add authorization token
  return {
    headers: {
      ...headers,
      authorization: token ? token : '',
    },
  };
});

export default authLink;
