import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "../App.css";
import img from "../image/dark-tweet.jpg";

const Search = () => {
  return (
    <Container>
      <div className="search-body">
        <div className="search-header">
          <h2>Search Your Favorites</h2>
          <Form responsive="md">
            <div className="search">
              <Form.Control
                type="text"
                // value={search}
                className="card text-white bg-dark "
                placeholder="Search Here..."
                // onChange={handleSearch}
              />
              <Button type="submit" variant="primary" size="md">
                Search
              </Button>
            </div>
          </Form>
        </div>
        <Row>
          <Col>
            <Card
              className="card text-white bg-dark mb-3"
              style={{ width: "30rem" }}
            >
              <Card.Body>
                <Card.Title>Tweets</Card.Title>
                <Card.Text>This is simple1</Card.Text>
                <Card.Img src={img} fluid />
                <ul className="list">
                  <li>comment</li>
                  <li>retweet</li>
                  <li>like</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Search;
