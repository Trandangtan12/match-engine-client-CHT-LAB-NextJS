import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { match_engine } from "../../lib/match_engine";
import { PostData } from "../../types/match_engine.types";

const initialState = {
  assetList: {},
  isAssetList: false,

  assetSummary: {},
  isAssetSummary: false,

  marketList: {},
  marketListLoading: false,

  marketSummary: {},
  marketSummaryLoading: false,
};

export const getAssetList = createAsyncThunk(
  "GET_ASSET_LIST",
  async (values: PostData) => {
    const response = await match_engine.getAssetList(values);
    return response;
  }
);

export const getAssetSummary = createAsyncThunk(
  "GET_ASSET_SUMARY",
  async (values: PostData) => {
    const response = await match_engine.getAssetSummary(values);
    return response;
  }
);

export const getMarketList = createAsyncThunk(
  "GET_MARKET_LIST",
  async (values: PostData) => {
    const response = await match_engine.getMarketList(values);
    return response;
  }
);

export const getMarketSummary = createAsyncThunk(
  "GET_MARKET_SUMMARY",
  async (values: PostData) => {
    const response = await match_engine.getMarketSummary(values);
    return response;
  }
);

export const generalSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    //   Asset List
    build.addCase(getAssetList.pending, (state) => {
      state.isAssetList = true;
    }),
      build.addCase(getAssetList.fulfilled, (state, action) => {
        state.isAssetList = false;
        state.assetList = action.payload;
      }),
      build.addCase(getAssetList.rejected, (state) => {
        state.isAssetList = false;
      });
    // Asset Sumary
    build.addCase(getAssetSummary.pending, (state) => {
      state.isAssetSummary = true;
    }),
      build.addCase(getAssetSummary.fulfilled, (state, action) => {
        state.isAssetSummary = false;
        state.assetSummary = action.payload;
      }),
      build.addCase(getAssetSummary.rejected, (state) => {
        state.isAssetSummary = false;
      });

    // Market List
    build.addCase(getMarketList.pending, (state) => {
      state.marketListLoading = true;
    }),
      build.addCase(getMarketList.fulfilled, (state, action) => {
        state.marketListLoading = false;
        state.marketList = action.payload;
      }),
      build.addCase(getMarketList.rejected, (state) => {
        state.marketListLoading = false;
      });

    // Market Summary
    build.addCase(getMarketSummary.pending, (state) => {
      state.marketSummaryLoading = true;
    }),
      build.addCase(getMarketSummary.fulfilled, (state, action) => {
        state.marketSummaryLoading = false;
        state.marketSummary = action.payload;
      }),
      build.addCase(getMarketSummary.rejected, (state) => {
        state.marketSummaryLoading = false;
      });
  },
});

export const generalReducer = generalSlice.reducer;
