import styled from "styled-components";

export const BannerDiv = styled.div`
  width: 100%;
  margin-top: 63px;

  
  .banner {
    width: 100%;
    height: 300px;
    padding-inline: 6.94444%;
    display: flex;
    justify-content: space-between;
    background-color: #faf4f4;
    margin-bottom: 100px;

    .banner__cont {
      width: 30.32258%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h3 {
        margin: 0px;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 48px;
      }

      p {
        max-width: 450px;
        margin: 0px;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        color: #9f9f9f;
      }
    }
  }
`;
