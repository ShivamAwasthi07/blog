import api from "./apiInstance";

export const getBlogListApi = () => api.get("/blogs");
export const postBlogApi = (data) => api.post("/blogs", data);
export const updateBlogApi = (blogId, data) =>
  api.put(`/blogs/${blogId}`, data);
export const deleteBlogApi = (blogId) => api.delete(`/blogs/${blogId}`);
export const getOneBlogApi = (blogId) => api.get(`/blogs/${blogId}`);
