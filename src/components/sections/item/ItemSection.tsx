import React from "react";
import {Alert, Card} from "react-bootstrap";

export default function ItemSection(props) {
  if (props.items.length === 0) {
    return (
      <Alert variant={"danger"}>
        Looks like there is no data to display :(
      </Alert>
    )
  }

  if (props.items.length === 1) {
    return (
      <Alert data-testid="item" variant={"success"}>
        <b>{props.items[0].name}</b> you're the man!
      </Alert>
    )
  }

  return (
    <div>
      {props.items.map(item =>
        <Card data-testid="item" key={item.id} style={{width: '18rem'}}>
          <Card.Body>
            <Card.Title>{item.id}</Card.Title>
            <Card.Text>
              This is {item.name}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
