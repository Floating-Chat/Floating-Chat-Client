import styled, { css } from 'styled-components';

export const Container = styled.form`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    background-color: #3339;
    transition: background-color 0.3s ease;
    ${(props) => !props.focused && css`
        background-color: transparent;
    `}
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
    cursor: pointer;
    width: 100%;
    background: #bb99ff;
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
        background: #fff;
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
    width: 100%;
    height: 40px;
    color: #fffd;
    background-color: transparent;
    &:not([value='']) {
        width: calc(100% - 45px);
    }
    
    &::selection {
        color: #fff;
        background-color: #bb99ff;
    }

    &::-moz-selection {
        color: #333;
        background-color: #bb99ff;
    }

    &::placeholder {
        color: #fff8;
    }

    &:focus {
        border: 1px solid #fff;
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
    padding: 10px 10px;
    overflow-y: scroll;
`

export const MessageBody = styled.div`
    margin-top: 5px;
    display: flex;
    width: 100%;
    /* justify-content: space-between; */
    align-items: flex-start;
    * {
        font-size: 14px;
    }
    border-radius: 10px;
    transition: all 0.3s ease;
    &:hover {
        background-color: #bb99ff33;
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
        text-shadow: -1px 0 1px #000b, 0 1px 1px #000b, 1px 0 1px #000b, 0 -1px 1px #000b;
    `}
`

export const FlexDiv = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    width: 50%;
`;
