
import LeftHeroForm from "./LeftHeroForm";
import LeftHeroText from "./LeftHeroText";

function LeftHero()
{
    return(
        <div className="flex flex-col items-center gap-25 relative">
            <LeftHeroText/>
            <LeftHeroForm/>
            
        

        </div>
    )
}
export default LeftHero;