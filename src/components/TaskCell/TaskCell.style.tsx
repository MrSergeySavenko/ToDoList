import styled from '@emotion/styled';
import { url } from 'inspector';

export const SCellWrapper = styled('div')(() => ({
    cursor: 'pointer',
    width: '439px',
    minHeight: '32px',
    padding: '8px',
    borderRadius: '30.887px',
    border: '1px solid #4478FF',
    background: '#FFF',
    marginBottom: '8px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    '&:hover': {
        background: 'linear-gradient(270deg, rgba(68, 120, 255, 0.48) 0%, rgba(68, 120, 255, 0.00) 53.65%)',
    },

    '&:hover image': {
        display: 'block',
    },
}));

export const SCyrcleWrapper = styled('div')(() => ({
    backgroundImage: "url('/Unchecked.svg')",
    marginRight: '8px',
    width: '32px',
    heigth: '32px',
}));

export const SCellContentWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '399px',
}));

export const SCellText = styled('p')(() => ({
    height: '17px',
    fontFamily: 'Fredoka',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    color: '#000',
}));

export const SCellX = styled('image')(() => ({
    display: 'none',
    width: '32px',
    height: '32px',
    backgroundImage: "url('/Vector.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
}));
