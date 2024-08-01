import React from "react";
import SectionTitle from "../section-title/section-title.component";
import { FooterSocialMedia } from "../footer/social-media.seeds";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import SectionWrapper from "../section-wrapper/section-wrapper.component";
import Image from "next/image";
import { Scale } from "@mui/icons-material";

const imageURL = "/white-bg.png";

function Hero(props) {
  return (
    <SectionWrapper
      sectionId="home"
      sectionSx={{
        backgroundImage: `url(${imageURL})`,
      }}
    >
      <Box
        sx={{
          marginTop: "64px",
          marginBottom: {
            xs: 0,
            md: "55px",
          },
        }}
      >
        <Container>
          <Grid
            container
            justifyContent={"space-between"}
            sx={{
              flexFlow: {
                xs: "column-reverse",
                md: "row",
              },
            }}
          >
            <Grid item md={5}>
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
                    fontSize: {
                      xs: ".5rem",
                      md: "1rem",
                    },
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
                      fontSize: {
                        xs: "2rem",
                        md: "3rem",
                      },
                    }}
                  >
                    Hasibul
                  </Typography>

                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "700",
                      color: "#7E74F1",
                      fontSize: {
                        xs: "2rem",
                        md: "3rem",
                      },
                    }}
                  >
                    Mahi
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
                Creative front-end developer with more than +3 years of
                experience in enterprise companies and startups. Proficient in
                JavaScript, React and Next.js. Passionate about programming.
              </Typography>
              <Box>
                {FooterSocialMedia &&
                  FooterSocialMedia.map((item, i) => (
                    <IconButton
                      sx={{
                        color: "black",
                      }}
                      key={i}
                      aria-label="delete"
                      href={item.link}
                    >
                      {item.icon}
                    </IconButton>
                  ))}
              </Box>
            </Grid>
            <Grid
              sx={{
                paddingLeft: {
                  xs: 0,
                  md: "80px",
                },
                display: "flex",
                // alignItems: "flex-end",
                justifyContent: {
                  xs: "flex-start",
                  md: "flex-end",
                },
                transform: {
                  xs: "scale(.8)",
                  md: "scale(1)",
                },

                marginBottom: {
                  xs: "62px",
                  md: 0,
                },
              }}
              item
              md={7}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  marginLeft: {
                    xs: "50px",
                    sm: "200px",
                    md: 0,
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "inline-flex",
                    zIndex: "20",
                    top: "-33px",
                    right: {
                      xs: "7px",
                      md: "31px",
                    },
                  }}
                >
                  <Image
                    src="/hero-24.png"
                    width={"300"}
                    height={"375"}
                    alt="Hero Image"
                  />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    height: "390px",
                    width: {
                      xs: "274px",
                      md: "304px",
                    },
                    zIndex: "2",
                    top: "-48px",
                    right: "24px",
                  }}
                >
                  <Image src="/front.png" fill />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    height: "438px",
                    width: {
                      xs: "326px",
                      md: "355px",
                    },
                    zIndex: "1",
                    top: "-70px",
                    right: "0px",
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
