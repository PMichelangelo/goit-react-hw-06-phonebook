import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  phone: '',
};

const phonebookFormSlice = createSlice({
  name: 'phonebookForm',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    clearForm: state => {
      state.name = '';
      state.phone = '';
    },
  },
});

export const { setName, setPhone, clearForm } = phonebookFormSlice.actions;
export default phonebookFormSlice.reducer;
