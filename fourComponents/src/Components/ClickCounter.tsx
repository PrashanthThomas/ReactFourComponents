import { useState } from "react";

function ClickCounter() {
  let [count, setCount] = useState(0);
  return (
    <>
      <h1>You have clicked the Button: {count} Times</h1>
      <button onClick={() => setCount(++count)}>Click</button>
    </>
  );
}

export default ClickCounter;
