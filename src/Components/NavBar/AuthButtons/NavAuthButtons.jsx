import FreeTrialButton from "./FreeTrialButton";
import LoginButton from "./LoginButton";

function NavAuthButtons()
{
    return(
        <div className="flex gap-6">
            <LoginButton/>
            <FreeTrialButton/>

        </div>
    )
}
export default NavAuthButtons;