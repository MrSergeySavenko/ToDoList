import React from 'react';
import { SSwapper } from './MainPage.style';
import { HeaderText } from '../components/HederText/HeaderText';
import { TaskList } from '../components/TaskList/TaskList';
import { AddTask } from '../components/AddTask/AddTask';

export const MainPage: React.FC = () => {
    return (
        <SSwapper>
            <HeaderText />
            <TaskList />
            <AddTask />
        </SSwapper>
    );
};
