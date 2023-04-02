import * as types from "../../action";

const initialState = {
  blogList: [],
  getBlogListLoading: false,
};

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BLOG_LIST_START:
      return { ...state, getBlogListLoading: true, blogList: [] };
    case types.GET_BLOG_LIST_SUCCESS:
      return { ...state, getBlogListLoading: false, blogList: action?.data };
    case types.GET_BLOG_LIST_FAIL:
      return { ...state, getBlogListLoading: false, blogList: [] };
    default:
      return { ...state };
  }
};
