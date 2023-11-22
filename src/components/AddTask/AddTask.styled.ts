import styled from '@emotion/styled';

export const SAddWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '16px',
}));

export const SAddHeader = styled('p')(() => ({
    color: '#000',
    fontFamily: 'Fredoka',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    margin: '8px',
}));

export const STextarea = styled('textarea')(() => ({
    width: '422px',
    height: '51px',
    padding: '16px',
    borderRadius: '30px',
    border: '1px solid #4478FF',
    background: '#FFF',
    marginBottom: '16px',
    fontFamily: 'Fredoka',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    outline: 'none',
    caretColor: '#4478FF',

    '&::-webkit-input-placeholder': {
        color: '#000',
    },
}));

export const SBtn = styled('button')(() => ({
    width: '210px',
    borderRadius: '30.887px',
    background: '#4478FF',
    border: 'none',
    padding: '8px 82px 11px 82px',
    color: '#FFF',
    fontFamily: 'Fredoka',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    cursor: 'pointer',
}));
