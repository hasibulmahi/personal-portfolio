import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;
// const navItems = ["Home", "Services", "Portfolios", "Blog", "Contact", "..."];
const navItems = [
  {
    text: "Home",
    permalink: "home",
  },
  {
    text: "Services",
    permalink: "services",
  },
  {
    text: "Portfolios",
    permalink: "portfolios",
  },
  {
    text: "Testimonials",
    permalink: "testimonials",
  },
  {
    text: "Contact",
    permalink: "contact",
  },
];

function Navigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Hasibul Mahi
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} id={item.permalink}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar
        component="nav"
        sx={{ bgcolor: "white", color: "black", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            fontSize={15}
            fontWeight={800}
            component="div"
            sx={{ display: { xs: "none", sm: "block", color: "#7E74F1" } }}
          >
            Hasibul Mahi
          </Typography>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
                marginLeft: "auto",
                marginRight: "auto",
              },
            }}
          >
            {navItems.map((item, i) => (
              <Button
                sx={{ textTransform: "capitalize", marginRight: "30px" }}
                key={i}
                href={`#${item.permalink}`}
              >
                {item.text}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block", ml: "auto" } }}>
            <Button
              sx={{ textTransform: "capitalize", borderColor: "#F1F1F1" }}
              variant="outlined"
              Link
              href="https://drive.google.com/file/d/1Wai9i630pjeQ0YoTmBA-xb78LOw6R4xA/view?usp=sharing"
            >
              Resume
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navigation;
