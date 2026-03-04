import LeftHero from "./LeftHero/LeftHero";
import RightHero from "./RightHero/RightHero";


function Hero()
{
    return(
        <div className="flex text-center align-center  h-9/12 ">
          
          <LeftHero/>
          <RightHero/>
        
        </div>
    )
}
export default Hero;