import React from 'react';
import "./Cards.css"
import { data } from './../../data';

const Cards = () => {
    const impData = data;
   
    return (
     <div>
        <div className="cards-group">
            <div className="cards">
                <h3>{impData[0].title}</h3>
                <div className="image">
                    <img src={impData[0].image}/>
                    <p>{impData[0].desc}</p>
                </div>
            </div>
            
            <div className="cards">
                <h3>{impData[1].title}</h3>
                <div className="image">
                    <img src={impData[1].image}/>
                    <p>{impData[1].desc}</p>
                </div>
            </div>

            <div className="cards">
                <h3>{impData[2].title}</h3>
                <div className="image">
                    <img src={impData[2].image}/>
                    <p>{impData[2].desc}</p>
                </div>
            </div>
        </div>
         <div className="cards-group">
            <div className="cards">
                <h3>{impData[3].title}</h3>
                <div className="image">
                    <img src={impData[3].image}/>
                    <p>{impData[3].desc}</p>
                </div>
            </div>
            
            <div className="cards">
                <h3>{impData[4].title}</h3>
                <div className="image">
                    <img src={impData[4].image}/>
                    <p>{impData[4].desc}</p>
                </div>
            </div>

            <div className="cards">
                <h3>{impData[5].title}</h3>
                <div className="image">
                    <img src={impData[5].image}/>
                    <p>{impData[5].desc}</p>
                </div>
            </div>
         
         
       
        </div>

        <div className="cards-group">
            <div className="cards">
                <h3>{impData[6].title}</h3>
                <div className="image">
                    <img src={impData[6].image}/>
                    <p>{impData[6].desc}</p>
                </div>
            </div>
            
            <div className="cards">
                <h3>{impData[7].title}</h3>
                <div className="image">
                    <img src={impData[7].image}/>
                    <p>{impData[7].desc}</p>
                </div>
            </div>

            <div className="cards">
                <h3>{impData[8].title}</h3>
                <div className="image">
                    <img src={impData[8].image}/>
                    <p>{impData[8].desc}</p>
                </div>
            </div>
        </div>
        <div className="cards-group">
            <div className="cards">
                <h3>{impData[9].title}</h3>
                <div className="image">
                    <img src={impData[9].image}/>
                    <p>{impData[9].desc}</p>
                </div>
            </div>
            
            <div className="cards">
                <h3>{impData[10].title}</h3>
                <div className="image">
                    <img src={impData[10].image}/>
                    <p>{impData[10].desc}</p>
                </div>
            </div>

            <div className="cards">
                <h3>{impData[11].title}</h3>
                <div className="image">
                    <img src={impData[11].image}/>
                    <p>{impData[11].desc}</p>
                </div>
            </div>
        </div>
     </div>
       
     );

     
     
};
export default Cards;
