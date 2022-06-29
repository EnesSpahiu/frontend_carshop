import React from "react";
import { Col, Row } from "react-bootstrap";
import CarCard from "../molecules/CarCard";
import Slider from "../molecules/Slider/Slider";
import Navbar from "../organisms/Navbar/Navbar";
import Container from "react-bootstrap/Container";

export default function Home() {
  return (
    <>
      <Navbar site="Home"/>
      <br />
      <Slider />

      <br />
      <Container>
        <Row style={{display: "flex", justifyContent: "center"}}>
          <Col>
            <CarCard
              description="Test"
              name="Test Test"
              picture_url="https://images.ichkoche.at/data/image/variations/250x167/1/apfel-img-9270.jpg"
              price={120}
            />
          </Col>
          <Col>
            <CarCard
              description="Test"
              name="Test Test"
              picture_url="https://images.ichkoche.at/data/image/variations/250x167/1/apfel-img-9270.jpg"
              price={120}
            />
          </Col>
          <Col>
            <CarCard
              description="Test"
              name="Test Test"
              picture_url="https://images.ichkoche.at/data/image/variations/250x167/1/apfel-img-9270.jpg"
              price={120}
            />
          </Col>
          <Col>
            <CarCard
              description="Test"
              name="Test Test"
              picture_url="https://images.ichkoche.at/data/image/variations/250x167/1/apfel-img-9270.jpg"
              price={120}
            />
          </Col>
          
        </Row>
      </Container>
    </>
  );
}
