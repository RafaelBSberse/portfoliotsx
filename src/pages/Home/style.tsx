import styled from "styled-components";
import mountain from "../../assets/images/montanha.png"

export const Content = styled.div`
    background: black;
    height: 2000px;
    margin-top: -5px;
`;

export const Mountain = styled.img.attrs({src: `${mountain}`})<{scroll: number}>`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  filter: brightness(${(props) => 1-(props.scroll/575) > 0 ? 1-(props.scroll/575) : 0});
  `;