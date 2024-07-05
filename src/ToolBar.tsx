import { Box, Button, IconButton, Toolbar, styled } from "@mui/material";
import logo from "./assets/images/logo.svg";
import menu from "./assets/images/icon-menu.svg";
import cross from "./assets/images/icon-menu-close.svg";
import { useState } from "react";

const ToolBar = () => {
  const [togle, setTogle] = useState(false);
  const CustomButton = styled(Button)({
    color: "black",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "inherit",
      cursor: "default",
      color: "rgb(248 113 113)",
    },
  });
  const titles = ["Home", "New", "Popular", "trending", "Categories"];

  return (
    <>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton sx={{ width: "60px", height: "60px" }}>
          <img src={logo} alt="logo" />
        </IconButton>
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          {titles.map((title) => (
            <CustomButton key={title}>{title}</CustomButton>
          ))}
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <img src={menu} alt="menu icon" onClick={() => setTogle(!togle)} />
        </Box>
        {togle && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(0.5px)",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "75vw",
                height: "100vh",
                backgroundColor: "rgb(236 252 203)",
              }}
            >
              <Box
                sx={{
                  padding: "20px",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <img
                    onClick={() => setTogle(!togle)}
                    src={cross}
                    alt="closing menu icon"
                    className="w-8  justify-end hover:bg-neutral-400	 rounded-full"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {titles.map((title) => (
                    <CustomButton
                      key={title}
                      onClick={() => setTogle(!togle)}
                      sx={{ justifyContent: "flex-start" }}
                    >
                      {title}
                    </CustomButton>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Toolbar>
    </>
  );
};

export default ToolBar;
