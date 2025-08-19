import './Bottle.css'

const Bottle = ({bottle,handleAddToCard}) => {
    const {name, image_url, price,id} = bottle;
    return (
        <div className='small-card'>
            <img className='img' src={image_url}/>
            <h4>Name : {name}</h4>
            <h4>Price : ${price}</h4>
            <button onClick={()=>handleAddToCard(id)}>Purchase</button>
        </div>
    );
};

export default Bottle;