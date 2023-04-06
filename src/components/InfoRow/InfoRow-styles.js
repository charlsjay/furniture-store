import styled from "styled-components";

export const StyledInfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100px;
  padding-inline: 100px;
  margin-top: 14px;
  margin-bottom: 32px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  & p {
    display: inline-block;
    word-spacing: 20px;
    color: #9f9f9f;

    b {
      color: black;
    }
  }

  & .divider {
    display: inline-block;
    width: 2px;
    height: 37px;
    background-color: #9f9f9f;
  }
`;
