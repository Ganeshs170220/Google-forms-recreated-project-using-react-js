import React, { Fragment, useState } from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginForm = () => {
  const [enteredName, SetEnteredName] = useState("");
  const [errordisplay, SetErrorDisplay] = useState(true);

  const OnNameInputChangeHandler = (event) => {
    SetEnteredName(event.target.value);
  };
  
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim() === "") {
      SetErrorDisplay(false);
      return;
    } else {
      SetErrorDisplay(true);
    }
  };

  return (
    <Fragment>
      <form onSubmit={onSubmitHandler}>
        <Box
          margin={"auto"}
          marginTop={"5vh"}
          width={"40%"}
          p={"10px"}
          bgcolor={"white"}
          borderRadius={"10px"}
        >
          <Box display={"flex"}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={OnNameInputChangeHandler}
            />
          </Box>
          {!errordisplay && <Box color={"red"} pt={'10px'}>Name must not be empty.</Box>}
          <Box textAlign={"right"}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        </Box>
      </form>
    </Fragment>
  );
};

export default LoginForm;
