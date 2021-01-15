import React, { useState } from "react";
import { Box, TextField, Typography } from "@material-ui/core";
import "../Common.scss";
const FirstExample = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const changeFirstName = (e) => {
    setName({ ...name, firstName: e.target.value });
  };
  const changeLastName = (e) => {
    setName({ ...name, lastName: e.target.value });
  };
  return (
    <div className="div">
      <Box className="box">
        <h1>User Form</h1>
        <TextField
          name={name.firstName}
          onChange={changeFirstName}
          label="Enter First Name"
          variant="outlined"
          color="primary"
        />
        <div>
          <TextField
            name={name.lastName}
            onChange={changeLastName}
            label="Enter Last Name"
            variant="outlined"
            color="primary"
          />
        </div>
        <Typography>{JSON.stringify(name)}</Typography>
      </Box>
    </div>
  );
};
export default FirstExample;
