import React, { Fragment, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneBlogAction } from "../../services/action/blogs";

const BlogDetail = () => {
  const dispatch = useDispatch();
  const { blogData } = useSelector((state) => state.blogReducer);
  const { blogid } = useParams();

  useEffect(() => {
    dispatch(getOneBlogAction(blogid));
  }, []);

  return (
    <Fragment>
      <div className="col-2"></div>

      <div className="col-8">
        <div>
          <h1>{blogData?.data?.blogTitle} </h1>
          <div className="date-top">
            {blogData?.data?.authorName} {" | "}{" "}
            {new Date(blogData?.data?.postDate)?.toDateString()}
          </div>
          <div className="tab-content">
            <div>
              <figure className="blog-img">
                <img src={blogData?.data?.coverImage} alt="cover-image" />
              </figure>
            </div>
          </div>
        </div>
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
