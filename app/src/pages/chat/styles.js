import styled, { css } from 'styled-components';

export const Container = styled.form`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
`;

export const MessageInputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const SubmitButton = styled.button`
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: 16px;
    cursor: pointer;
    width: 100%;
    background: #ddd;
    color: #333;
    transition: all 0.3s ease;
    outline: none;
    width: 0px;
    height: 40px;
    overflow: hidden;

    ${(props) => props.active && css`
        width: 40px;
    `}

    &:hover {
        background: #333;
        color: #ddd;
    }
`;

export const SubmitIcon = styled.img`
    width: 16px;
    height: 16px;
`;

export const MessageInput = styled.input`
    border-radius: 5px;
    border: 1px solid transparent;
    padding: 8px 10px;
    font-family: 'Nunito';
    font-size: 16px;
    line-height: 16px;
    outline: none;
    transition: all 0.3s ease;
    caret-color: #bb99ff;
    color: #9966bb;
    width: 100%;
    height: 40px;
    &:not([value='']) {
        width: calc(100% - 45px);
    }
    
    &::selection {
        color: #333;
        background-color: #bb99ff;
    }

    &::-moz-selection {
        color: #333;
        background-color: #bb99ff;
    }

    &:focus {
        border: 1px solid #ee99ff;
        border-radius: 0.15rem;
    }
`;

export const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    padding: 20px 50px;
    overflow-y: scroll;
`;

export const MessageBody = styled.div`
    display: flex;
    width: 95%;
    justify-content: space-between;
    align-items: flex-start;
    * {
        font-size: 16px;
    }
`;

export const MessageContent = styled.span`
    color: ${(props) => props.messageColor};
    ${(props) => props.width && css`
        max-width: ${props.width};
        word-break: break-all;
    `}

    ${(props) => props.border && css`
        letter-spacing: 2px;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    `}
`

export const FlexDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 50%;
`;
