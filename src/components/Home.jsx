import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <p>
        Welcome to <Link className="link" to="/signUp">Sign Up</Link>
      </p>
    </div>
  );
}
