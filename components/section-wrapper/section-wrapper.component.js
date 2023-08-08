import { Box } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";

// const imageURL = "/white-bg.png";

function SectionWrapper({
  pt = "9.375rem",
  pb = "9.375rem",
  sectionSx,
  children,
}) {
  return (
    <Box
      sx={{
        paddingTop: pt,
        paddingBottom: pb,
        // backgroundImage: `url(${imageURL})`,
        ...sectionSx,
      }}
    >
      {children}
    </Box>
  );
}

export default SectionWrapper;
