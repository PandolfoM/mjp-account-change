import { useState } from "react";
import AccountType from "./components/AccountType";
import Confirmation from "./components/Confirmation";
import Form from "./components/Form";
import Success from "./components/Success";
import "./index.css";
import { Box, MantineProvider, MediaQuery } from "@mantine/core";

function App() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    type: "1",
    network: "",
    name: "",
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
    allSites: "0",
  });
  const [site, addSite] = useState([{ site: "" }]);

  const componentList = [
    <AccountType
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      site={site}
      addSite={addSite}
    />,
    <Form
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <Confirmation
      formData={formData}
      page={page}
      setPage={setPage}
      site={site}
    />,
    <Success />,
  ];

  return (
    <MantineProvider
      theme={{
        globalStyles: (theme) => ({
          "*": {
            boxSizing: "border-box",
            margin: "0",
            padding: "0",
            userSelect: "none",
            fontFamily: "Poppins"
          },

          html: {
            width: "100%",
            height: "100%",
          },

          body: {
            background: theme.fn.linearGradient(
              280,
              "rgba(61, 61, 61, 1) 0%",
              "rgba(36, 36, 36, 1) 35%",
              "rgba(36, 36, 36, 1) 100%"
            ),
          },
        }),
        colors: {
          accent: ["#1789fc"]
        }
      }}
      withGlobalStyles
      withNormalizeCSS>
      <MediaQuery
        query="(max-width: 420px)"
        styles={(theme) => ({ width: "100vw", maxWidth: "100%" })}>
        <MediaQuery
          query="(max-width: 960px)"
          styles={(theme) => ({ width: "80vw", maxWidth: "100%" })}>
          <MediaQuery
            query="(min-width: 961px)"
            styles={(theme) => ({ width: "40vw", maxWidth: "40rem" })}>
            <Box
              component="div"
              sx={{
                padding: "1rem",
                top: "50%",
                left: "50%",
                position: "absolute",
                background: "white",
                overflow: "hidden",
                borderRadius: "0.3rem",
                boxShadow: "3px 5px 10px 1px rgba(0, 0, 0, 0.5)",
                transform: "translate(-50%, -50%)",
              }}>
              {componentList[page]}
            </Box>
          </MediaQuery>
        </MediaQuery>
      </MediaQuery>
    </MantineProvider>
  );
}

export default App;
