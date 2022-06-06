import styled from 'styled-components';

export const Wrapper = styled.div`
    .desc {
        display: flex;
        font-size: 10px;
        align-items: baseline;
        .desc-detail {
            flex: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .desc-update {
            flex-basis: 50px;
            white-space: nowrap;
        }
    }
`;
