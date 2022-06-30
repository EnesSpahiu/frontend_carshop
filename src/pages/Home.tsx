import React from "react";
import { Col, Row } from "react-bootstrap";
import CarCard from "../molecules/CarCard/CarCard";
import Slider from "../molecules/Slider/Slider";
import Navbar from "../organisms/Navbar/Navbar";
import Container from "react-bootstrap/Container";
import { Grid } from "@mui/material";

export default function Home() {

  const dummyData = [
    {
      description: "Test",
      name: "Test Test",
      picture_url:
        "https://images.ichkoche.at/data/image/variations/250x167/1/apfel-img-9270.jpg",
      price: 120,
    },
    {
      description: "Test",
      name: "Test Test",
      picture_url:
        "https://images.ichkoche.at/data/image/variations/250x167/1/apfel-img-9270.jpg",
      price: 120,
    },
    {
      description: "Test",
      name: "Test Test",
      picture_url:
        "https://images.ichkoche.at/data/image/variations/250x167/1/apfel-img-9270.jpg",
      price: 120,
    },
    {
      description: "Test",
      name: "Test Test",
      picture_url:
        "https://images.ichkoche.at/data/image/variations/250x167/1/apfel-img-9270.jpg",
      price: 120,
    },
  ];

  return (
    <>
      <Navbar />
      <br />
      <Slider />

      <Grid
        container
        spacing={3}
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        {dummyData.map((card) => {
          return (
            <Grid item sm={6} md={3} style={{display: "flex", justifyContent: "center"}}>
              <CarCard
                description={card.description}
                name={card.name}
                picture_url={card.picture_url}
                price={card.price}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
