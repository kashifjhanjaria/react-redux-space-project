
import { useEffect } from "react";
import Subheading from "../../components/subheading/Subheading";
import "./home.css"

const Home = ()=>{
    useEffect(()=>{
        document.title = "Home"
    }, [])
    return(
        <div className="home">
           <Subheading heading="SO, YOU WANT TO TRAVEL TO"/>
            <div className="mainheading">
               <h1> Space</h1>
              <div className="animated-circle">
              <div className="circle_btn">
                Explore
               </div>
              </div>
            </div>
            <div className="description">
            <p>
            Let’s face it; if you want to go to space, 
             you might as well<br /> genuinely go to outer space and not hover kind of on the
            </p>
            </div>
        </div>
    )
}
export default Home;