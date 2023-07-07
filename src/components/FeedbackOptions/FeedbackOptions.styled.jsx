import styled from '@emotion/styled';

export const List = styled.ul`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    padding: 0;
`;

export const Item = styled.li`
    list-style: none;
`;

export const Btn = styled.button`
    padding: 5px 10px;    
    cursor: pointer;
    border-radius: 10px;
    color: #212121;
    background-color: pink;
    border-color: transparent;

    :hover {
        color: black;
        background-color: violet;
        transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
`;