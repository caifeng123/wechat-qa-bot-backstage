import styled from 'styled-components';

export const Wrapper = styled.div`
    height: calc(100vh - 96px);
    .chat-layout {
        height: 100%;
        overflow: hidden;
    }
    .chat-sider {
        overflow: scroll;
        background-color: #fff;
        &::-webkit-scrollbar {
            display: none;
        }
    }
`;
