import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
const linksArr = ["home", "diaries", "auth"];
const Header = () => {
  const [value, setValue] = useState(0);
  return (
    <AppBar sx={{ bgcolor: "transparent", position: "sticky" }}>
      <Toolbar>
        <TravelExploreIcon sx={{ color: "black" }} />
        <Tabs
          value={value}
          onChange={(e, val) => setValue(val)}
          sx={{ ml: "auto", textDecoration: "none" }}
        >
          {linksArr.map((link) => (
            <Tab
              LinkComponent={Link}
              to={`${link === "home" ? "/" : link}`}
              sx={{
                textDecoration: "none",
                ":hover": {
                  textDecoration: "underline",
                  textUnderlineOffset: "18px",
                },
              }}
              key={link}
              label={link}
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
