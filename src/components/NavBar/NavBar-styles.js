import styled from "styled-components";

export const StyledGrid = styled.div`
  display: flex;
  padding-inline: 7.0694%;
  padding-top: 38px;
  width: 100%;
  height: 100px;
  justify-content: flex-end;

  & .routers {
    width: 430px;
    display: flex;
    justify-content: space-between;
    margin-right: 10%;

    a {
      text-decoration: none;
      font-family: "Poppins", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: black;
    }
  }

  & .actions {
    width: 16.86597%;
    display: flex;
    justify-content: space-between;

    i {
      cursor: pointer;
    }
  }
`;
