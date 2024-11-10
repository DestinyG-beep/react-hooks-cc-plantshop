import React, {useEffect} from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setPlants, result }) {
  
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(data => setPlants(data))
  }, [])

 

  return (
    <ul className="cards">{/* render PlantCards components in here */}</ul>
  );
}

export default PlantList;
