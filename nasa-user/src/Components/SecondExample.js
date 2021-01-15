import { Button } from "@material-ui/core";
import React, { useState } from "react";
const SecondExample = () => {
  const [items, setItems] = useState([]);
  const addNumber = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <Button onClick={addNumber}>Add a Number</Button>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>
    </div>
  );
};
export default SecondExample;
