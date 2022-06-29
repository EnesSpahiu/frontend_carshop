import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React from "react";
import useStyle from "./NavbarStyle";

type NavbarProps = {
  site: string,
}

export default function Navbar(props: NavbarProps) {
  const [value, setValue] = React.useState(0);

  const classes = useStyle();

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container className={classes.containerClass}>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <Tab label="Home" href="/" defaultChecked={props.site === "Home" ? true : false}/>
          <Tab label="Login" href="/login" defaultChecked={props.site === "Login" ? true : false}/>
          <Tab label="About us" href="/aboutus" />
          <Tab label="Contact us" href="/contactus" />
        </Tabs>
      </Box>
    </Container>
  );
}
