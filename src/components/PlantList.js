import React, {useEffect} from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setPlants, result }) {
  
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(data => setPlants(data))
  }, [])
  
  const filteredPlants = result === "" ?
    [...plants] :
    plants.filter(plants.name(.includes(result())))

    function outputPlants() {
      return result.map(plant => {
        return <PlantCard key={plant.id} plant={plant}/>
      })
    }

  return (
    <ul className="cards">
      {outputPlants()}
    </ul>
  );
}

export default PlantList;
