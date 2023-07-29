import React from "react";
import SectionTitle from "../section-title/section-title.component";
import { FooterSocialMedia } from "../footer/social-media.seeds";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import SectionWrapper from "../section-wrapper/section-wrapper.component";
import Image from "next/image";

function Hero(props) {
  return (
    <SectionWrapper>
      <Box
        sx={{
          marginTop: "64px",
          marginBottom: "55px",
        }}
      >
        <Container>
          <Grid container justifyContent={"space-between"}>
            <Grid item sm={5}>
              <Box
                sx={{
                  display: "inline-flex",
                  flexFlow: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    letterSpacing: ".75rem",
                    mb: "10px",
                  }}
                >
                  - MY NAME IS
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    marginBottom: "1.75rem",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "700",
                      paddingRight: "15px",
                    }}
                  >
                    Hasibul
                  </Typography>

                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "700",
                      color: "#7E74F1",
                    }}
                  >
                    Mahi.
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  lineHeight: 2,
                  mb: 1,
                }}
                variant="h5"
                fontSize={13}
              >
                Creative front-end developer with more than +5 years of
                experience in enterprise companies and startups. Proficient in
                JavaScript, Angular, and React. Passionate about UI/UX
              </Typography>
              <Box>
                {FooterSocialMedia &&
                  FooterSocialMedia.map((item, i) => (
                    <IconButton key={i} aria-label="delete" href={item.link}>
                      {item.icon}
                    </IconButton>
                  ))}
              </Box>
            </Grid>
            <Grid
              sx={{
                paddingLeft: "80px",
              }}
              item
              sm={5}
            >
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    zIndex: "20",
                    top: "30px",
                    left: "60px",
                  }}
                >
                  <Image
                    src="/hero-23.png"
                    width={"245"}
                    height={"300"}
                    alt="Hero Image"
                  />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    height: "455px",
                    width: "472px",
                    zIndex: "2",
                    top: "-125px",
                    left: "31px",
                  }}
                >
                  <Image src="/group-1.png" fill />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    height: "438px",
                    width: "355px",
                    zIndex: "1",
                    top: "-70px",
                    left: "0",
                  }}
                >
                  <Image src="/back.png" fill />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </SectionWrapper>
  );
}

export default Hero;