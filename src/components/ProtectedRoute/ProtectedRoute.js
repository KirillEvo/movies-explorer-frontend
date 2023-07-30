import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({element: Component, ...props}) => {
  // console.log(props.loggedIn);
  // if (props.loggedIn){
  //   return <Component {...props} />
  // } else if (props.loggedIn) {
  //   return <Component {...props} />
  // } else {
  //   return <Navigate to="/" />
  // }
  return (
      props.loggedIn ? <Component {...props} /> : <Navigate to="/" />
  )
}

// const ProtectedRoute = ({ element: Component, loggedIn, ...props }) => {
//   console.log(loggedIn);
//   if (loggedIn) {
//     return <Component {...props} />;
//   } else {
//     return <Navigate to="/" />;
//   }
// };

// const ProtectedRoute = (props) => {
//   return props.loggedIn ? props.children : <Navigate to='/' />;
// }

export default ProtectedRoute;
