import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogListAction } from "../../services/action/blogs";
import { Icon } from "../Icon";
import "./Homepage.css";
import { blogIntro } from "../constants";
import HomeHeader from "./Header";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogListAction());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <HomeHeader />
      <div className="about-banner">
        <div className="about-banner-wrap">
          <div className="row">
            <div className="col-6">
              <Icon name="dbms" />
            </div>
            <div className="col-6">
              <h1>{"DBMS PROJECT"}</h1>
              <h2>{"Blog App"}</h2>
              <br />
              <h3>{"SHIVAM AWASTHI 2K21/CO/443"}</h3>
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
      <br />
      <br />
      <br />
    </div>
  );
};

export default HomePage;
