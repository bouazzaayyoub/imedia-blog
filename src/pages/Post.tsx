import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPostByid } from "../store/reducers/post/post.action";
import {
  postSelector,
  isLoadingSelector,
} from "../store/reducers/post/post.selector";

export default function Post() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const post = useSelector(postSelector);
  const isloading = useSelector(isLoadingSelector);

  useEffect(() => {
    if (id) {
      dispatch(fetchPostByid(id));
    }
  }, []);

  return (
    <div className="container">
      {isloading && (
        <div className="row placeholder-glow">
          <div className="col-12">
            <h1>
              <span className="placeholder w-75" />
            </h1>
          </div>
          <p className="lead">
            <span className="placeholder w-75" />
            <span className="placeholder w-100" />
            <span className="placeholder w-25" />
          </p>
        </div>
      )}
      <div className="row">
        <div className="col-12">
          <h1>{post?.title}</h1>
        </div>
        <p className="lead">{post?.body}</p>
      </div>
      <hr></hr>
      <div>
        {isloading && (
          <div className="my-4 placeholder-glow">
            <h3 className="mb-4">
              <span className="placeholder w-25" />
            </h3>

            <div className="d-flex ">
              <div className="w-100">
                <div className="mb-2">
                  <h5 className="m-0">
                    <span className="placeholder w-75" />
                  </h5>
                  <span className="me-3 small">
                    <span className="placeholder w-25" />
                  </span>
                  <a href="#" className="text-body fw-normal">
                    Reply
                  </a>
                </div>
                <p>
                  <span className="placeholder w-100" />
                  <span className="placeholder w-75" />
                  <span className="placeholder w-75" />
                </p>
              </div>
            </div>
          </div>
        )}
        <div>
          <h3>
            {post?.comments?.length !== 0 ? post?.comments?.length + 1 : 0}{" "}
            comments
          </h3>
          {post.comments?.map((comment) => (
            <div className="my-4 d-flex" key={comment.id}>
              <div>
                <div className="mb-2">
                  <h5 className="m-0">{comment.name}</h5>
                  <span className="me-3 small">{comment.email} </span>
                  <a href="#" className="text-body fw-normal">
                    Reply
                  </a>
                </div>
                <p>{comment.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
