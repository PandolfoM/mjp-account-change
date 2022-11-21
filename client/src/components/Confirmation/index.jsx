import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faLock,
  faNetworkWired,
  faSignature,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Flex, Title } from "@mantine/core";
import { useState } from "react";

function Confirmation(props) {
  const { formData, page, setPage, site } = props;
  const [status, setStatus] = useState("Send");
  const [passwordShown, setPasswordShown] = useState(false);

  let displaySites = [];

  site.map((item, i) => {
    displaySites.push(item.site);
  });

  let filtered = displaySites.filter(function (el) {
    return el != "";
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    let formType;

    if (formData.type === "1") {
      formType = "Change Password";
    } else {
      formType = "New Account";
    }

    let details = {
      name: formData.name,
      network: formData.network,
      email: formData.email,
      username: formData.username,
      password: formData.password,
      form: formType,
      sites: formData.allSites === "1" ? "All Sites" : filtered.join(", "),
    };

    const response = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    const sent = await response.json();
    if (sent === "error") {
      setStatus("Error!");
    } else {
      setPage(page + 1);
    }
  };

  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
      noValidate
      onSubmit={handleSubmit}>
      <Title order={2} ff={"Poppins"} fz={"1.4rem"}>
        Confirm Details
      </Title>
      <Title order={4} ff={"Poppins"} fz={"1rem"} fw="500">
        {formData.type === "1" ? "Change Password" : "New Account"}
      </Title>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "0.3rem",
        }}>
        <FontAwesomeIcon
          icon={faLocationDot}
          style={{
            position: "absolute",
            top: "50%",
            left: "1rem",
            transform: "translate(0, -50%)",
          }}
        />
        <Box
          sx={{ width: "100%" }}
          component="input"
          type="text"
          defaultValue={
            formData.allSites === "1" ? "All Sites" : filtered.join(", ")
          }
          disabled
          placeholder="Sites"></Box>
      </Box>

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "0.3rem",
        }}>
        <FontAwesomeIcon
          icon={faSignature}
          style={{
            position: "absolute",
            top: "50%",
            left: "1rem",
            transform: "translate(0, -50%)",
          }}
        />
        <Box
          sx={{ width: "100%" }}
          component="input"
          type="text"
          disabled
          defaultValue={formData.name}></Box>
      </Box>

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "0.3rem",
        }}>
        <FontAwesomeIcon
          icon={faNetworkWired}
          style={{
            position: "absolute",
            top: "50%",
            left: "1rem",
            transform: "translate(0, -50%)",
          }}
        />
        <Box
          sx={{ width: "100%" }}
          component="input"
          type="text"
          disabled
          defaultValue={formData.network}></Box>
      </Box>

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "0.3rem",
        }}>
        <FontAwesomeIcon
          icon={faEnvelope}
          style={{
            position: "absolute",
            top: "50%",
            left: "1rem",
            transform: "translate(0, -50%)",
          }}
        />
        <Box
          sx={{ width: "100%" }}
          component="input"
          type="email"
          disabled
          defaultValue={formData.email}></Box>
      </Box>

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "0.3rem",
        }}>
        <FontAwesomeIcon
          icon={faUser}
          style={{
            position: "absolute",
            top: "50%",
            left: "1rem",
            transform: "translate(0, -50%)",
          }}
        />
        <Box
          sx={{ width: "100%" }}
          component="input"
          type="text"
          disabled
          defaultValue={formData.username}></Box>
      </Box>

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "0.3rem",
        }}>
        <FontAwesomeIcon
          icon={faLock}
          style={{
            position: "absolute",
            top: "50%",
            left: "1rem",
            transform: "translate(0, -50%)",
          }}
        />
        <Box
          sx={{ width: "100%" }}
          component="input"
          type={passwordShown ? "text" : "password"}
          disabled
          defaultValue={formData.password}></Box>
        <FontAwesomeIcon
          icon={passwordShown ? faEye : faEyeSlash}
          style={{
            position: "absolute",
            cursor: "pointer",
            marginLeft: "-25px",
            top: "50%",
            right: "1rem",
            transform: "translate(0, -50%)",
          }}
          onClick={() => setPasswordShown(!passwordShown)}
        />
      </Box>
      <Box sx={{ width: "100%", height: "2.5rem" }}></Box>
      <Flex
        gap={"1rem"}
        justify="flex-end"
        sx={{ width: "100%", height: "2.5rem" }}>
        <Button
          sx={(theme) => ({
            width: "50%",
            position: "relative",
            color: "white",
            border: "none",
            background: theme.colors.accent[0],
            font: "inherit",
            transition: "all 500ms ease",
            borderRadius: "0.3rem",
            height: "100%",
            "&:hover": {
              transform: "scale(1.05)",
              background: theme.colors.accent[0],
            },
          })}
          onClick={() => setPage(page - 1)}>
          Previous
        </Button>
        <Button
          sx={(theme) => ({
            width: "50%",
            position: "relative",
            color: "white",
            border: "none",
            background: theme.colors.accent[0],
            font: "inherit",
            transition: "all 500ms ease",
            borderRadius: "0.3rem",
            height: "100%",
            "&:hover": {
              transform: "scale(1.05)",
              background: theme.colors.accent[0],
            },
          })}
          type="submit">
          {status}
        </Button>
      </Flex>
    </Box>
  );
}

export default Confirmation;
