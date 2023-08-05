import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SectionWrapper from "../section-wrapper/section-wrapper.component";
import SectionTitle from "../section-title/section-title.component";

function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <SectionWrapper
      sectionSx={{
        bgcolor: "#F1F1F1",
      }}
    >
      <SectionTitle
        subTitle={"CONTACT ME"}
        title={"Get in touch"}
        alignItems={"center"}
        alignment="center"
      />

      <Container>
        <Grid container>
          <Grid item xs={6}>
            <Box>
              <Box>
                <form onSubmit={handleSubmit}>
                  <TextField
                    sx={{
                      marginBottom: 2,
                      backgroundColor: "#FFF",
                      ".MuiFormLabel-root": {
                        fontSize: "13px !important",
                        fontWeight: "500",
                      },
                    }}
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    fullWidth
                  />
                  <TextField
                    sx={{
                      marginBottom: 2,
                      backgroundColor: "#FFF",
                      border: "1px #FFF",
                      ".MuiFormLabel-root": {
                        fontSize: "13px !important",
                        fontWeight: "500",
                      },
                    }}
                    label="Email"
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    fullWidth
                  />
                  <TextField
                    sx={{
                      marginBottom: 2,
                      backgroundColor: "#FFF",
                      ".MuiFormLabel-root": {
                        fontSize: "13px !important",
                        fontWeight: "500",
                      },
                    }}
                    label="Comment"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    fullWidth
                    multiline
                    rows={6}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      px: 33,
                      py: 1,
                      bgcolor: "#7E74F1",
                      textTransform: "capitalize"
                    }}
                  >
                    Submit
                  </Button>
                </form>
              </Box>
            </Box>
          </Grid>
          <Grid></Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
}

export default Contact;
