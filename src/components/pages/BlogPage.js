import React, { Fragment, useEffect } from "react";
import HomeHeader from "./Header";
import ArrowRight from "../../assets/img/arrow-right.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getBlogListAction,
  getOneBlogAction,
} from "../../services/action/blogs";

const BlogPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { blogList } = useSelector((state) => state.blogReducer);

  useEffect(() => {
    dispatch(getBlogListAction());
    // dispatch(getOneBlogAction(1));
  }, [dispatch]);
  return (
    <Fragment>
      <div className="wordpress-blog-container">
        <HomeHeader />
        <div className="container">
          <div className="tab-content">
            {blogList?.data?.map((blog) => (
              <div
                className="blog-card"
                key={blog?.blogId}
                onClick={() => navigate(`/blog/${blog?.blogId}`)}
              >
                <figure className="blog-img">
                  <img
                    src={
                      blog?.coverImage
                        ? blog?.coverImage
                        : "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    height={180}
                    alt=""
                  />
                </figure>
                <div className="blog-block">
                  <div className="blog-content">
                    <h3>{blog?.blogTitle}</h3>
                    <div>
                      <p
                        style={{
                          fontSize: "14px",
                          height: "45px",
                          overflow: "hidden",
                        }}
                      >
                        {blog?.blogDesc}
                      </p>
                    </div>
                  </div>
                  <div className="blog-post">
                    <span className="blog-date">
                      {new Date(blog?.postDate).toDateString()}
                    </span>
                    <a className="link">
                      <img src={ArrowRight} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogPage;
