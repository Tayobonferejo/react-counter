import React, {useState} from "react";

function Component() {
    const [car, setCar] = useState({year: 2024, make: "Ford", model: "Mustang"});

    function handleYearChange(event) {

    }
    return (<div>
        <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
        <input type="number" value={car.year} onChange={handleYearChange}></input>
        <input type="number" value={car.make} onChange={handleYearChange}></input>
    </div>)
}

export default Component