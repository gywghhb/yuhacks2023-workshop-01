import React, { Component } from "react";
import PropTypes from "prop-types";

import "./UserSnippet.css";

export default function UserSnippet() {
  return (
    <div className="UserSnippet flex flex-row items-center justify-center">
      <a>LOGIN</a>
      <div className="UserProfile" />
    </div>
  );
}
