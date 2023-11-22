import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../__data__/store';
import { uniqueKey } from '../../__data__/utils/utils';
import { SListHeader, SScrollBarWrapper, STaskListWrapper } from './TaskList.style';
import { TaskCell } from '../TaskCell/TaskCell';
import { dataSlice } from '../../__data__/reduser';

export const TaskList: React.FC = () => {
    const taskData = useSelector((state: RootState) => state.toDoData.taskData);

    const dispatch = useDispatch();

    const deleteTask = (taskText: string, taskIndex: number) => {
        const taskArr = [...taskData];
        taskArr.forEach((item: string, i: number) => {
            if (taskIndex === i) {
                taskArr.splice(i, 1);
                dispatch(dataSlice.actions.reassembledTasks(taskArr));
                dispatch(dataSlice.actions.doneRefill(taskText));
            }
        });
    };

    const taskListFormation = () => {
        return taskData.map((taskText: string, taskIndex: number) => (
            <TaskCell
                isDone={false}
                text={taskText}
                key={uniqueKey(taskText, taskIndex)}
                onClick={() => deleteTask(taskText, taskIndex)}
            />
        ));
    };

    return (
        <STaskListWrapper>
            <SListHeader>What to do:</SListHeader>
            <SScrollBarWrapper>{taskListFormation()}</SScrollBarWrapper>
        </STaskListWrapper>
    );
};
