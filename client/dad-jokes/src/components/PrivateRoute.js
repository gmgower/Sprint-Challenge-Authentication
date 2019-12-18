//! deals with token in a local storage on individual client.
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props => {
          console.log("PrivateRoute", props)
          if (localStorage.getItem("token")) {
            return <Component {...props} {...rest}  />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    );
  };
  
  export default PrivateRoute;