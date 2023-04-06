import styled from "styled-components";

export const StyledCartOperations = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: flex-start;
  gap: 18px;

  .quantity {
    padding: 20px 15px;
    width: 93px;
    height: 64px;
    display: flex;
    justify-content: space-between;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    background: #ffffff;
    border: 1px solid #e8e8e8;
    border-radius: 10px;

    .qtyButton {
      cursor: pointer;
    }
  }

  .addToCart {
    width: 215px;
    height:64px;
    padding: 17px 48px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    background: #e8e8e8;
    border: 1px solid #e8e8e8;
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.2s ease-out ;
  }

  .addToCart:hover {
    background-color: rgb(250, 250, 250);
  }
`;
