import { Grid } from "@mui/material";
import React from "react";
import CarCard from "../molecules/CarCard/CarCard";
import Navbar from "../organisms/Navbar/Navbar";

export default function Shop() {
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
      <Grid
        container
        spacing={3}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
        {dummyData.map((card) => {
          return (
            <Grid
              item
              sm={6}
              md={3}
              style={{ display: "flex", justifyContent: "center" }}
            >
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
