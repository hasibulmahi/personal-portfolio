import React from "react";
import SectionWrapper from "../section-wrapper/section-wrapper.component";
import SectionTitle from "../section-title/section-title.component";
import Image from "next/image";
import {
  Box,
  Chip,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { portfolios } from "./portfolio-seeds";
import LinkIcon from "@mui/icons-material/Link";

function Portfolios(props) {
  const ImageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "10px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "10px",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const imageURL = "/white-bg.png";
  return (
    <SectionWrapper
      sectionSx={{
        backgroundImage: `url(${imageURL})`,
      }}
    >
      <SectionTitle
        subTitle={"MY WORKS"}
        title={"Featured Portfolios"}
        alignItems={"center"}
        alignment="left"
      />

      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Slider {...settings}>
              {portfolios &&
                portfolios.map((item, i) => {
                  return (
                    <Box key={i}>
                      <Box
                        sx={{
                          px: 4,
                        }}
                      >
                        <Box
                          sx={{
                            position: "relative",
                            height: "370px",
                            width: "100%",
                          }}
                        >
                          <Image
                            src={item.image}
                            fill
                            alt="Picture of the author"
                          />
                        </Box>
                        <Box
                          sx={{
                            border: "1px solid",
                            borderBottomLeftRadius: "10px",
                            borderBottomRightRadius: "10px",
                            borderColor: "#F1F1F1",
                            px: "15px",
                            py: "20px",
                          }}
                        >
                          <Typography
                            sx={{
                              mb: "10px",
                            }}
                            variant="h5"
                            fontSize={12}
                            fontWeight={500}
                          >
                            {item.title}
                          </Typography>
                          <Stack direction="row">
                            {item.tags.map((t, iteration) => {
                              return (
                                <Chip
                                  key={iteration}
                                  label={t}
                                  variant="outlined"
                                  size="small"
                                  sx={{
                                    marginRight: 1,
                                    fontSize: 10,
                                    borderRadius: 1,
                                    px: 0.5,
                                  }}
                                />
                              );
                            })}
                            <IconButton
                              aria-label="linkicon"
                              href={item.link}
                              sx={{
                                p: 0,
                              }}
                            >
                              <LinkIcon />
                            </IconButton>
                          </Stack>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
}

export default Portfolios;
