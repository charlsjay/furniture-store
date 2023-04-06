import styled from "styled-components";

export const StyledCont = styled.main`
  h2{
      margin-top:10px;
      padding:20px;
      text-align: center;
      font-family: "Poppins";
  }

  p{
    text-align: center;
    font-family: "Poppins";
    margin: 5px 20%;
    color:#cfcfcf;
  }
`;

export const StyledSCont = styled.main`
   .main-div{
    display: grid;
    grid-template-columns: 4fr 6fr;
    gap:20px;
    margin-top:50px;
    font-family: "Poppins";
  }

   .right_side{
    
    padding-left:200px;
    padding-top:90px;
   }


   .tag_img{
     padding:10px;
   }

  
  .add{
    margin:20px;
    padding:40px;
  }
  
  .phone{
    margin:20px;
    padding:40px;
  }

  .time{
    margin:20px;
    padding:40px;
  }
  
  
  .topF{
    font-weight:bold;
  }
  
   .Contact-form{
    padding:30px;
    padding-left:260px;

    input {
      margin-top: 0px;
      margin-bottom: 36px;
      height: 75px;
      width: 100%;
      max-width: 423px;
      padding-left: 15px;
      border-radius: 10px;
      border: 1px solid #9f9f9f;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }

    input:focus {
      outline-color: #9f9f9f;
    }

    .submit-btn {
    font-weight:400;
    font-size:20px;
    height:50px;
    width:31%;
    margin-top:10px;
    border-radius:15px;
    background-color:white;
    border:1px solid #777777;
    cursor:pointer;;
    }

    .submit-btn:hover {
      background-color: #dedede;
    }
  
   }
`;


