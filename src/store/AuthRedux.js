import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiPostCall, fileUpload } from '../utility/site-apis'

const initialState = {
  isFetching: false,
  error: null,
  newsList: [],
  newsDetails: {}
}

export const getNewsList = createAsyncThunk(
  'auth/getNewsList',
  async (params, { rejectWithValue }) => {
    let urls = `doctype=Blog+Post&limit_page_length=None&fields=${JSON.stringify(["name", "title", "blog_category", "blog_intro", "meta_image", "modified"])}&cmd=frappe.client.get_list`;
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


export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetNews: (state, action) => {
      state.newsDetails = {}
    },
  },
  extraReducers: {
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
  }

})

export const { resetNews } = counterSlice.actions
export default counterSlice.reducer
