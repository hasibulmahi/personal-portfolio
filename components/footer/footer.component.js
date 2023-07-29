import React from "react";
import { FooterSocialMedia } from "./social-media.seeds";
import { Box, IconButton, Typography } from "@mui/material";

function Footer({ bg }) {
  return (
    <Box
      sx={{
        py: "6.25rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexFlow: "column",
        bgcolor: bg ? bg : "#fff",
      }}
    >
      <Box>
        {FooterSocialMedia &&
          FooterSocialMedia.map((item, i) => (
            <IconButton key={i} aria-label="delete" href={item.link}>
              {item.icon}
            </IconButton>
          ))}
      </Box>
      <Typography>© 2023 - Hasibul Mahi</Typography>
    </Box>
  );
}

export default Footer;
