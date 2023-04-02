import React, { Fragment, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBlogAction,
  getOneBlogAction,
} from "../../services/action/blogs";
import { GridLoader, HashLoader } from "react-spinners";

const BlogDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { blogData, getBlogLoading } = useSelector(
    (state) => state.blogReducer
  );
  const { blogid } = useParams();

  useEffect(() => {
    dispatch(getOneBlogAction(blogid));
  }, []);

  const handleOnDelete = (blogId) => {
    dispatch(deleteBlogAction(blogId, navigate));
  };

  const handleEdit = (blogId) => {
    navigate(`/edit-blog/${blogId}`);
  };

  return (
    <Fragment>
      <div className="col-2"></div>

      <div className="col-8">
        {getBlogLoading ? (
          <div>
            <HashLoader color="#3ba0aa" size={200} />
          </div>
        ) : (
          <div>
            <h1>{blogData?.data?.blogTitle} </h1>
            <div className="date-top">
              {blogData?.data?.authorName} {" | "}{" "}
              {new Date(blogData?.data?.postDate)?.toDateString()}
            </div>
            <div className="date-top">
              <span
                onClick={() => handleOnDelete(blogData?.data?.blogId)}
                style={{
                  color: "#F15D3B",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                DELETE
              </span>{" "}
              {" | "}
              <span
                onClick={() => handleEdit(blogData?.data?.blogId)}
                style={{
                  color: "#689F38",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                EDIT
              </span>
            </div>
            <div className="tab-content">
              <div>
                <figure className="blog-img">
                  <img src={blogData?.data?.coverImage} alt="cover-image" />
                </figure>
              </div>
            </div>
            <br />
          </div>
        )}
        <div
          className="post-content post-table"
          dangerouslySetInnerHTML={{
            __html: blogData?.data?.blogText,
          }}
        ></div>
      </div>
      <div className="col-2"></div>
    </Fragment>
  );
};

export default BlogDetail;
