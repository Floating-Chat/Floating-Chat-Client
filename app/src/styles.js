import styled from 'styled-components';

export const DraggableMenu = styled.div`
    position: absolute;
    display: block;
    background-color: #3336;
    width: 20px;
    height: 20px;
    top: 2px;
    left: 2px;
    border-radius: 5px;
    -webkit-app-region: drag;
`;
