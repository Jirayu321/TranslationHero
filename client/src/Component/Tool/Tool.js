import * as React from "react";
import { Box } from "@mui/material";
import Drawer from "../Drawer/DrawerTranslate";
import Navbars from "../Navbar/navbarTanslater";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

import Icons from "../../Images/icons_ai.png";

export default function Tool() {
  const editorRef = React.useRef();
  const { innerWidth: width } = window;
  const getSunEditorInstance = (sunEditor) => {
    editorRef.current = sunEditor;
  };
  return (
    <div className="App-body3">
      <header className="App-header">
        <Navbars />
      </header>
      <Box sx={{ display: "flex", width: "100% " }}>
        <Drawer />
        <Box component="main">
          <div style={{ marginTop: 70, marginLeft: 21, width: width * 0.9 }}>
            <p
              style={{
                textAlign: "left",
                fontSize: 30,
                fontWeight: 500,
                float: "left",
              }}
            >
              Tool
            </p>
            <div style={{ float: "none", marginBottom: 10, textAlign: "end" }}>
              <button
                style={{
                  background: "#F6FBFE",
                  border: "none",
                  width: 200,
                  height: 50,
                  marginRight: 40,
                }}
              >
                <img
                  alt="Icons"
                  src={Icons}
                  style={{ float: "left", marginLeft: 50, width: 25 }}
                />
                <p style={{ marginRight: 50 }}>helper</p>
              </button>
              <button
                style={{
                  background: "#FFDB66",
                  border: "none",
                  width: 200,
                  height: 50,
                }}
              >
                Submit work
              </button>
            </div>

            <SunEditor
              height="500px"
              style={{ textAlign: "left" }}
              getSunEditorInstance={getSunEditorInstance}
            />
          </div>
        </Box>
      </Box>
    </div>
  );
}
