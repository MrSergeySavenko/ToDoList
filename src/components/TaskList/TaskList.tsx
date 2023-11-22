import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../__data__/store';
import { uniqueKey } from '../../__data__/utils/utils';
import { dataSlice } from '../../__data__/reduser';

import { SListHeader, SScrollBarWrapper, STaskListWrapper } from './TaskList.style';
import { TaskCell } from '../TaskCell/TaskCell';

export const TaskList: React.FC = () => {
    const dispatch = useDispatch();

    const taskData = useSelector((state: RootState) => state.toDoData.taskData);

    const deleteTask = (taskText: string, taskIndex: number) => {
        dispatch(dataSlice.actions.reassembledTasks(taskData.filter((_, i: number) => i !== taskIndex)));
        dispatch(dataSlice.actions.doneRefill(taskText));
    };

    return (
        <STaskListWrapper>
            <SListHeader>What to do:</SListHeader>
            <SScrollBarWrapper>
                {taskData.map((taskText: string, taskIndex: number) => (
                    <TaskCell
                        isDone={false}
                        text={taskText}
                        key={uniqueKey(taskText, taskIndex)}
                        onClick={() => deleteTask(taskText, taskIndex)}
                    />
                ))}
            </SScrollBarWrapper>
        </STaskListWrapper>
    );
};
