import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = ({ error }: { error: string }) => {
  return (
    <div className="w-3/4 float-left">
      <h1 className="text-red-600 text-7xl">{error}</h1>
      <p>some error happens. please try again. or,</p>
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/contact">contact us</Link>
    </div>
  );
};

export default ErrorPage;
