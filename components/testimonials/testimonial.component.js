import React from "react";
import SectionWrapper from "../section-wrapper/section-wrapper.component";
import SectionTitle from "../section-title/section-title.component";
import Image from "next/image";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { ClientReview } from "./testimonial-seeds";
const imageURL = "/grey-bg.png";

function Testimonial(props) {
  return (
    <SectionWrapper
      sectionId="testimonials"
      sectionSx={{
        backgroundImage: `url(${imageURL})`,
      }}
    >
      <SectionTitle
        subTitle={"MY CLIENTS"}
        title={"Testimonials"}
        alignItems={"center"}
        alignment="center"
      />

      <Container>
        <Grid container spacing={4}>
          {ClientReview &&
            ClientReview.map((item, i) => {
              return (
                <Grid item xs={4} key={i}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="240px"
                      width="361px"
                      image={item.image}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        sx={{
                          mb: "5px",
                        }}
                        variant="h5"
                        fontSize={13}
                        fontWeight={500}
                      >
                        {item.title}
                      </Typography>
                      <Box>
                        <Chip
                          sx={{
                            fontSize: "10px",
                            mb: "10px",
                          }}
                          key={i}
                          label={item.tags}
                          size="small"
                          variant="filled"
                        />
                      </Box>
                      <Typography
                        sx={{
                          mb: "10px",
                          lineHeight: "20px",
                        }}
                        fontSize={12}
                      >
                        {item.description}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          sx={{
                            textTransform: "none",
                            fontSize: 10,
                            border: "1px solid",
                            lineHeight: 1.5,
                            borderColor: "#F1F1F1",
                          }}
                          variant="outlined"
                        >
                          {item.btn}
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </SectionWrapper>
  );
}

export default Testimonial;
