import React, { Fragment } from "react";
import HomeHeader from "./Header";
import ArrowRight from "../../assets/img/arrow-right.svg";

const BlogPage = () => {
  return (
    <Fragment>
      <div className="wordpress-blog-container">
        <HomeHeader />
        <div className="container">
          <div className="tab-content">
            <div className="blog-card">
              <figure className="blog-img">
                <img
                  src={
                    "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  height={180}
                  alt=""
                />
              </figure>
              <div className="blog-block">
                <div className="blog-content">
                  <h3>Why Python Is Important?</h3>
                  <p style={{ fontSize: "14px" }}>
                    this is the short description of the blog here. Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Fugiat
                    laudantium quasi in.
                  </p>
                </div>
                <div className="blog-post">
                  <span className="blog-date">
                    {new Date("2023-08-22").toDateString()}
                  </span>
                  <a className="link">
                    <img src={ArrowRight} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogPage;
