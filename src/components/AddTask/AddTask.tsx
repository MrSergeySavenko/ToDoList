import React, { useState } from 'react';
import { SAddHeader, SAddWrapper, SBtn, STextarea } from './AddTask.styled';
import { useDispatch } from 'react-redux';
import { dataSlice } from '../../__data__/reduser';

export const AddTask: React.FC = () => {
    const [taskText, setTaskText] = useState('');

    const dispatch = useDispatch();

    const addTask = () => {
        dispatch(dataSlice.actions.taskRefill(taskText));
        setTaskText('');
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
