import { MouseEvent, useState } from "react";

function MenuSideBar() {
  const [selectedIndex, setSelectedIndex] = useState(-1);
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
        {cities.map((city, index) => {
          return (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={index}
              onClick={() => setSelectedIndex(index)}
            >
              {city}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MenuSideBar;
