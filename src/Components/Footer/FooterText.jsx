import FooterPointer from "./FooterPointers";
import MainFooterText from "./MainFooterText";

function FooterText()
{
    return(
        <div className="flex flex-col gap-5">
            <MainFooterText />
            <FooterPointer/>

        </div>
    )
}
export default FooterText;