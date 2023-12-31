import React from "react";
import { TextField, Box, Typography } from "@mui/material";
const Paragraph = ({ toggleValue }) => {
  return (
    <>
      <Box>
        <Box display={"flex"}>
          <TextField
            fullWidthu
            id="filled-basic"
            placeholder="Question"
            variant="filled"
            sx={{
              ".MuiInputBase-input": { width: "300px" },
            }}
          />
          {toggleValue && (
            <Typography variant="body1">
              <span style={{ color: "red", fontSize: "30px" }}>*</span>
            </Typography>
          )}
        </Box>
        <Box>
          <TextField
            disabled
            fullWidth
            id="filled-disabled"
            defaultValue="Long answer"
            variant="standard"
            sx={{
              ".MuiInputBase-input": { width: "300px" },
              pt: "20px",
            }}
          />
        </Box>
      </Box>

      {/* <Required /> */}
    </>
  );
};

export default Paragraph;
