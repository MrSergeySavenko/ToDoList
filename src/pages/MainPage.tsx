import React from 'react';

import { HeaderText } from '../components/HederText/HeaderText';
import { TaskList } from '../components/TaskList/TaskList';
import { AddTask } from '../components/AddTask/AddTask';
import { DoneList } from '../components/DoneList/DoneList';

import { SGirlImg, SListsWrapper, SShadowImg, SSwapper } from './MainPage.style';

export const MainPage: React.FC = () => {
    return (
        <SSwapper>
            <HeaderText />
            <SListsWrapper>
                <TaskList />
                <DoneList />
            </SListsWrapper>
            <AddTask />
            <SGirlImg />
            <SShadowImg />
        </SSwapper>
    );
};
