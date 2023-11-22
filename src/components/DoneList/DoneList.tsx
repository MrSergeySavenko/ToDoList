import React from 'react';
import { useSelector } from 'react-redux';

import { TaskCell } from '../TaskCell/TaskCell';
import { RootState } from '../../__data__/store';
import { uniqueKey } from '../../__data__/utils/utils';

import { SDoneListWrapper, SListHeader, SScrollBarWrapper } from './DoneList.style';

export const DoneList: React.FC = () => {
    const doneData = useSelector((state: RootState) => state.toDoData.doneData);

    return (
        <SDoneListWrapper>
            <SListHeader>Done:</SListHeader>
            <SScrollBarWrapper>
                {doneData.map((taskText: string, taskIndex: number) => (
                    <TaskCell isDone={true} text={taskText} key={uniqueKey(taskText, taskIndex)} />
                ))}
            </SScrollBarWrapper>
        </SDoneListWrapper>
    );
};
