import seet from "../../assets/svgs/RocketSingle_s.png";
import NavBar from "../../components/NavBar/NavBar";
import { Home_styles } from "./Home-styles";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
     <Home_styles>
        <NavBar />
      <div className="main_home">
      
      <div className="left_home">
         <h1>Rocket single seater</h1>
         <a href="/shop" >Shop Now</a>
      </div>
      
      <div className="Right_home">
      <img src={seet} alt="seet" />
      </div>
      
      </div>
      </Home_styles>
      <Footer />
    </>
  
   
  
  );
}

export default Home;
