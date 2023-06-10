import React from "react";
import { Typography } from "@mui/material";
import {
  TextField,
  Box,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
const DatePickerData = ({toggleValue}) => {
  return (
    <>
      <Box display={"flex"}  flexDirection={"column"} >
        <Box display={'flex'}>
          <TextField
            id="filled-basic"
            placeholder="Question"
            variant="filled"
            sx={{
              ".MuiInputBase-input": { width: "300px" },
              pb: "20px",
            }}
          />
           {toggleValue && (
            <Typography variant="body1">
              <span style={{ color: "red", fontSize: "30px" }}>*</span>
            </Typography>
          )}
        </Box>
        <Box pb={"20px"} pl={'0px'}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker disabled />
          </LocalizationProvider>
        </Box>
      </Box>
    </>
  );
};

export default DatePickerData;
