import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiPostCall, fileUpload } from '../utility/site-apis'

const initialState = {
  isFetching: false,
  error: null,
  headlines: [],
  cms: [],
  categorys: [],
  newsList: [],
  newsDetails: {}
}

export const getHeadlineList = createAsyncThunk(
  'auth/getHeadlineList',
  async (params, { rejectWithValue }) => {
    let urls = `doctype=News+Headlines&limit_page_length=None&fields=${JSON.stringify(["name", "description"])}&cmd=frappe.client.get_list`;
    let response = await apiPostCall('/', urls)
    if (response) {
      return response
    }
  }
)

export const getNewsCategory = createAsyncThunk(
  'auth/getNewsCategory',
  async (params, { rejectWithValue }) => {
    let urls = `doctype=News+Category&limit_page_length=None&fields=${JSON.stringify(["name", "description"])}&cmd=frappe.client.get_list`;
    let response = await apiPostCall('/', urls)
    if (response) {
      return response
    }
  }
)

export const getNewsList = createAsyncThunk(
  'auth/getNewsList',
  async (params, { rejectWithValue }) => {
    let urls = `doctype=Blog+Post&limit_page_length=None&fields=${JSON.stringify(["name", "title", "news_category", "blog_intro", "meta_image", "modified"])}&cmd=frappe.client.get_list`;
    let response = await apiPostCall('/', urls)
    if (response) {
      return response
    }
  }
)

export const getNewsDetails = createAsyncThunk(
  'auth/getNewsDetails',
  async (params, { rejectWithValue }) => {
    let urls = `doctype=Blog+Post&fields=${JSON.stringify(["*"])}&filters=${JSON.stringify([["Blog Post", "name", "like", params]])}&cmd=frappe.client.get_list`;
    let response = await apiPostCall('/', urls)
    if (response) {
      return response[0]
    }
  }
)

export const getCmsDetails = createAsyncThunk(
  'auth/getCmsDetails',
  async (params, { rejectWithValue }) => {
    let urls = `doctype=Web+Page&fields=${JSON.stringify(["*"])}&filters=${JSON.stringify([["Web Page", "route", "like", params]])}&cmd=frappe.client.get_list`;
    let response = await apiPostCall('/', urls)
    if (response) {
      return response[0]
    }
  }
)


export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetNews: (state, action) => {
      state.newsDetails = {}
    },
  },
  extraReducers: {
    // Headline List
    [getHeadlineList.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
    },
    [getHeadlineList.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload.message
    },
    [getHeadlineList.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.headlines = action.payload ? action.payload : []
    },
    // News Category
    [getNewsCategory.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
    },
    [getNewsCategory.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload.message
    },
    [getNewsCategory.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.categorys = action.payload ? action.payload : []
    },
    // News List
    [getNewsList.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
    },
    [getNewsList.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload.message
    },
    [getNewsList.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.newsList = action.payload ? action.payload : []
    },
    // News Details
    [getNewsDetails.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
    },
    [getNewsDetails.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload.message
    },
    [getNewsDetails.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.newsDetails = action.payload
    },
    // CMS Details
    [getCmsDetails.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
    },
    [getCmsDetails.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload.message
    },
    [getCmsDetails.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.cms = action.payload
    },
  }

})

export const { resetNews } = counterSlice.actions
export default counterSlice.reducer
