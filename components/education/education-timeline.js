import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import { TimelineContent } from "@mui/lab";
import { Box, Typography } from "@mui/material";

export default function EducationalTimeline({ name, degree, time }) {
  return (
    <Timeline
      position="right"
      sx={{
        mb: 0,
        mt: 0,
        "& .timelineOppositeContentClasses.root": {
          flex: 0.2,
        },
        "& .MuiTimelineItem-root": {
          "&::before": {
            display: "none",
          },
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector
            sx={{
              backgroundColor: "#7E74F1",
              // height: "100px",
            }}
          />
        </TimelineSeparator>
        <TimelineContent>
          <Box>
            <Box>
              <Typography
                marginBottom={1}
                variant="h5"
                fontSize={13}
                fontWeight={500}
              >
                {name}
              </Typography>
            </Box>
            <Box>
              <Typography marginBottom={2} fontSize={13}>
                {degree}
              </Typography>
            </Box>
            <Box>
              <Typography
                marginBottom={5}
                variant="h5"
                fontSize={13}
                fontWeight={500}
              >
                {time}
              </Typography>
            </Box>
          </Box>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
