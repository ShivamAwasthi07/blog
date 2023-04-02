import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogListAction } from "../../services/action/blogs";
import { Icon } from "../Icon";
import "./Homepage.css";
import { blogIntro } from "../constants";

const HomePage = () => {
  const dispatch = useDispatch();
  const { blogList } = useSelector((state) => state.blogReducer);

  useEffect(() => {
    dispatch(getBlogListAction());
  }, [dispatch]);
  useEffect(() => {
    console.log(blogList);
  }, [blogList]);
  return (
    <div className="wrapper">
      <div className="about-banner">
        <div className="about-banner-wrap">
          <div className="row">
            <div className="col-6">
              <Icon name="dbms" />
            </div>
            <div className="col-6">
              <h1>{"DBMS PROJECT"}</h1>
              <h2>
                {"Blog App"} &amp; {"English Test"}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="about-wrap">
        <div className="content">
          <div className="row">
            <div className="col-6">
              <h1>{"About Blog Section"}</h1>
              <p className="bottom-space">{blogIntro} </p>
            </div>
            <div className="col-6 text-center image-padding">
              <Icon name="blogcover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
