import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
const ThirdExample = () => {
  const [id, setId] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setId(id + 1);
    }, 10000);
  }, [id]);
  return <div>Your ID:{id}</div>;
};
export default ThirdExample;
