import React, {useState} from "react";

function PlantCard({plant, setPlants}) {
  const [inStock, setInStock] = useState(true);
  
  function handleDelete() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    }).then(() => {
      setPlants((prevPlants) => prevPlants.filter((p) => p.id !== plant.id));
    });
  }
  

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={() => setInStock(false)}>In Stock</button>
      ) : (
        <button onClick={() => setInStock(true)}>Out of Stock</button>
      )}
      <br />
      <button 
        onClick={handleDelete} 
        style={{ backgroundColor: "brown", color: "white", marginTop: "10px" }}
      >
        Delete
      </button>
    </li>
  );
}

export default PlantCard;
