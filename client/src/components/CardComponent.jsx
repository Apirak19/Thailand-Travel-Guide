import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import trips from "../assets/db.js";

const CardComponent = (props) => {
  const { title, eid, url, description, images, tags, likes } = props;
  console.log(url);
  return (
    <>
      <Card style={{ width: "18rem" }} key={eid}>
        <Card.Img variant="top" src={images[0]} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="text-truncate">{description}</Card.Text>
          <a href={url} className="text-primary fw-bold">
            read more
          </a>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{tags[0]}</ListGroup.Item>
          <ListGroup.Item>{tags[0]}</ListGroup.Item>
          <ListGroup.Item>{tags[0]}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href={url}>Link</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardComponent;
