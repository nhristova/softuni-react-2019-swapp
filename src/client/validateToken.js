// https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript-without-using-a-library
const parseJwt = (token) => {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};

export const validateToken = (token) => { 

  // check if expired
  let isTokenValid = false;
  if(token){
    isTokenValid = parseJwt(token).exp > Date.now() / 1000;
    !isTokenValid && localStorage.removeItem('token');
  }

  return isTokenValid;
}
