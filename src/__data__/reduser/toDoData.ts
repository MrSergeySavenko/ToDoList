import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

import { IDataState } from '../models/models';

const initialState: IDataState = {
    taskData: [
        'Learn English for 1 hour a day',
        'Learn English for 1 hour a day',
        'Learn English for 1 hour a day',
        'Learn English for 1 hour a day',
    ],
    doneData: [
        'Learn English for 1 hour a day',
        'Learn English for 1 hour a day',
        'Learn English for 1 hour a day',
    ],
};

export const dataSlice = createSlice({
    name: 'toDo',
    initialState: initialState,
    reducers: {
        taskRefill(state: Draft<IDataState>, action: PayloadAction<string>) {
            return { ...state, taskData: [...state.taskData, action.payload] };
        },
        reassembledTasks(state: Draft<IDataState>, action: PayloadAction<Array<string>>) {
            return { ...state, taskData: action.payload };
        },
        doneRefill(state: Draft<IDataState>, action: PayloadAction<string>) {
            return { ...state, doneData: [...state.doneData, action.payload] };
        },
    },
});

export default dataSlice.reducer;
