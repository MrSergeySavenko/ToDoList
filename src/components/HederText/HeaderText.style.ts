import styled from '@emotion/styled';

interface SIProp {
    blueText: boolean;
}

export const SHeader = styled('h1')(({ blueText }: SIProp) => ({
    fontFamily: 'Fredoka',
    fontSize: blueText ? '64px' : '48px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: blueText ? '58.4px' : '54.1px',
    letterSpacing: '-0.96px',
    color: blueText ? '#4478FF' : '#000',
    marginBottom: blueText ? '24px' : '0',
}));
