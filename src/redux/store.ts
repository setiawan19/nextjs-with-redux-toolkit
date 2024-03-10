import { configureStore } from '@reduxjs/toolkit';
import foodstuff from './features/foodstuff';
import cookingstep from './features/cookingstep';
import recipe from './features/recipe';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        foodstuff,
        cookingstep,
        recipe
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
