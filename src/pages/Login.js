import React from 'react';
// import { Redirect } from 'react-router-dom';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { LoginForm } from '../Components';

const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;

/* istanbul ignore next*/
export const Login = props => {
  const client = useApolloClient();
  const [signIn, { loading, error }] = useMutation(SIGN_IN, {
    onCompleted: result => {
      localStorage.setItem('token', result.signIn.token);
      client.writeData({ data: { authenticated: true } });
    },
  });

  let showError = false;
  if (loading) {
    // Show loader?
  }
  if (error) {
    showError = true;
  }

  return (
    <LoginForm
      signIn={signIn}
      toggleTheme={props.toggleTheme}
      showError={showError}
    />
  );
};
