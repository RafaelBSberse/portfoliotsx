import styled from "styled-components";

export const ContainerHeader = styled.div`
    width: 100%;
    height: 100px;
    background-color: transparent;
    color: #f8f8f8;
    position: fixed;
    float: left;
    display: flex;
    z-index: 9999;
    align-items: center;
    justify-content: space-between;
    padding: 0 60px
`;

export const TitleName = styled.div`
    font-style: italic;
    font-weight: 100;
    user-select: none;
    font-size: 25px;
    margin: 15px;
`;

export const ContainerFlex = styled.div`
    display: flex;
    align-items: center;
`;

export const Button = styled.button`
    & {
        margin-left: 50px;
        background: 0;
        color: #f8f8f8;
        transition: 0.25s;
        padding: 3px 10px;
        border: 0;
        border: solid 1px;
        border-image: linear-gradient(to top, transparent 20%, transparent 50%) 1;
    }
    &:hover {
        border: solid 1px;
        border-image: linear-gradient(to top, #f8f8f8 20%, transparent 50%) 5;
        transform: translateY(-5px);
    }
`;
