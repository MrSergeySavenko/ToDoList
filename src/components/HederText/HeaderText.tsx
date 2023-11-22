import React from 'react';

import { SHeader } from './HeaderText.style';

export const HeaderText: React.FC = () => {
    return (
        <>
            <SHeader blueText={false}>Make your own</SHeader>
            <SHeader blueText={true}>task list</SHeader>
        </>
    );
};
