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
  const pathname = window.location.pathname;
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
            <>
              {pathname === "/In" ? (
                <>
                {index === 0 ? (
                  <ListItem button key={text} id={"button_manu"}>
                    <ListItemIcon id={"button_icons2"}>
                      <FaHome
                        className="icons"
                        onClick={() => navigate("/In")}
                      />
                    </ListItemIcon>
                  </ListItem>
                ) : index === 1 ? (
                  <ListItem button key={text} id={"button_manu"}>
                    <ListItemIcon id={"button_icons"}>
                      <FaLanguage
                        className="icons"
                        onClick={() => navigate("/Matching")}
                      />
                    </ListItemIcon>
                  </ListItem>
                ) : index === 2 ? (
                  <ListItem button key={text} id={"button_manu"}>
                    <ListItemIcon id={"button_icons"}>
                      <FaShoppingCart
                        className="icons"
                        onClick={() => navigate("/Order")}
                      />
                    </ListItemIcon>
                  </ListItem>
                ) : index === 3 ? (
                  <ListItem button key={text} id={"button_manu"}>
                    <ListItemIcon id={"button_icons"}>
                      <IoChatbubblesSharp className="icons" 
                      onClick={() => navigate("/Chat")}
                      />
                    </ListItemIcon>
                  </ListItem>
                )  : index === 4 ? (
                  <ListItem button key={text} id={"button_manu"}>
                    <ListItemIcon id={"button_icons"}>
                      <IoNotifications
                        className="icons"
                        onClick={() => navigate("/Notification")}
                      />
                    </ListItemIcon>
                  </ListItem>
                ) : null}
              </>
              ) : pathname === "/Matching" ? (
                <>
                {index === 0 ? (
                  <ListItem button key={text} id={"button_manu"}>
                    <ListItemIcon id={"button_icons"}>
                      <FaHome
                        className="icons"
                        onClick={() => navigate("/In")}
                      />
                    </ListItemIcon>
                  </ListItem>
                ) : index === 1 ? (
                  <ListItem button key={text} id={"button_manu"}>
                    <ListItemIcon id={"button_icons2"}>
                      <FaLanguage
                        className="icons"
                        onClick={() => navigate("/Matching")}
                      />
                    </ListItemIcon>
                  </ListItem>
                ) : index === 2 ? (
                  <ListItem button key={text} id={"button_manu"}>
                    <ListItemIcon id={"button_icons"}>
                      <FaShoppingCart
                        className="icons"
                        onClick={() => navigate("/Order")}
                      />
                    </ListItemIcon>
                  </ListItem>
                ) : index === 3 ? (
                  <ListItem button key={text} id={"button_manu"}>
                    <ListItemIcon id={"button_icons"}>
                      <IoChatbubblesSharp className="icons" 
                      onClick={() => navigate("/Chat")}
                      />
                    </ListItemIcon>
                  </ListItem>
                )  : index === 4 ? (
                  <ListItem button key={text} id={"button_manu"}>
                    <ListItemIcon id={"button_icons"}>
                      <IoNotifications
                        className="icons"
                        onClick={() => navigate("/Notification")}
                      />
                    </ListItemIcon>
                  </ListItem>
                ) : null}
              </>
              ) : pathname === "/Order" ? (
                <>
                {index === 0 ? (
                  <ListItem button key={text} id={"button_manu"}>
                    <ListItemIcon id={"button_icons"}>
                      <FaHome
                        className="icons"
                        onClick={() => navigate("/In")}
                      />
                    </ListItemIcon>
                  </ListItem>
                ) : index === 1 ? (
                  <ListItem button key={text} id={"button_manu"}>
                    <ListItemIcon id={"button_icons"}>
                      <FaLanguage
                        className="icons"
                        onClick={() => navigate("/Matching")}
                      />
                    </ListItemIcon>
                  </ListItem>
                ) : index === 2 ? (
                  <ListItem button key={text} id={"button_manu"}>
                    <ListItemIcon id={"button_icons2"}>
                      <FaShoppingCart
                        className="icons"
                        onClick={() => navigate("/Order")}
                      />
                    </ListItemIcon>
                  </ListItem>
                ) : index === 3 ? (
                  <ListItem button key={text} id={"button_manu"}>
                    <ListItemIcon id={"button_icons"}>
                      <IoChatbubblesSharp className="icons" 
                      onClick={() => navigate("/Chat")}
                      />
                    </ListItemIcon>
                  </ListItem>
                )  : index === 4 ? (
                  <ListItem button key={text} id={"button_manu"}>
                    <ListItemIcon id={"button_icons"}>
                      <IoNotifications
                        className="icons"
                        onClick={() => navigate("/Notification")}
                      />
                    </ListItemIcon>
                  </ListItem>
                ) : null}
              </>
              ) :pathname === "/Chat" ? (
                <>
                {index === 0 ? (
                  <ListItem button key={text} id={"button_manu"}>
                    <ListItemIcon id={"button_icons"}>
                      <FaHome
                        className="icons"
                        onClick={() => navigate("/In")}
                      />
                    </ListItemIcon>
                  </ListItem>
                ) : index === 1 ? (
                  <ListItem button key={text} id={"button_manu"}>
                    <ListItemIcon id={"button_icons"}>
                      <FaLanguage
                        className="icons"
                        onClick={() => navigate("/Matching")}
                      />
                    </ListItemIcon>
                  </ListItem>
                ) : index === 2 ? (
                  <ListItem button key={text} id={"button_manu"}>
                    <ListItemIcon id={"button_icons"}>
                      <FaShoppingCart
                        className="icons"
                        onClick={() => navigate("/Order")}
                      />
                    </ListItemIcon>
                  </ListItem>
                ) : index === 3 ? (
                  <ListItem button key={text} id={"button_manu"}>
                    <ListItemIcon id={"button_icons2"}>
                      <IoChatbubblesSharp className="icons" 
                      onClick={() => navigate("/Chat")}
                      />
                    </ListItemIcon>
                  </ListItem>
                )  : index === 4 ? (
                  <ListItem button key={text} id={"button_manu"}>
                    <ListItemIcon id={"button_icons"}>
                      <IoNotifications
                        className="icons"
                        onClick={() => navigate("/Notification")}
                      />
                    </ListItemIcon>
                  </ListItem>
                ) : null}
              </>
              ):(<>
                {index === 0 ? (
                  <ListItem button key={text} id={"button_manu"}>
                    <ListItemIcon id={"button_icons"}>
                      <FaHome
                        className="icons"
                        onClick={() => navigate("/In")}
                      />
                    </ListItemIcon>
                  </ListItem>
                ) : index === 1 ? (
                  <ListItem button key={text} id={"button_manu"}>
                    <ListItemIcon id={"button_icons"}>
                      <FaLanguage
                        className="icons"
                        onClick={() => navigate("/Matching")}
                      />
                    </ListItemIcon>
                  </ListItem>
                ) : index === 2 ? (
                  <ListItem button key={text} id={"button_manu"}>
                    <ListItemIcon id={"button_icons"}>
                      <FaShoppingCart
                        className="icons"
                        onClick={() => navigate("/Order")}
                      />
                    </ListItemIcon>
                  </ListItem>
                ) : index === 3 ? (
                  <ListItem button key={text} id={"button_manu"}>
                    <ListItemIcon id={"button_icons"}>
                      <IoChatbubblesSharp className="icons" 
                      onClick={() => navigate("/Chat")}
                      />
                    </ListItemIcon>
                  </ListItem>
                )  : index === 4 ? (
                  <ListItem button key={text} id={"button_manu"}>
                    <ListItemIcon id={"button_icons2"}>
                      <IoNotifications
                        className="icons"
                        onClick={() => navigate("/Notification")}
                      />
                    </ListItemIcon>
                  </ListItem>
                ) : null}
              </>)}
              
            </>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
