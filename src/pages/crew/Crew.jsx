import { useSelector } from "react-redux";
import Subheading from "../../components/subheading/Subheading";

import "./crew.css";
import { useEffect, useState } from "react";
const Crew = ()=>{
    const crew =  useSelector((state)=>state.crew);
console.log(crew);
const [crewstate , setCrewState] = useState([crew[0]]);
console.log(crewstate);
const crewFilter = (filterid)=>{
    // console.log("Hello" , id);
    const crewfilter = crew.filter((item)=>{
        return item.id === filterid
    })
    setCrewState(crewfilter)
    console.log(crewfilter);
}

useEffect(()=>{
    document.title = "Crew"
}, [])
    return(
        <div className="crew">
              {
                crewstate.map((item)=>{
                    return(
                        <div className="crew-wrapper" key={item.id}>
                       <div className="crew-text-area">
                       <div className="subheading">
                        <Subheading heading={`0${item.id} ${item.topheading}`}/>
                        </div>
                        <h2>
                        {item.occupation}  
                        </h2>
                        <h1>{item.name}</h1>
                        <p className="crew-description">
                            {item.description}
                        </p>
                            
        
                            <div className="circle" >
                               <div className="circle-btn" onClick={()=>crewFilter(1)} ></div>
                               <div className="circle-btn" onClick={()=>crewFilter(2)} ></div>
                               <div className="circle-btn" onClick={()=>crewFilter(3)} ></div>
                               <div className="circle-btn" onClick={()=>crewFilter(4)} ></div>
                            </div>
                       </div>
                       <div className="crew-image">
                        <img src={item.image} alt="" />
                       </div>
                        </div>
                    )
                })
              }
              
        </div>
    )
}

export default Crew;