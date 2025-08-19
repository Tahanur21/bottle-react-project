import { useEffect, useState } from "react";
import Bottle from "../../bottle/Bottle";
import './Bottles.css';


const Bottles = () => {
    const [bottles, setBottle] = useState([]);
    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottle(data))
    },[])
    const [card, setCard] = useState([]);
  const handleAddToCard = bottle =>{
         const newCard =[...card, bottle];
        setCard(newCard);
  }

    return (
        <div>
            <h2>Bottles Here : {bottles.length}</h2>
            <h2>Card Advailable : {card.length}</h2>
            <div className="card">
                {
                    bottles.map(bottle => <Bottle 
                        key={bottle.id} 
                        bottle={bottle}
                        handleAddToCard={handleAddToCard}
                        ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;