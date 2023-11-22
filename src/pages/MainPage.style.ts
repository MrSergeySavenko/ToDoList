import styled from '@emotion/styled';

export const SSwapper = styled('div')(() => ({
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '32px 80px',
    position: 'relative',
}));

export const SListsWrapper = styled('div')(() => ({
    height: '335px',
    display: 'flex',
    flexDirection: 'row',
}));

export const SGirlImg = styled('div')(() => ({
    width: '176px',
    height: '440px',
    backgroundImage: "url('/Girl.png')",
    position: 'absolute',
    top: '242px',
    right: '116px',
    zIndex: '3',
}));

export const SShadowImg = styled('div')(() => ({
    width: '350px',
    height: '150px',
    backgroundImage: "url('/Shadow.png')",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    position: 'absolute',
    top: '564px',
    right: '50px',
    zIndex: '2',
}));
