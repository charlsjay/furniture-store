import Cloud from "../../assets/svgs/Cloud-sofa.png";
import { Styleddev } from "./Descripations-style";

function Descripation(){

       return(
      <>
        <Styleddev>
            <hr/>
            <br />
          <div className="tags">
               <a href="#">Descripation</a> 
               <a href="#">Additional Information</a> 
               <a href="#">Reviews [5]</a> 
          </div>
           <div>
               <p>Embodying the raw, wayward spirit of rock  roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
           
               <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
           </div>

           <div className="images">
               <img src= {Cloud} alt="image-1" width="37%" height="30%"/>

               <img src= {Cloud} alt="image-2" width="37%" height="30%"/>

           </div>
           <div className="boxs">
           <div className="box1"></div>
           <div className="box2"></div>
           </div>

        </Styleddev>    
      </>
          
       );


}

export default Descripation ;