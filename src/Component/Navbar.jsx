import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Drawer,
  ImageListItem,
  List,
  ListItem,
  ListItemText,
  Stack,
  useScrollTrigger,
  Slide,
  CssBaseline,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Badge,
} from "@mui/material";
import CusAccordion from "./CusAccordion";
import { Link } from "react-router-dom";
const drawerWidth = 240;

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
const ScrollToTop = () => {
  window.scrollTo(0, 0);
};
export default function Navbar(props) {
  const { color } = props;
  const [isDown, setIsDown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openDropdown = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setIsDown(true);
      } else {
        setIsDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    {
      link: "/",
      name: "Home",
    },
    {
      name: "Events",
    },{
      link:"/Workshops",
      name:"Workshops"
    },
    {
      link: "/ContactUs",
      name: "Contact Us",
    },{
      name:"Developers",
      link:"/Developers"
    }
  ];

  const dayMenuItems = [
    { link: "/AllEvents", name: "All Events" },
    { link: "/Day1", name: "Day 1 Events" },
    { link: "/Day2", name: "Day 2 Events" },
    { link: "/Day3", name: "Day 3 Events" },
  ];

  const drawer = (
    <Stack direction="column">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          pr: 2,
        }}
      >
        <CloseIcon
          sx={{ color: "#fff" }}
          onClick={() => {
            setMobileOpen(false);
          }}
        />
      </Toolbar>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          mt: [10],
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {navItems.map((item, index) =>
          item.name === "Events" ? (
            <React.Fragment key={index}>
              {isMobile ? (
                <Box sx={{ width: ["35%", "20%"], ml: [2, 5] }}>
                  <CusAccordion
                    head={
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: "1.3rem",
                          textAlign: "center",
                          color: "#fff",
                        }}
                      >
                        {item.name}
                      </Typography>
                    }
                    body={
                      <>
                        {dayMenuItems.map((menuItem, menuIndex) => (
                          <Link
                            to={menuItem.link}
                            color={"inherit"}
                            style={{ textDecoration: "none" }}
                            key={index}
                            onClick={ScrollToTop}
                          >
                            <Typography
                              key={menuIndex}
                              onClick={ScrollToTop}
                              color={"inherit"}
                              underline="hover"
                              sx={{
                                fontSize: [
                                  "1rem",
                                  "1rem",
                                  "12px",
                                  "12px",
                                  ".85rem",
                                ],
                                letterSpacing: 1,
                                py: 1,
                                color: "white",
                              }}
                            >
                              {menuItem.name}
                            </Typography>
                          </Link>
                        ))}
                      </>
                    }
                  />
                </Box>
              ) : (
                <>
                  <ListItem
                    button
                    onClick={handleDropdownClick}
                    sx={{
                      fontWeight: "medium",
                      color: "#fff",
                      ":hover": {
                        color: "#fff",
                      },
                    }}
                  >
                    <ListItemText
                      sx={{
                        fontWeight: "medium",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onClick={ScrollToTop}
                      disableTypography
                      primary={
                        <Typography
                          style={{
                            fontWeight: "bold",
                            fontSize: "1.3rem",
                            textAlign: "center",
                            color: "#fff",
                          }}
                        >
                          {item.name}
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Menu
                    anchorEl={anchorEl}
                    open={openDropdown}
                    onClose={handleDropdownClose}
                    PaperProps={{
                      sx: {
                        mt: 1,
                        borderRadius: "10px",
                        background: "#fff",
                        p: 0.5,
                        fontSize: [17],
                        fontWeight: "600",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        width: "13rem",
                        border: "3.5px solid #FFB700",
                        left: "50%",
                        transform: "translateX(-50%)",
                      },
                    }}
                  >
                    {dayMenuItems.map((menuItem, menuIndex) => (
                      <Link
                        to={menuItem.link}
                        style={{ color: "black", textDecoration: "none" }}
                        onClick={ScrollToTop}
                        underline="none"
                      >
                        <MenuItem
                          key={menuIndex}
                          onClick={() => {
                            handleDropdownClose();
                            setMobileOpen(false);
                          }}
                          sx={{
                            fontSize: [18],
                            fontWeight: "600",
                            color: "#000",
                          }}
                        >
                          {menuItem.name}
                        </MenuItem>
                      </Link>
                    ))}
                  </Menu>
                </>
              )}
            </React.Fragment>
          ) : (
            <Link
              to={item.link}
              color={"inherit"}
              underline="none"
              key={index}
              style={{ textDecoration: "none" }}
            >
              <ListItem
                onClick={() => {
                  setMobileOpen(false);
                }}
                button
                sx={{
                  fontWeight: "medium",
                  color: "#fff",
                  ":hover": {
                    color: "#fff",
                  },
                }}
              >
                <ListItemText
                  sx={{
                    fontWeight: "medium",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={ScrollToTop}
                  disableTypography
                  primary={
                    <Typography
                      style={{
                        fontWeight: "bold",
                        fontSize: "1.3rem",
                        textAlign: "center",
                        color: "#fff",
                      }}
                    >
                      {item.name}
                    </Typography>
                  }
                />
              </ListItem>
            </Link>
          )
        )}
      </List>
    </Stack>
  );

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            backgroundColor: "transparent",
            boxShadow: 0,
          }}
        >
          <Toolbar
            sx={{
              backgroundColor: "transparent",
              py: [0, 0, 2, 1, 1],
              px: [0, 1, 1, 6, "10%"],
              color: isDown ? "#000" : color,
              bgcolor: isDown ? "rgba(255,255,255,.6)" : null,
              backdropFilter: isDown ? "blur(25px)" : null,
              borderRadius: isDown
                ? ["0 0 .7rem .7rem", "0 0 1.5rem 1.5rem"]
                : null,
              boxShadow: isDown ? 3 : null,
              justifyContent: "space-between",
            }}
          >
            <Stack
              direction={"row"}
              width={"100%"}
              gap={1}
              sx={{
                display: ["flex", "flex", "none"],
                justifyContent: "space-between",
              }}
            >
              <Link color={"inherit"} underline="none" to="/home">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    bg: "transparent",
                  }}
                >
                  <ImageListItem>
                    <Link color={"inherit"} underline="none" to="/">
                      <Box
                        component="img"
                        src="/Assets/logo.png"
                        sx={{
                          width:"18%",
                          scale: 1.0,
                          ml: 2,
                        }}
                        alt="logo"
                      />
                    </Link>
                  </ImageListItem>
                </Box>
              </Link>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IconButton
                  onClick={handleDrawerToggle}
                  color="inherit"
                  aria-label="open drawer"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Stack>

            <Link color={"inherit"} underline="none" to="/">
              <ImageListItem sx={{ display: ["none", "none", "none", "flex"] }}>
                <Box
                  component="img"
                  src="/Assets/logo.png"
                  sx={{
                    width: "6%",
                    marginTop: "15px",
                    scale: 2.0,
                  }}
                  alt="logo"
                />
              </ImageListItem>
            </Link>
            <Box sx={{ display: { xs: "none", md: "flex", gap: "1rem" } }}>
              {navItems.map((item, index) =>
                item.name === "Events" ? (
                  <Box key={index}>
                    <Button
                      onClick={handleDropdownClick}
                      sx={{
                        fontSize: [17],
                        fontWeight: "600",
                        color: isDown ? "#000" : color,
                        textTransform: "none",
                        textDecoration: "none",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255,0.1)",
                        },
                      }}
                    >
                      {item.name}
                    </Button>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleDropdownClose}
                      PaperProps={{
                        sx: {
                          mt: 1,
                          borderRadius: "10px",
                          background: "#fff",
                          p: 0.5,
                          fontSize: [17],
                          fontWeight: "600",
                          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                          width: "13rem",
                          border: "3.5px solid #FFB700",
                        },
                      }}
                    >
                      <Link
                        to="/pizza"
                        color="inherit"
                        underline="none"
                        onClick={ScrollToTop}
                      >
                        <MenuItem
                          onClick={handleDropdownClose}
                          sx={{
                            fontSize: [18],
                            fontWeight: "600",
                            color: "#000",
                          }}
                        >
                          Pizza
                        </MenuItem>
                      </Link>
                      <Link
                        to="/burger"
                        color="inherit"
                        underline="none"
                        onClick={ScrollToTop}
                      >
                        <MenuItem
                          onClick={handleDropdownClose}
                          sx={{
                            fontSize: [18],
                            fontWeight: "600",
                            color: "#000",
                          }}
                        >
                          Burgers
                        </MenuItem>
                      </Link>
                    </Menu>
                  </Box>
                ) : (
                  <Button
                    key={index}
                    href={item.link}
                    sx={{
                      fontSize: [17],
                      fontWeight: "600",
                      color: isDown ? "#000" : color,
                      textTransform: "none",
                      textDecoration: "none",
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.1)",
                      },
                    }}
                    onClick={ScrollToTop}
                  >
                    {item.name}
                  </Button>
                )
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Box
        display={{ xs: "block", md: "none" }}
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          anchor="right"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
              background:
                "linear-gradient(180.83deg, #181818 0%, #181818 100%)",
              transition: "width 0.3s ease-in-out",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
