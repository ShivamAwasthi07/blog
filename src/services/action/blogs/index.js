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

export const deleteBlogAction = (blogId) => ({
  type: types.DELETE_BLOG,
  blogId,
});

export const updateBlogAction = (blogId, data) => ({
  type: types.UPDATE_BLOG,
  blogId,
  data,
});

export const getOneBlogAction = (data) => ({
  type: types.GET_ONE_BLOG,
  data,
});
