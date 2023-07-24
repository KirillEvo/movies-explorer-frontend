import React from "react";
import { Link, useMatch } from "react-router-dom";

export default function CustomLink({ className, to, children}) {
  const match = useMatch(to);

  return (
    <Link className={match ? className + "_active" : className} to={to}>
      {children}
    </Link>
  );
}
