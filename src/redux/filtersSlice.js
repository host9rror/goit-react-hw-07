import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: '' };

const filtersSlice = createSlice({
  name: 'filters',
  initialState, 
  reducers: {
    changeFilter(state, actions) {
      state.value = actions.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const selectNameFilter = state => state.filters.value;
export default filtersSlice.reducer;
