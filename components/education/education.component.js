import React from "react";
import SectionWrapper from "../section-wrapper/section-wrapper.component";
import SectionTitle from "../section-title/section-title.component";
import {
  Box,
  Container,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { EducationItem } from "./education.seeds";
import EducationalTimeline from "./education-timeline";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1, color: "#7E74F1" }}>
        <LinearProgress
          variant="determinate"
          {...props}
          sx={{
            color: "#7E74F1",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#7E74F1",
            },
          }}
        />
      </Box>
    </Box>
  );
}

const imageURL = "/white-bg.png";

function Education(props) {
  return (
    <SectionWrapper
      sectionSx={{
        backgroundImage: `url(${imageURL})`,
      }}
    >
      <SectionTitle
        subTitle={"LEARNING PATH"}
        title={"Education & Skill"}
        alignItems={"center"}
        alignment="left"
      />

      <Container>
        <Grid container justifyContent={"space-between"}>
          <Grid item sm={6}>
            {EducationItem &&
              EducationItem.map((item, i) => {
                return (
                  <EducationalTimeline
                    key={i}
                    name={item.name}
                    degree={item.degree}
                    time={item.time}
                  />
                );
              })}
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography
                sx={{
                  mb: 3,
                }}
                fontSize={13}
                lineHeight={2}
              >
                For 5+ years, I have been continuously learning in the field of
                front-end and experimenting with new technologies and
                frameworks, and here you can see a summary of my skills.
              </Typography>
            </Box>
            <Stack>
              <Box
                sx={{
                  mb: 3,
                }}
              >
                <Typography
                  marginBottom={1}
                  variant="h5"
                  fontSize={13}
                  fontWeight={500}
                >
                  React
                </Typography>
                <LinearProgressWithLabel value={80} />
              </Box>
              <Box
                sx={{
                  mb: 3,
                }}
              >
                <Typography
                  marginBottom={1}
                  variant="h5"
                  fontSize={13}
                  fontWeight={500}
                >
                  Next.js
                </Typography>
                <LinearProgressWithLabel value={85} />
              </Box>
              <Box
                sx={{
                  mb: 3,
                }}
              >
                <Typography
                  marginBottom={1}
                  variant="h5"
                  fontSize={13}
                  fontWeight={500}
                >
                  Node.js
                </Typography>
                <LinearProgressWithLabel value={75} />
              </Box>
              <Box
                sx={{
                  mb: 3,
                }}
              >
                <Typography
                  marginBottom={1}
                  variant="h5"
                  fontSize={13}
                  fontWeight={500}
                >
                  JavaScript
                </Typography>
                <LinearProgressWithLabel value={95} />
              </Box>
              <Box
                sx={{
                  mb: 3,
                }}
              >
                <Typography
                  marginBottom={1}
                  variant="h5"
                  fontSize={13}
                  fontWeight={500}
                >
                  Tailwind CSS
                </Typography>
                <LinearProgressWithLabel value={95} />
              </Box>
              <Box
                sx={{
                  mb: 3,
                }}
              >
                <Typography
                  marginBottom={1}
                  variant="h5"
                  fontSize={13}
                  fontWeight={500}
                >
                  Material UI
                </Typography>
                <LinearProgressWithLabel value={95} />
              </Box>
              <Box>
                <Typography
                  marginBottom={1}
                  variant="h5"
                  fontSize={13}
                  fontWeight={500}
                >
                  MongoDB
                </Typography>
                <LinearProgressWithLabel value={95} />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
}

export default Education;
