import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark pt-5">
      <div className="container">
        <div className="row pt-3 ">
          <div className="col-md-3 text-white text-uppercase display-6">
            Imedia blog
          </div>
          <div className="col-md-9">
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto praesentium impedit dolorem debitis, sapiente illo.
              Illum perspiciatis doloremque recusandae repellat.
            </p>
          </div>
        </div>
        <hr />
      </div>

      <div className="bg-dark-overlay-3 ">
        <div className="container">
          <div className="row align-items-center justify-content-md-between py-4">
            <div className="col-md-6">
              <div className="text-center text-md-start text-primary-hover text-muted">
                ©2022{" "}
                <a href="/" className="text-reset btn-link" target="_blank">
                  imedia Blog
                </a>
                . All rights reserved
              </div>
            </div>
            <div className="col-md-6 d-sm-flex align-items-center justify-content-center justify-content-md-end">
              <div className="dropup me-0 me-sm-3 mt-3 mt-md-0 text-center text-sm-end">
                <ul
                  className="dropdown-menu min-w-auto"
                  aria-labelledby="languageSwitcher"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      English
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      German{" "}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      French
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="nav text-primary-hover text-center text-sm-end justify-content-center justify-content-center mt-3 mt-md-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Terms
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Privacy
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pe-0" href="#">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
