import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

function SectionTitle({ subTitle, title, alignment = "center" }) {
  return (
    <Container>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            textAlign: alignment,
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              flexFlow: "column",
              alignItems: "flex-start",
            }}
          >
            {subTitle && (
              <Typography
                sx={{
                  letterSpacing: ".75rem",
                }}
              >
                - {subTitle}
              </Typography>
            )}
            {title && (
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "700",
                  marginBottom: "3.75rem",
                }}
              >
                {title}
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SectionTitle;
