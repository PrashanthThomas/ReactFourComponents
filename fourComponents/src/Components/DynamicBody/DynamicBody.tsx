import { MouseEvent } from "react";

interface Props {
  title: string;
  cities: string[];
}

function DynamicBody(props: Props) {
  const handleEvent = (event: MouseEvent) => {
    console.log(event);
    console.log("Text Content:" + " " + event.target.textContent);
  };
  // cities = [];
  return (
    <>
      <h1>{props.title}</h1>
      {props.cities.length === 0 && <p>No cities to display</p>}
      <ul className="list-group">
        {props.cities.map((city, index) => (
          <li className="list-group-item" key={index} onClick={handleEvent}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default DynamicBody;
