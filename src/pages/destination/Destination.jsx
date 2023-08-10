
import { NavLink } from "react-router-dom";
import Subheading from "../../components/subheading/Subheading";
import "./destination.css";
import { useEffect, useState } from "react";
const Destination = ()=>{
    const [planet , setPlanet] = useState([{
        heading:"moon",
        
        description:`See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
        image:`assets/destination/image-moon.png`,
    },]);

    const information=[
        {
            heading:"moon",
            description:`See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
            image:`assets/destination/image-moon.png`,
        },
        {
            heading:"mars",
            description:`Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
            image:`assets/destination/image-mars.png`,
        },
        {
            heading:"europa",
            description:`The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
            image:`assets/destination/image-europa.png`,
        },
        {
            heading:"titan",
            description:`The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
            image:`assets/destination/image-titan.png`,
        }

    ]
    const planetfilter = (e)=>{
       
       let planetfilter =  information.filter((element)=>{
            return element.heading === e.target.value;
        });
        setPlanet(planetfilter);
    }
    useEffect(()=>{
        document.title = "Destination"
    }, [])
    return(
        <div className="destination">
            <Subheading heading="01 PICK YOUR DESTINATION"/>
            <div className="planet-btn">
                <ul>
                    <li> <button value="moon" onClick={(e)=>planetfilter(e)}>Moon</button> </li>
                    <li> <button value="mars" onClick={(e)=>planetfilter(e)}>MARS</button> </li>
                    <li> <button  value="europa" onClick={(e)=>planetfilter(e)}>EUROPA</button> </li>
                    <li> <button value="titan" onClick={(e)=>planetfilter(e)}>TITAN</button> </li>
                </ul>
                </div>
                {
                planet.map((item , index)=>{
                    return(
            <div className="planet-information" key={index}>
                <div className="image">
                    <img src={item.image} alt="" />
                </div>
                
                <div className="planet-full-information">
                
             
                      
                         <div className="planet-information-heading">
                    <h1>{item.heading.toUpperCase()}</h1>
                    </div>
                <div className="planet-information-description">
                    <p>
               {item.description}
                    </p>
                    </div>
                   
                </div>

            </div>
                
            )
        })
       }
        </div>
    )
}
export default Destination;