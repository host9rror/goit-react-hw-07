import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: '' };

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const selectNameFilter = (state) => state.filters.value;
export const filtersReducer = filtersSlice.reducer;
