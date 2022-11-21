import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import {
  faEnvelope,
  faLock,
  faNetworkWired,
  faSignature,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Flex, Title, Transition } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import usePasswordValidation from "../../hooks/usePasswordValidation";

const toastSlideIn = {
  in: { opacity: 1, transform: "translateX(0)" },
  out: { transform: "translateX(-100%)", opacity: 0 },
  transitionProperty: "transform, opacity",
};

function Form(props) {
  const { formData, setFormData, page, setPage } = props;
  const [error, setError] = useState("");
  const [errorOpen, setErrorOpen] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const errorTxt = useRef(null);

  const [validLength, hasNumber, upperCase, lowerCase, match, specialChar] =
    usePasswordValidation({
      firstPassword: formData.password,
      secondPassword: formData.passwordConfirm,
    });

  useEffect(() => {
    if (errorOpen) return;
    setTimeout(() => {
      setErrorOpen(false);
    }, 5000);
  }, [errorOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateInfo = (e) => {
    e.preventDefault();
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (
      validLength &&
      hasNumber &&
      upperCase &&
      match &&
      specialChar &&
      formData.email.match(regex)
    ) {
      setPage(page + 1);
    }

    if (!formData.email.match(regex)) {
      setErrorOpen(true);
      setError("Not a valid email!");
      return;
    }
    if (!validLength || !hasNumber || !upperCase || !match || !specialChar) {
      setErrorOpen(true);
      setError("Password does not meet requirements!");
      return;
    }
  };

  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
      onChange={handleChange}
      onSubmit={validateInfo}>
      <Title order={2} ff={"Poppins"} fz={"1.4rem"}>Input Details</Title>
      <Title order={4} ff={"Poppins"} fz={"1rem"} fw="500">{formData.type === "1" ? "Change Password" : "New Account"}</Title>
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
          name="name"
          required
          defaultValue={formData.name}
          placeholder="Name"></Box>
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
          name="network"
          required
          defaultValue={formData.network}
          placeholder="Network Name"></Box>
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
          type="text"
          name="email"
          defaultValue={formData.email}
          placeholder="Email"></Box>
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
          name="username"
          required
          defaultValue={formData.username}
          placeholder="Username"></Box>
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
          name="password"
          defaultValue={formData.password}
          placeholder="Password"></Box>
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
          name="passwordConfirm"
          defaultValue={formData.passwordConfirm}
          placeholder="Confirm Password"></Box>
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

      <Box
        component="ul"
        sx={{ marginBottom: "10px", fontWeight: "bold", textIndent: "1rem" }}>
        <Box
          component="li"
          sx={{
            transition: "all 500ms ease",
            listStyle: "none",
            color: validLength ? "limegreen" : "red",
          }}>
          12 Characters
        </Box>
        <Box
          component="li"
          sx={{
            transition: "all 500ms ease",
            listStyle: "none",
            color: upperCase ? "limegreen" : "red",
          }}>
          Uppercase letter
        </Box>
        <Box
          component="li"
          sx={{
            transition: "all 500ms ease",
            listStyle: "none",
            color: hasNumber ? "limegreen" : "red",
          }}>
          At least 1 number
        </Box>
        <Box
          component="li"
          sx={{
            transition: "all 500ms ease",
            listStyle: "none",
            color: specialChar ? "limegreen" : "red",
          }}>
          At least 1 symbol
        </Box>
        <Box
          component="li"
          sx={{
            transition: "all 500ms ease",
            listStyle: "none",
            color: match ? "limegreen" : "red",
          }}>
          Passwords Match
        </Box>
      </Box>

      <Box sx={{ width: "100%", height: "2.5rem" }}>
        <Transition
          mounted={errorOpen}
          transition={toastSlideIn}
          duration={300}
          timingFunction="ease">
          {(styles) => (
            <Title
              order={4}
              sx={{
                ...styles,
                color: "red",
                left: "1rem",
                bottom: "1rem",
                minHeight: "2.5rem",
                padding: "0.5rem",
                zIndex: "9999",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
              ref={errorTxt}>
              {error}
            </Title>
          )}
        </Transition>
      </Box>

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
          Next
        </Button>
      </Flex>
    </Box>
  );
}

export default Form;
