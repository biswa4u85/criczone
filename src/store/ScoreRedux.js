import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllDataApi } from '../utility/site-apis'

const doctypeFixtures = 'Live Score Fixtures'
const fieldsFixtures = ["*"]

// seriesData

const doctypeSeries = 'Live Score Series'

const initialState = {
  isFetching: false,
  error: null,
  series: [],
  fixtures: [],
  scorecard: {},
}

export const seriesAllData = createAsyncThunk(
  'score/seriesAllData',
  async (params, { rejectWithValue }) => {
    const response = await getAllDataApi({ doctype: doctypeSeries, fields: ["*"], ...params })
  
    if (response.status === 'error') {
      return rejectWithValue(response.data)
    }
    return response.data
  }
)



export const getSeries = createAsyncThunk(
  'score/getSeries',
  // async (params, { rejectWithValue }) => {
  //   const response = await apiScoreCalls('series')
  //   if (response.status === 'error') {
  //     return rejectWithValue(response.data)
  //   }
  //   return response.results
  // }
)
export const getHomeFixtures = createAsyncThunk(
  'score/getHomeFixtures',
  async (params, { rejectWithValue }) => {
    let date = new Date()
    let queryDate = `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}-${date.getMonth() < 10 ? "0" + (Number(date.getMonth()) + 1) : date.getMonth()}-${date.getFullYear()}`
    const response = await getAllDataApi({ doctype: doctypeFixtures, fields: fieldsFixtures, searchEqual: { 'date': queryDate }, ...params })
    if (response.status === 'error') {
      return rejectWithValue(response.data)
    }
    for (let item of response.data) {
      item.home = JSON.parse(item.home)
      item.away = JSON.parse(item.away)
    }
    return response.data
  }
)
export const getScorecard = createAsyncThunk(
  'score/getScorecard',
  async (params, { rejectWithValue }) => {
    // const response = await apiScoreCalls('match/2432999')
    // if (response.status === 'error') {
    //   return rejectWithValue(response.data)
    // }
    // return response.results
  }
)


export const counterSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    resetNews: (state, action) => {
      state.newsDetails = {}
    },
  },
  extraReducers: {
    // Series
    [getSeries.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
    },
    [getSeries.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload.message
    },
    [getSeries.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.series = action.payload
    },
    // Fixtures
    [getHomeFixtures.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
    },
    [getHomeFixtures.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload.message
    },
    [getHomeFixtures.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.fixtures = action.payload
    },
    // Home Settings
    [getScorecard.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
    },
    [getScorecard.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload.message
    },
    [getScorecard.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.scorecard = action.payload
    },
  }

})

export const { resetNews } = counterSlice.actions
export default counterSlice.reducer