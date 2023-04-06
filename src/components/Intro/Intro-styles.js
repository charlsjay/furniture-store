import styled from "styled-components";
import img from "../../assets/svgs/intro_bg.png";
import logo from "../../assets/svgs/logo.png";

export const StyledIntro = styled.div`
  width: 100%;
  margin-bottom: 0px;
  aspect-ratio: 4.5569 / 1;
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  & .info {
    font-family: "Poppins";
    font-style: normal;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 44px;

    .logo {
      width: 77px;
      height: 77px;
      background-image: url(${logo});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      position: relative;
      bottom: -17px;
    }

    .title {
      margin-top: 0px;
      margin-bottom: 2px;
      font-weight: 500;
      font-size: 48px;
      line-height: 72px;
    }
    .location {
      margin-top: 0px;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;
