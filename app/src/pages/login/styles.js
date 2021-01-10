import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
`;

export const LoginFrame = styled.form`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 0.30rem;
    padding: 20px 40px;
    background: linear-gradient(to bottom right, #bb99ff, #9A7DD6);
    box-shadow: 2px 4px 2px #3333;
    max-width: 296px;
    height: 213px;
`;

export const LoginLogo = styled.img`
    position: absolute;
    top: 20px;
    right: 40px;
    width: 30px;
    height: 30px;
    border-radius: 0.30rem;
`;

export const LoginTitle = styled.span`
    margin-bottom: 15px;
    font-size: 25px;
    color: #333;
    text-shadow: 3px 3px 1px #3333;
`

export const LoginInput = styled.input`
    border-radius: 5px;
    border: 1px solid transparent;
    padding: 4px 8px;
    font-family: 'Nunito';
    font-size: 16px;
    line-height: 16px;
    outline: none;
    transition: all 0.3s ease;
    caret-color: #bb99ff;
    color: #9966bb;
    width: 100%;
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

export const LoginButton = styled.button`
    border-radius: 5px;
    border: none;
    padding: 4px 8px;
    margin-top: 15px;
    font-size: 16px;
    cursor: pointer;
    width: 100%;
    background: #333;
    color: #ddd;
    transition: all 0.3s ease;
    outline: none;
    width: 100%;

    &:hover {
        background: #ddd;
        color: #333;
    }

`;

export const InputContainer = styled.div`
    position: relative;
    margin-top: 15px;
    display: flex;
    width: 100%;
`;

export const ColorIndicator = styled.div`
    position: absolute;
    top: 50%;
    right: 4px;
    transform: translateY(-50%);
    display: block;
    width: 21px;
    height: 21px;
    border-radius: 5px;
    background-color: ${(props) => props.icolor};
    box-shadow: 1px 1px 0px #333;
    transition: all 0.3s ease;
`;
