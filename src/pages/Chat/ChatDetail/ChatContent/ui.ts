import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template: 40px auto/40px auto;
    grid-gap: 10px;
    ${({isFrom}) => !isFrom && `
    	grid-auto-flow: row;
        direction: rtl;
    `}
    .content-avatar {
        grid-area: 1/1/2/2;
    }
    .content-name {
        grid-area: 1/2/1/3;
    }
    .content-content {
	    grid-area: 2/2/3/3;
    }
`;
