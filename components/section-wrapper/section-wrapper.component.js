import { Box } from "@mui/material";
import React from "react";

// test commitesdlfjdslk

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
        ...sectionSx,
      }}
    >
      {children}
    </Box>
  );
}

export default SectionWrapper;
