import styled from '@emotion/styled';
import { url } from 'inspector';

interface IProp {
    isDone: boolean;
}

export const SCellWrapper = styled('div')(({ isDone }: IProp) => ({
    cursor: isDone ? 'default' : 'pointer',
    width: '439px',
    padding: '8px',
    borderRadius: '30.887px',
    border: '1px solid #4478FF',
    background: isDone ? '#4478FF' : '#FFF',
    marginBottom: '8px',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',

    '&:hover': {
        background: isDone
            ? '#4478FF'
            : 'linear-gradient(270deg, rgba(68, 120, 255, 0.48) 0%, rgba(68, 120, 255, 0.00) 53.65%)',
    },

    '&:hover image': {
        display: 'block',
    },
}));

export const SCyrcleWrapper = styled('div')(({ isDone }: IProp) => ({
    backgroundImage: isDone ? "url('/CheckedWhite.svg')" : "url('/Unchecked.svg')",
    marginRight: '8px',
    width: '32px',
    height: '32px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
}));

export const SCellContentWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '399px',
}));

export const SCellText = styled('p')(({ isDone }: IProp) => ({
    minHeight: '17px',
    fontFamily: 'Fredoka',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    color: isDone ? '#FFF' : '#000',
    textDecoration: isDone ? 'line-through' : 'none',
    maxWidth: '360px',
    wordBreak: 'break-all',
}));

export const SCellX = styled('image')(() => ({
    display: 'none',
    width: '32px',
    height: '32px',
    backgroundImage: "url('/X.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
}));
