import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
    box-shadow: 0px 1px 0 0 inset #ccc;
    .resize {
        width: 16px;
        height: 300px;
        min-height: 100px;
        max-height: 400px;
        resize: vertical;
        transform: scale(300, -1);
        overflow: scroll;
        transform-origin: left;
    }
    .content {
        inset: 10px 10px 0 10px;
        position: absolute;
        display: flex;
        flex-direction: column;
    }
    textarea.ant-input {
        flex: 1;
        resize: none;
    }
`;
