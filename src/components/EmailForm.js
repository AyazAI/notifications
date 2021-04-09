import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
} from "reactstrap";
import { RangeTooltip } from "../slider/Range";

const EmailForm = () => {
  const [earning, setEarning] = useState([0, 1200]);
  useEffect(() => {
    console.log("Earning are", earning);
  }, [earning]);
  return (
    <Form>
      <h2>General</h2>
      <hr />
      <FormGroup>
        <Label for="exampleSelect">Select User Type</Label>
        <Input type="select" name="select">
          <option>Service Providers</option>
          <option>Finder Users</option>
          <option>Company Users</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label>Subject</Label>
        <Input type="text" name="subject" />
      </FormGroup>
      <FormGroup>
        <Label>Body</Label>
        <Input
          type="textarea"
          name="text"
          style={{
            height: "200px",
          }}
        />
      </FormGroup>

      <FormGroup>
        <Label>File</Label>
        <Input type="file" name="subject" />
      </FormGroup>

      <h2>Filter (Optional)</h2>
      <hr />
      <FormGroup>
        <Label for="exampleSelect">
          <h5>Location</h5>
        </Label>
        <Input type="select" name="select">
          <option>Islamabad</option>
          <option>Lahore</option>
          <option>Karachi</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Row>
          <div className="m-3">
            <h5>Min Earning</h5>
            Rs.{earning[0]}
          </div>
          <div className="m-3">
            <h5>Max Earning</h5>
            Rs.{earning[1]}
          </div>

          <RangeTooltip
            min={0}
            max={5000}
            defaultValue={[0, 1200]}
            allowCross={false}
            pushable={100}
            onChange={(e) => setEarning(e)}
            style={{
              marginBottom: "50px",
              cursor: "pointer",
            }}
          />
        </Row>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Gender</Label>
        <Input type="select" name="select">
          <option>Male</option>
          <option>Female</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Button className="mr-3">Calculate</Button>
        <Button>Send</Button>
      </FormGroup>
    </Form>
  );
};

export default EmailForm;
