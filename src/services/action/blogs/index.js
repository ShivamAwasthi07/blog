import * as types from "../";

export const getBlogListAction = () => ({
  type: types.GET_BLOG_LIST,
});

export const postBlogListAction = (data, reset, setEditor) => ({
  type: types.POST_BLOG,
  data,
  reset,
  setEditor,
});

export const deleteBlogAction = (blogId, navigate) => ({
  type: types.DELETE_BLOG,
  blogId,
  navigate,
});

export const updateBlogAction = (blogId, data, navigate) => ({
  type: types.UPDATE_BLOG,
  blogId,
  data,
  navigate,
});

export const getOneBlogAction = (data) => ({
  type: types.GET_ONE_BLOG,
  data,
});
