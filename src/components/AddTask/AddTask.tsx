import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { dataSlice } from '../../__data__/reduser';

import { SAddHeader, SAddWrapper, SBtn, STextarea } from './AddTask.styled';

export const AddTask: React.FC = () => {
    const [taskText, setTaskText] = useState('');

    const dispatch = useDispatch();

    const addTask = () => {
        if (taskText) {
            dispatch(dataSlice.actions.taskRefill(taskText));
            setTaskText('');
        }
    };

    return (
        <SAddWrapper>
            <SAddHeader>Create tasks here</SAddHeader>
            <STextarea
                placeholder='Wash the dishes and clean up'
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
            <SBtn onClick={addTask}>Add</SBtn>
        </SAddWrapper>
    );
};
