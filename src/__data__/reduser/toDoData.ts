import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

import { IDataState } from '../models/models';

const initialState: IDataState = {
    taskData: ['Покакать', 'Пописать', 'Пописать', 'Пописать', 'Пописать', 'Пописать', 'Пописать'],
    doneData: [],
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
    },
});

export default dataSlice.reducer;
