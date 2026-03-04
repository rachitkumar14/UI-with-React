import FooterText from "./Components/Footer/FooterText";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";

function App()
{
  return(
    <div className="h-screen flex flex-col"> 
      <NavBar/>
      <Hero/>
      <FooterText/>
   
    </div>
  )
}
export default App;