import { setContext } from 'apollo-link-context';

const authLink = setContext((_, { headers }) => {
  // get token from local storage
  const token = localStorage.getItem('token');

  // check if expired
  let isTokenExpired = true;
  if(token){
    isTokenExpired = parseJwt(token).exp < Date.now() / 1000;
    isTokenExpired && localStorage.removeItem('token');
  }
    
  // spread existing headers
  // add authorization token
  return {
    headers: {
      ...headers,
      authorization: token && !isTokenExpired ? `Bearer ${token}` : '',
    },
  };
});

// https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript-without-using-a-library
const parseJwt = (token) => {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};

export default authLink;
