import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../__data__/store';
import { uniqueKey } from '../../__data__/utils/utils';
import { SListHeader, SScrollBarWrapper, STaskListWrapper } from './TaskList.style';

export const TaskList: React.FC = () => {
    const taskData = useSelector((state: RootState) => state.toDoData.taskData);

    const taskListFormation = () => {
        return taskData.map((item: string, i: number) => <p key={uniqueKey(item, i)}>{item}</p>);
    };

    return (
        <STaskListWrapper>
            <SListHeader>What to do:</SListHeader>
            <SScrollBarWrapper>{taskListFormation()}</SScrollBarWrapper>
        </STaskListWrapper>
    );
};
