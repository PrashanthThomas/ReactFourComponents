import { MouseEvent, useState } from "react";

interface Props {
  title: string;
  fruits: string[];
}

function MenuSideBar(props: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleEvent = (event: MouseEvent) => {
    console.log(event);
    console.log("Text Content:" + " " + event.target.textContent);
  };
  // cities = [];
  return (
    <>
      <h1>{props.title}</h1>
      {props.fruits.length === 0 && <p>No cities to display</p>}
      <ul className="list-group">
        {props.fruits.map((fruit, index) => {
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
              {fruit}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MenuSideBar;
