import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./FormCss.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { modules, formats } from "../constants/modules";
import { postBlogListAction } from "../../services/action/blogs";
import { ClipLoader } from "react-spinners";

const AddBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    setValue,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const [blogEditor, setEditor] = useState("");
  const onSubmit = (data) => {
    dispatch(
      postBlogListAction({ ...data, blogText: blogEditor }, reset(), setEditor)
    );
  };

  const { postLoading } = useSelector((state) => state.blogReducer);

  return (
    <Fragment>
      <title>ADD BLOG</title>

      <div className="col-2"></div>
      <div className="col-8">
        <div className="shortlisted-wrap dash-block">
          <div className="shortlisted-block card">
            <div className="job-rquirement">
              <h4 className="job-rquirement-title">BLOG DETAILS</h4>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="job-rquirement-form">
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label
                          className={errors.blogTitle ? "text-danger" : ""}
                        >
                          Blog Title
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
                          Cover Image*
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
                    {postLoading ? (
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

export default AddBlog;
