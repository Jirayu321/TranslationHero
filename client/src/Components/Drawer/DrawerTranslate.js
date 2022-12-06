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
import { BsTranslate } from "react-icons/bs";
import { MdSpaceDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function DrawerTranslate(props) {
  //   const pathname = window.location.pathname;
  const drawerWidth = 100;
  const navigate = useNavigate();
  const checkValue = props?.value;
  const languages = props?.languages;

  React.useEffect(() => {
    console.log("value :", typeof checkValue);
    if (checkValue) {
      console.log("value :", checkValue);
    } else {
      navigate("/Login");
    }
  }, [navigate, checkValue]);
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
      <Box sx={{ overflow: "hidden" }} className={"manuTranslate"}>
        <List>
          {["0", "1", "2", "3"].map((text, index) => (
            <ListItem button key={text} id={"button_manu_Translate"}>
              <ListItemIcon id={"icons_translate"}>
                {index === 0 ? (
                  <MdSpaceDashboard
                    style={{ fontSize: 30 }}
                    className="icons"
                    onClick={() => navigate("/Dashboard_freelance", {
                      state: {
                        languages: `${languages}`,
                        value: `${checkValue}`,
                      },
                    })
                  }
                  />
                ) : index === 1 ? (
                  <BsTranslate
                    className="icons"
                    onClick={() => navigate("/Tool", {
                      state: {
                        languages: `${languages}`,
                        value: `${checkValue}`,
                      },
                    })
                  }
                  />
                ) : // <></>
                index === 2 ? (
                  <IoChatbubblesSharp className="icons" />
                ) : index === 3 ? (
                  <IoNotifications
                    className="icons"
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
