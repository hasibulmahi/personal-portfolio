import React from "react";
import {
  Box,
  Card,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { ServicesItems } from "./services-items.seeds";
import SectionTitle from "../section-title/section-title.component";
import SectionWrapper from "../section-wrapper/section-wrapper.component";

function Services(props) {
  return (
    <SectionWrapper
      sectionSx={{
        bgcolor: "#F1F1F1",
      }}
    >
      <SectionTitle
        subTitle={"SERVICES"}
        title={"Specialized in"}
        alignItems={"center"}
      />

      <Container>
        <Grid container spacing={10}>
          {ServicesItems &&
            ServicesItems.map((item, i) => {
              return (
                <Grid item sm={4} key={i}>
                  <Card
                    sx={{
                      // textAlign: 'center',
                      px: "3.25rem",
                      height: "270px",
                      width: "220px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexFlow: "column",
                      boxShadow: "none",
                    }}
                  >
                    <IconButton
                      sx={{
                        backgroundColor: "#F5F3FE",
                        borderRadius: "15px",
                        color: "#9670ff",
                        mb: ".75rem",
                      }}
                    >
                      {item.icon}
                    </IconButton>
                    <Typography
                      sx={{
                        mb: ".75rem",
                      }}
                      gutterBottom
                      variant="h5"
                      fontSize={15}
                      fontWeight={500}
                    >
                      {" "}
                      {item.title}
                    </Typography>
                    <Typography textAlign={"center"} fontSize={12}>
                      {item.descriptions}
                    </Typography>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </SectionWrapper>
  );
}

export default Services;
