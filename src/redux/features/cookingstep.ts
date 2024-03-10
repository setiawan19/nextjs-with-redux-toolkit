import { createSlice } from "@reduxjs/toolkit";

export interface CookingStepState {
  id: number;
  desc: string;
}

const cookingstepState: CookingStepState[] | [] | any = [];

export const cookingstep = createSlice({
  name: "cookingstep",
  initialState: { value: cookingstepState },
  reducers: {
    addCookingStepState: (state, action) => {
        const newValue = action.payload;
        if(newValue){
            state.value.push(newValue as CookingStepState[])
        }
    },
    removeCookingStepState: (state, action) => {
      state.value = state.value.filter((item: CookingStepState) => item.id !== action.payload.id);
    },
    updateCookingStepState: (state, action) => {
      state.value.map((item: CookingStepState) => {
        if (item.id === action.payload.id) {
          item.desc = action.payload.desc;
        }
      });
    },
  },
});

export const {
addCookingStepState,
  removeCookingStepState,
  updateCookingStepState,
} = cookingstep.actions;
export default cookingstep.reducer;
