import { MouseEvent } from "react";

function DynamicBody() {
  let cities = ["Bangalore", "Mangalore", "Delhi"];
  const handleEvent = (event: MouseEvent) => {
    console.log(event);
    console.log("Text Content:" + " " + event.target.textContent);
  };
  // cities = [];
  return (
    <>
      <h1>City list</h1>
      {cities.length === 0 && <p>No cities to display</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li className="list-group-item" key={index} onClick={handleEvent}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default DynamicBody;
