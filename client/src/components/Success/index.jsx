import { Box, Title } from "@mantine/core";

function Success() {
  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <Title
        order={1}
        sx={{ color: "limegreen", textAlign: "center", fontSize: "1.5rem" }}>
        Form has been submitted!
      </Title>
    </Box>
  );
}

export default Success;
