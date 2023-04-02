import * as types from "../../action";

const initialState = {
  blogList: [],
  getBlogListLoading: false,
};

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_BLOG_START:
      return { ...state, updateBlogLoading: true, updateData: {} };
    case types.UPDATE_BLOG_SUCCESS:
      return { ...state, updateBlogLoading: false, updateData: action?.data };
    case types.UPDATE_BLOG_FAIL:
      return { ...state, updateBlogLoading: false, updateData: {} };

    case types.DELETE_BLOG_START:
      return { ...state, deleteBlogLoading: true, deleteData: {} };
    case types.DELETE_BLOG_SUCCESS:
      return { ...state, deleteBlogLoading: false, deleteData: action?.data };
    case types.DELETE_BLOG_FAIL:
      return { ...state, deleteBlogLoading: false, deleteData: {} };

    case types.GET_BLOG_LIST_START:
      return { ...state, getBlogListLoading: true, blogList: [] };
    case types.GET_BLOG_LIST_SUCCESS:
      return { ...state, getBlogListLoading: false, blogList: action?.data };
    case types.GET_BLOG_LIST_FAIL:
      return { ...state, getBlogListLoading: false, blogList: [] };

    case types.GET_ONE_BLOG_START:
      return { ...state, getBlogLoading: true, blogData: {} };
    case types.GET_ONE_BLOG_SUCCESS:
      return { ...state, getBlogLoading: false, blogData: action?.data };
    case types.GET_ONE_BLOG_FAIL:
      return { ...state, getBlogLoading: false, blogData: {} };

    case types.POST_BLOG_START:
      return { ...state, postLoading: true, postData: {} };
    case types.POST_BLOG_SUCCESS:
      return { ...state, postLoading: false, postData: action?.data };
    case types.POST_BLOG_FAIL:
      return { ...state, postLoading: false, postData: {} };
    default:
      return { ...state };
  }
};
