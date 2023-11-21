import styled from '@emotion/styled';

export const STaskListWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '16px',
    width: '471px',
}));

export const SListHeader = styled('p')(() => ({
    fontFamily: 'Fredoka',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    color: '#000',
    marginLeft: '16px',
    marginBottom: '8px',
}));

export const SScrollBarWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    height: '282px',
    overflowY: 'auto',
    width: '100%',

    '&::-webkit-scrollbar': {
        width: '8px',
        backgroundColor: '#ced8f1',
        borderRadius: '100px',
    },

    '&::-webkit-scrollbar-thumb': {
        width: '8px',
        backgroundColor: '#4478ff',
        borderRadius: '100px',
    },
}));
