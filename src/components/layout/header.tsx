import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom px-5">
      <a
        href="/"
        className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
      >
        <span>
          Imedia <strong>BLOG</strong>
        </span>
      </a>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
      </ul>
    </header>
  );
}
