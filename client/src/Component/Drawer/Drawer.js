import * as React from "react";
import {
  ListItem,
  ListItemIcon,
  Box,
  Drawer,
  Toolbar,
  List,
} from "@mui/material";
import { IoChatbubblesSharp, IoNotifications } from "react-icons/io5";
import { FaHome, FaLanguage, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function DrawerInHome() {
//   const pathname = window.location.pathname;
  const drawerWidth = 100;
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      style={{ zIndex: 0, height: "100%" }}
    >
      <Toolbar />
      <Box sx={{ overflow: "hidden" }} className={"manu2"}>
        <List>
          {["0", "1", "2", "3", "4"].map((text, index) => (
            <ListItem button key={text} id={"button_manu"}>
              <ListItemIcon id={"button_icons"}>
                {index === 0 ? (
                  <FaHome className="icons" onClick={() => navigate("/In")} />
                ) : index === 1 ? (
                  <FaLanguage className="icons"
                  onClick={() => navigate("/Matching")}
                  />
                ) : index === 2 ? (
                  <FaShoppingCart
                    className="icons"
                    onClick={() => navigate("/Order")}
                  />
                ) : index === 3 ? (
                  <IoChatbubblesSharp className="icons" />
                ) : index === 4 ? (
                  <IoNotifications className="icons" 
                  // onClick={() => navigate("/Notification")}
                  />
                ) : null}
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
