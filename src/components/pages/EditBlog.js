import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./FormCss.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { modules, formats } from "../constants/modules";
import {
  postBlogListAction,
  updateBlogAction,
} from "../../services/action/blogs";
import { ClipLoader } from "react-spinners";

const EditBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { blogid } = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const { blogData, updateBlogLoading } = useSelector(
    (state) => state.blogReducer
  );
  const [blogEditor, setEditor] = useState("");
  useEffect(() => {
    console.log(blogData);
    setValue("blogTitle", blogData?.data?.blogTitle);
    setValue("postDate", blogData?.data?.postDate.split("T")?.[0]);
    setValue("authorName", blogData?.data?.authorName);
    setValue("coverImage", blogData?.data?.coverImage);
    setValue("blogDesc", blogData?.data?.blogDesc);
    // setValue("blogDesc", blogData?.data?.blogDesc);
    setEditor(blogData?.data?.blogText);
  }, []);
  const onSubmit = (data) => {
    dispatch(
      updateBlogAction(blogid, { ...data, blogText: blogEditor }, navigate)
    );
  };

  return (
    <Fragment>
      <div className="col-2"></div>
      <div className="col-8">
        <div className="shortlisted-wrap dash-block">
          <div className="shortlisted-block card">
            <div className="job-rquirement">
              <h4 className="job-rquirement-title">JOB REQUIREMENT</h4>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="job-rquirement-form">
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label
                          className={errors.blogTitle ? "text-danger" : ""}
                        >
                          Job Title
                        </label>
                        <input
                          {...register("blogTitle", {
                            required: true,
                          })}
                          type="text"
                          name="blogTitle"
                          className="form-control"
                          placeholder="Why Python Is Important?"
                        />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="form-group">
                        <label
                          className={errors.authorName ? "text-danger" : ""}
                        >
                          Author's Name*
                        </label>
                        <input
                          {...register("authorName", {
                            required: true,
                          })}
                          type="text"
                          name="authorName"
                          className="form-control"
                          placeholder="Tony Stark"
                        />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="form-group">
                        <label className={errors.postDate ? "text-danger" : ""}>
                          Post Date*
                        </label>
                        <input
                          {...register("postDate", {
                            required: true,
                            // pattern: /^[0-9.,]+$/i,
                          })}
                          //   value={getValues("postDate")}
                          type="date"
                          name="postDate"
                          className="form-control"
                          placeholder="$"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label
                          className={errors.coverImage ? "text-danger" : ""}
                        >
                          Cover Image
                        </label>
                        <input
                          {...register("coverImage", {
                            required: true,
                          })}
                          type="text"
                          name="coverImage"
                          className="form-control"
                          placeholder="Paste your cover image URL here!"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label className={errors.blogDesc ? "text-danger" : ""}>
                          Short Description
                        </label>
                        <textarea
                          {...register("blogDesc", {
                            required: true,
                          })}
                          name="blogDesc"
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <ReactQuill
                          style={{ width: 800, margin: "auto", marginTop: 50 }}
                          theme="snow"
                          modules={modules}
                          formats={formats}
                          value={blogEditor}
                          placeholder={"write your blog here..."}
                          scrollingContainer={"true"}
                          onChange={(e) => setEditor(e)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-block justify-content-end">
                  <button className="btn" type="submit">
                    {updateBlogLoading ? (
                      <ClipLoader color="white" size={20} />
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2"></div>
    </Fragment>
  );
};

export default EditBlog;
