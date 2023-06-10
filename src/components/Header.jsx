import React, { useState } from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Box, useStepContext } from "@mui/material";
import TextField from "@mui/material/TextField";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Button from "@mui/material/Button";
import FormTitle from "./FormTitle";
import { useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";
const MyComponent = styled("div")({
  paddingTop: "10px",
  paddingRight: "10px",
  width: "100%",
});

const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  // const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const [TitleChange, SetTitleChange] = useState("untitled form");
  const FormTitleChangeHander = (e) => {
    SetTitleChange(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        width={"100%"}
        height={"10vh"}
        bgcolor={"white"}
        lineHeight={"10vh"}
      >
        <Box
          width={isMediumScreen ? "60%" : isSmallScreen ? "100%" : "40%"}
          display={"flex"}
        >
          <Box mt={"10px"} ml={"10px"}>
            <FormatListBulletedIcon
              sx={{
                mr: "10px",
                color: "white",
                bgcolor: "#1565C0",
                px: "5px",
                py: "7px",
                borderRadius: "4px",
              }}
            />
          </Box>

          <Box pt={'30px'}>
            <FormTitle value={TitleChange} onChange={FormTitleChangeHander} />
          </Box>
        </Box>

        <Box display={"flex"}>
          <Box mt={"10px"}>
            <RemoveRedEyeOutlinedIcon sx={{ cursor: "pointer" }} />
          </Box>
          <Box>
            <Button variant="contained" sx={{ mx: "10px" }}>
              Send
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        bgcolor={"#1565C0"}
        height={"10px"}
        px={"10px"}
        sx={{
          WebkitBorderTopRightRadius: "10px",
          WebkitBorderTopLeftRadius: "10px",
        }}
        width={isMediumScreen ? "60%" : isSmallScreen ? "100%" : "40%"}
        margin={"auto"}
        mt={"10px"}
      ></Box>
      <Box
        width={isMediumScreen ? "60%" : isSmallScreen ? "100%" : "40%"}
        margin={"auto"}
        bgcolor={"white"}
        pb={"10px"}
        px={"10px"}
      >
        <MyComponent sx={{ ".MuiInputBase-input": { fontSize: "25px" } }}>
          <FormTitle value={TitleChange} onChange={FormTitleChangeHander} />
        </MyComponent>
        <MyComponent>
          <TextField
            fullWidth
            id="standard-basic"
            variant="standard"
            placeholder="Form description"
            sx={{
              ".MuiInputBase-input": { fontSize: "15px" },
            }}
          />
        </MyComponent>
      </Box>
    </div>
  );
};

export default Header;
