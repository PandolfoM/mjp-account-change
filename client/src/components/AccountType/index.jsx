import {
  faLocationDot,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Flex, keyframes } from "@mantine/core";

function AccountType(props) {
  const { formData, setFormData, page, setPage, site, addSite } = props;
  const wiggle = keyframes({
    "0%": { transform: "rotate(10deg) translate(0, -50%)" },
    "25%": { transform: "rotate(-10deg) translate(0, -50%)" },
    "50%": { transform: "rotate(20deg) translate(0, -50%)" },
    "75%": { transform: "rotate(-5deg) translate(0, -50%)" },
    "100%": { transform: "rotate(0deg) translate(0, -50%)" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormChange = (item, e) => {
    const limit = 6;
    let data = [...site];
    data[item][e.target.name] = e.target.value.slice(0, limit);
    addSite(data);
  };

  const addField = (e) => {
    e.preventDefault();
    let newSite = { site: "" };
    addSite([...site, newSite]);
  };

  const removeField = (i, e) => {
    e.preventDefault();
    let data = [...site];
    data.splice(i, 1);
    addSite(data);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.allSites === "0" && formData.type !== "1") return setError("User sites not chosen");
    setPage(page + 1);
  };

  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
      noValidate
      onChange={handleChange}>
      <h2>Select Account Type</h2>
      <br />
      <Flex
        fz={"13px"}
        mb="10px"
        sx={{
          borderRadius: "0.3rem",
          overflow: "hidden",
          outline: "1px solid #ccc",
        }}>
        <Box sx={{ position: "relative", flex: 1, borderRadius: "0.3rem" }}>
          <Box
            sx={{
              width: "100%",
              opacity: "0",
              height: "35px",
            }}
            component="input"
            type="radio"
            id="changepass"
            name="type"
            value="1"
            defaultChecked={formData.type === "1"}></Box>
          <Box
            sx={{
              position: "absolute",
              top: "0",
              left: "0",
              color: "rgb(117, 117, 117)",
              width: "100%",
              height: "100%",
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRight: "1px solid #ccc",
              cursor: "pointer",
            }}
            component="label"
            htmlFor="changepass">
            Update Password
          </Box>
        </Box>
        <Box sx={{ position: "relative", flex: 1, borderRadius: "0.3rem" }}>
          <Box
            sx={{
              width: "100%",
              opacity: "0",
              height: "35px",
            }}
            component="input"
            type="radio"
            id="newpass"
            name="type"
            value="2"
            defaultChecked={formData.type === "2"}></Box>
          <Box
            sx={{
              position: "absolute",
              top: "0",
              left: "0",
              color: "rgb(117, 117, 117)",
              width: "100%",
              height: "100%",
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRight: "0px",
              cursor: "pointer",
            }}
            component="label"
            htmlFor="newpass">
            New Account
          </Box>
        </Box>
      </Flex>
      {formData.type === "2" && (
        <Flex
          direction={"column"}
          gap="5px"
          justify={"center"}
          sx={{ flex: 1 }}>
          <Flex
            fz={"13px"}
            mb="10px"
            sx={{
              borderRadius: "0.3rem",
              overflow: "hidden",
              outline: "1px solid #ccc",
            }}>
            <Box sx={{ position: "relative", flex: 1, borderRadius: "0.3rem" }}>
              <Box
                sx={{
                  width: "100%",
                  opacity: "0",
                  height: "35px",
                }}
                component="input"
                type="radio"
                id="all-sites"
                name="allSites"
                value="1"
                defaultChecked={formData.allSites === "1"}></Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  color: "rgb(117, 117, 117)",
                  width: "100%",
                  height: "100%",
                  background: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRight: "0px",
                  cursor: "pointer",
                }}
                component="label"
                htmlFor="all-sites">
                All Sites
              </Box>
            </Box>
            <Box sx={{ position: "relative", flex: 1, borderRadius: "0.3rem" }}>
              <Box
                sx={{
                  width: "100%",
                  opacity: "0",
                  height: "35px",
                }}
                component="input"
                type="radio"
                id="pcNumbers"
                name="allSites"
                value="2"
                defaultChecked={formData.allSites === "2"}></Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  color: "rgb(117, 117, 117)",
                  width: "100%",
                  height: "100%",
                  background: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRight: "0px",
                  cursor: "pointer",
                }}
                component="label"
                htmlFor="pcNumbers">
                PC Numbers
              </Box>
            </Box>
          </Flex>
          {formData.allSites === "2" && (
            <Box
              sx={{
                maxHeight: "25rem",
                overflowY: "auto",
                display: "inherit",
                flexDirection: "inherit",
                gap: "inherit",
              }}>
              {site.map((item, i) => (
                <div key={i}>
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
                      type="number"
                      name="site"
                      value={item.site}
                      disabled={formData.allSites === "1"}
                      placeholder="PC Number"
                      onChange={(e) => handleFormChange(i, e)}
                      required></Box>
                    <Box
                      component={FontAwesomeIcon}
                      icon={faTrash}
                      sx={{
                        position: "absolute",
                        cursor: "pointer",
                        marginLeft: "-25px",
                        top: "50%",
                        right: "1rem",
                        transform: "translate(0, -50%)",
                        transition: "color 100ms linear",
                        animation: "none",
                        "&:hover": {
                          color: "red",
                          animation: `${wiggle} 1000ms linear`,
                        },
                      }}
                      onClick={(e) => removeField(i, e)}
                    />
                  </Box>
                </div>
              ))}
            </Box>
          )}
          {formData.allSites === "2" && (
            <Button
              disabled={formData.allSites === "1"}
              onClick={addField}
              sx={(theme) => ({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                padding: "0.5rem",
                border: "0px",
                backgroundColor: theme.colors.accent[0],
                font: "inherit",
                color: "white",
                borderRadius: "0.3rem",
                "&:hover": { background: theme.colors.accent[0] },
              })}>
              Add PC <FontAwesomeIcon icon={faPlus} />
            </Button>
          )}
        </Flex>
      )}
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
          onClick={handleFormSubmit}>
          Next
        </Button>
      </Flex>
    </Box>
  );
}

export default AccountType;
