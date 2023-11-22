import React from 'react';

import { SCellContentWrapper, SCellText, SCellWrapper, SCellX, SCyrcleWrapper } from './TaskCell.style';

interface IProps {
    text: string;
    onClick?: () => void;
    isDone: boolean;
}

export const TaskCell: React.FC<IProps> = ({ text, onClick, isDone }) => {
    return (
        <SCellWrapper onClick={onClick} isDone={isDone}>
            <SCyrcleWrapper isDone={isDone} />
            <SCellContentWrapper>
                <SCellText isDone={isDone}>{text}</SCellText>
                {!isDone && <SCellX />}
            </SCellContentWrapper>
        </SCellWrapper>
    );
};
