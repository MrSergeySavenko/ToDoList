import React from 'react';
import { SCellContentWrapper, SCellText, SCellWrapper, SCellX, SCyrcleWrapper } from './TaskCell.style';

interface IProps {
    text: string;
    onClick: () => void;
}

export const TaskCell: React.FC<IProps> = ({ text, onClick }) => {
    return (
        <SCellWrapper onClick={onClick}>
            <SCyrcleWrapper />
            <SCellContentWrapper>
                <SCellText>{text}</SCellText>
                <SCellX />
            </SCellContentWrapper>
        </SCellWrapper>
    );
};
