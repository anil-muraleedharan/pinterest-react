import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../UserContext';

const PublicRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        user.isAuth ? <Redirect to='/' /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
