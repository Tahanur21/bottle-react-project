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

    return (
        <div>
            <h2>Bottles Here : {bottles.length}</h2>
            <div className="card">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;