import styled from '@emotion/styled';

export const STaskListWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '16px',
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
    height: '280px',
    overflowY: 'scroll',
}));
