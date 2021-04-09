import React from "react";
import { Row, Col, Container } from "reactstrap";
import Main from "./components/Main";

const Example = (props) => {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="10">
            <Row className="m-4">
              <Col>
                <h1>EzzyApp Notification System</h1>
              </Col>
            </Row>
            <Main />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Example;
