import NavAuthButtons from "./AuthButtons/NavAuthButtons";
import Logo from "./Logo";
import MiddleNav from "./MiddleNav";



function NavBar()
{
    return(
       <div className="flex items-center justify-between mx-4 h-1/12">
         <div className="flex items-center gap-40">
            
                <Logo/>
                <MiddleNav/>
            
        </div>
        <div>
            <NavAuthButtons/>
        </div>
       </div>
    )
}

export default NavBar;