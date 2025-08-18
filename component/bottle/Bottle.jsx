import './Bottle.css'

const Bottle = ({bottle}) => {
    console.log(bottle);
    const {name, image_url, price, description, id} = bottle;
    return (
        <div>
            <img className='img' src={image_url}/>
            <h4>Name : {name}</h4>
            <h4>Price : ${id}</h4>
        </div>
    );
};

export default Bottle;