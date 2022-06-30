import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Navbar from "../organisms/Navbar/Navbar";

export default function AboutUs() {
  return (
    <>
      <Navbar />

      <Grid
        container
        style={{
          marginTop: "5%",
          display: "flex",
          justifyContent: "center",
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
        <Grid item>
          <Typography variant="h2">About Us</Typography>
          <hr />
        </Grid>
        <Grid container style={{marginTop: "20px", marginBottom: "20px"}}>
          <Grid item sm={9}>
            <Typography variant="h4">The Programmers</Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet.
            </Typography>
          </Grid>
          <Grid item sm={3} style={{display: "flex", justifyContent: "flex-end"}}>
            <img src="https://images.ichkoche.at/data/image/variations/250x167/1/apfel-img-9270.jpg" alt="" />
          </Grid>
        </Grid>
        <Grid container style={{marginTop: "20px", marginBottom: "20px"}}>
          <Grid item sm={3} style={{display: "flex", justifyContent: "flex-start"}}>
            <img src="https://images.ichkoche.at/data/image/variations/250x167/1/apfel-img-9270.jpg" alt="" />
          </Grid>
          <Grid item sm={9}>
            <Typography variant="h4" style={{display: "flex", justifyContent: "flex-end"}}>Our Idea</Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet.
            </Typography>
          </Grid>
        </Grid>
        <Grid container style={{marginTop: "20px", marginBottom: "20px"}}>
          <Grid item sm={9}>
            <Typography variant="h4">Our Target</Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet.
            </Typography>
          </Grid>
          <Grid item sm={3} style={{display: "flex", justifyContent: "flex-startend"}}>
            <img src="https://images.ichkoche.at/data/image/variations/250x167/1/apfel-img-9270.jpg" alt="" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
