import { createSlice } from "@reduxjs/toolkit";

export interface recipeState {
  title: string;
  tempTitleStep: string;
  tempInputStep: string;
  isEditTitle?: boolean;
}

const initialState: recipeState = {
    title: '',
    tempTitleStep: '',
    tempInputStep: '',
    isEditTitle: false,
}

export const recipe = createSlice({
  name: "recipe",
  initialState: {value:  initialState},
  reducers: {
   updateRecipeState: (state, action) => {
    state.value = action.payload;
   }, 
   updateTempTitleState: (state, action) => {
    state.value.tempTitleStep = action.payload.tempTitleStep;
   },
   updateTempStepState: (state, action) => {
    state.value.tempInputStep = action.payload.tempInputStep;
   },
   showEditTitle: (state)=> {
    state.value.isEditTitle = true;
   },
   resetTitleStep: (state) => {
    state.value = { title: '', tempTitleStep: '', tempInputStep: state.value.tempInputStep};
   }, 
   resetInputStep: (state) => {
    state.value = { title: state.value.title, tempTitleStep: '', tempInputStep: ''};
   }, 
   resetRecipe: (state) => {
    state.value = initialState;
   }
  },
});

export const {
    updateRecipeState,
    updateTempTitleState,
    showEditTitle,
    resetTitleStep,
    resetInputStep,
    resetRecipe,
    updateTempStepState
} = recipe.actions;
export default recipe.reducer;
