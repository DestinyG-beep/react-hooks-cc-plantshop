import React, {useState} from "react";

function PlantCard() {

  const [whetherStocked, inStock] = useState(true);

  const handleClick = () => {
    inStock(!whetherStocked)
  };
  
  return (
    <li className="card" data-testid="plant-item">
      <img src={"plant.image"} alt={"plant.name"} />
      <h4>{"plant.name"}</h4>
      <p>Price: {"plant.price"}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
