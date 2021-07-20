import React from 'react';
import { Redirect, Route } from "react-router-dom";
import useAuth from '../../auth/useAuth';

function PrivateRouter({component: Component, ...rest}) {

  const auth = useAuth();

  return (
    <Route {...rest} >
      {auth.userData ? <Component /> : <Redirect to="/login"/>}
    </Route>
  );
}

export default PrivateRouter;