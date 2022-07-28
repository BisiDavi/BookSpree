import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type updateUserDetailsType = {
  userDetails: {
    name: string;
    email: string;
  };
};

const initialState: updateUserDetailsType = {
  userDetails: {
    name: '',
    email: '',
  },
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    updateUserDetails(
      state,
      action: PayloadAction<updateUserDetailsType['userDetails']>,
    ) {
      state.userDetails = action.payload;
    },
  },
});

export const {updateUserDetails} = onboardingSlice.actions;
export default onboardingSlice.reducer;
