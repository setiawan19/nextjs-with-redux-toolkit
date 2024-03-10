import { FoodState } from "@/types/food";
import { createSlice } from "@reduxjs/toolkit";


const FoodMaterials = [
    {
        uid: "1",
        name: 'wortel',
        used: false,
        quantity: 1,
        type: 'gr',
        isEdit: false,
    }, 
    {
        uid: "2",
        name: 'kol',
        used: false,
        quantity: 1,
        type: 'gr',
        isEdit: false,
    }, 
    {
        uid: "3",
        name: 'cabe',
        used: false,
        quantity: 1,
        type: 'sdm',
        isEdit: false,
    }, 
    {
        uid: "4",
        name: 'bawang merah',
        used: false,
        quantity: 1,
        type: 'gr',
        isEdit: false,
    }, 
    {
        uid: "5",
        name: 'bawang putih',
        used: false,
        quantity: 1,
        type: 'gr',
        isEdit: false,
    },
    {
        uid: "6",
        name: 'garam',
        used: false,
        quantity: 1,
        type: 'sdt',
        isEdit: false,
    }, 
    {
        uid: "7",
        name: 'cuka',
        used: false,
        quantity: 1,
        type: 'sdm',
        isEdit: false,
    }, 
] as FoodState[];

export const foodstuff = createSlice({
    name: "foodstuff",
    initialState: {value: FoodMaterials},
    reducers: {
       addFoodState: (state, action) => {
            state.value.push(action.payload)
       }, 
       updateFoodState: (state, action) => {
        state.value.map((item) => {
          if (item.uid === action.payload.uid) {
            item.used = action.payload.used;
            if(action.payload.isEdit !== undefined){
                item.isEdit = action.payload.isEdit;
            }
          }
        });
      }, 
       updateFoodTypeState: (state, action) => {
        state.value.map((item) => {
          if (item.uid === action.payload.uid) {
            if(action.payload.type !== undefined){
                item.type = action.payload.type;
            }
          }
        });
      }, 
       updateFoodQuantityState: (state, action) => {
        state.value.map((item) => {
          if (item.uid === action.payload.uid) {
            if(action.payload.quantity !== undefined){
                item.quantity = action.payload.quantity;
            }
          }
        });
      }, 
      updateFoodEditState: (state, action) => {
        state.value.map((item) => {
          if (item.uid === action.payload.uid) {
            item.isEdit = action.payload.isEdit;
          } else {
            item.isEdit = false;
          }
        });
      }, 
    }
})

export const {addFoodState, updateFoodState, updateFoodEditState, updateFoodTypeState, updateFoodQuantityState} = foodstuff.actions;
export default foodstuff.reducer;