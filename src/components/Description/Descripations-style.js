import styled from "styled-components";

export const Styleddev= styled.div`
  
h{
    background-color:#e8e8e8;
   

}

.tags{
    display: flex;
    flex-direction: row;
    justify-content: center;
}


a {
    color:#b8b9ba;
    margin:20px 20px;
    text-align: center;
    font-family: "Poppins";
    text-decoration: none;
    font-size: 20px;

}

a:hover{color: black;}

   p{
    margin:20px 130px;
    padding:10px;
    color:#b8b9ba;
    font-family: "Poppins";

   }  

   .images {
    display:flex;
    flex-direction:row;
    justify-content: space-evenly;
    position:relative;
    z-index:3;
   }
   
   .boxs{
    display:flex;
    flex-direction:row;
    justify-content: space-evenly;
    position:absolute;
    z-index:-1;
    margin-top:-312px;
    margin-left:87px;
   }


   .box1{
    width: 600px;
    height: 300px;
    margin: 20px;
    background-color:#fff9e5;
   }

   .box2{
    width: 600px;
    height: 300px;
    margin: 20px;
    background-color:#fff9e5;
   }
   
`;
