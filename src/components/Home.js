import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import img from "../image/twitter-1.jpg";
import "../App.css";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="container">
            <h2>Magic Tweet Finder</h2>
            <br />
            <h3>What you can do with this app?</h3>

            <p>
              Scrolling through the social media platform can be super fun and
              it may direct you towards unwanted westing time, with this app
              user can search specific content that he/she want to see, and
              avoid wasting their time.
            </p>
            <br />
            <h3>Explore & Search More</h3>

            <p>
              This app has been built with the idea of saving time for the
              users. With Our powerful search engine users can explore more and
              search faster from the accounts they want to visit only. Enjoy
              Your Search.
            </p>
            <br />
            <h3>Visit Random Tweets From Most visited Users</h3>
            <p>
              With the Random Tweet page, users can see random tweets from the
              most visited accounts on twitter according to google.
            </p>
          </div>
        </Col>
        <Col className="main-image">
          <Image src={img} alt="main image" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
