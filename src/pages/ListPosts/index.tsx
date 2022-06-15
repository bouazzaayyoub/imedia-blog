import React, { ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../../store/reducers/listPosts/post.action";
import {
  postSelector,
  isLoadingSelector,
  errorMessageSelector,
} from "../../store/reducers/listPosts/post.selector";

export default function Posts() {
  const dispatch = useDispatch();

  const posts = useSelector(postSelector);
  const isloading = useSelector(isLoadingSelector);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12">
            <div className="bg-primary-soft p-4 p-md-5 rounded-3 text-center">
              <h1>Checkout our blogs</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-3">
          {isloading &&
            Array(4)
              .fill(1)
              .map((_, i) => (
                <div
                  className="col-12 text-decoration-none text-dark placeholder-glow"
                  key={i}
                >
                  <div className="card border rounded-3 up-hover p-4 mb-4">
                    <div className="row g-3">
                      <div className="col-lg-5">
                        <h2 className="card-title">
                          <span className="w-75 placeholder" />
                        </h2>
                      </div>
                      <div className="col-md-6 col-lg-7">
                        <p>
                          <span className="w-25 placeholder" />
                          <br />
                          <span className="w-100 placeholder" />
                          <br />
                          <span className="w-75 placeholder" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          {posts.map((post) => (
            <Link
              to={`/${post.id}`}
              key={post.id}
              className="col-12 text-decoration-none text-dark"
            >
              <div className="card border rounded-3 up-hover p-4 mb-4">
                <div className="row g-3">
                  <div className="col-lg-5">
                    <h2 className="card-title">{post.title}</h2>
                  </div>
                  <div className="col-md-6 col-lg-7">
                    <p>{post.body}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
