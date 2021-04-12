import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input, Row } from "reactstrap";
import { RangeTooltip } from "../slider/Range";
import { ToastContainer, toast } from "react-toastify";

import * as queries from "../graphql/queries";
import API from "@aws-amplify/api";

const EmailForm = () => {
  // GENERAL
  const [userType, setUserType] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  //   FILTER
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [earning, setEarning] = useState([0, 1200]);

  // TARGET
  const [target, setTarget] = useState([]);

  // VALIDATION AND UX
  const [count, setCount] = useState("");
  const [disable, setDisable] = useState(true);

  // This can be done in different way

  // CHECK WHO HAVE VALID EARNING
  const validEarning = (items) => {
    let validEarningRange = [];

    items.forEach((item) => {
      if (item.earning >= earning[0] && item.earning <= earning[1]) {
        validEarningRange.push(item);
      }
    });
    return validEarningRange;
  };

  // FETCH ALL SP USERS
  const fetchAllSpUsers = async (filter) => {
    // IF THERE IS FILTER
    // MEANS FILTER IS NOT EMPTY
    if (
      filter &&
      Object.keys(filter).length !== 0 &&
      filter.constructor === Object
    ) {
      const {
        data: {
          listSpUsers: { items },
        },
      } = await API.graphql({
        query: queries.listSpUsers,
        variables: {
          filter: filter,
        },
      });

      const response = validEarning(items);
      filterEmails(response);
    } else {
      // IF THERE IS NO FILTER
      // FILTER IS EMPTY
      const {
        data: {
          listSpUsers: { items },
        },
      } = await API.graphql({
        query: queries.listSpUsers,
      });
      const response = validEarning(items);
      filterEmails(response);
    }
  };

  // FETCH ALL FINDER USERS
  const fetchAllFinderUsers = async (filter) => {
    //   IF THERE IS FILTER
    if (
      filter &&
      Object.keys(filter).length !== 0 &&
      filter.constructor === Object
    ) {
      console.log("IS 1 RUNNING");
      const {
        data: {
          listFinderUsers: { items },
        },
      } = await API.graphql({
        query: queries.listFinderUsers,
        variables: {
          filter: filter,
        },
      });

      const response = validEarning(items);
      filterEmails(response);
    } else {
      // IF THERE IS NO FILTER

      const {
        data: {
          listFinderUsers: { items },
        },
      } = await API.graphql({
        query: queries.listFinderUsers,
      });
      const response = validEarning(items);
      filterEmails(response);
    }
    const {
      data: {
        listFinderUsers: { items },
      },
    } = await API.graphql({
      query: queries.listFinderUsers,
    });
    const response = validEarning(items);
    filterEmails(response);
  };

  const fetchAllCompanyUsers = async (filter) => {
    if (
      filter &&
      Object.keys(filter).length !== 0 &&
      filter.constructor === Object
    ) {
      const {
        data: {
          listCompanyUsers: { items },
        },
      } = await API.graphql({
        query: queries.listCompanyUsers,
        variables: {
          filter: filter,
        },
      });

      const response = validEarning(items);
      filterEmails(response);
    } else {
      // IF THERE IS NO FILTER
      const {
        data: {
          listCompanyUsers: { items },
        },
      } = await API.graphql({
        query: queries.listCompanyUsers,
      });

      //   NO RANGE FOR COMPANY USERS
      //   const response = validEarning(items);
      filterEmails(items);
    }
  };

  // GET THE EMAILS FROM THE ARRAY
  const filterEmails = (items) => {
    let emails = [];
    items.forEach((item) => {
      if (item.email) {
        emails.push(item.email);
      }
    });
    setTarget(emails);
    setCount(emails.length);
    setDisable(emails.length === 0 ? true : false);
    if (emails.length === 0) {
      toast("No Users found!");
    }
    console.log("emails are", emails);
  };

  // FIRST CALCULATE THE USERS THAT ARE MATCHED
  const calculateHandler = async () => {
    console.log(userType);
    console.log(body);
    console.log(location);
    console.log(gender);
    console.log(earning);

    let filter = {};

    // SP have attribute virtualloc no location
    if (location && userType === "sp") {
      filter.virtualloc = {
        eq: location,
      };
    }

    if (location && userType !== "sp") {
      filter.location = {
        eq: location,
      };
    }

    if (gender) {
      filter.gender = {
        eq: gender,
      };
    }

    // If FILTER
    if (
      filter &&
      Object.keys(filter).length !== 0 &&
      filter.constructor === Object
    ) {
      if (userType === "sp") {
        fetchAllSpUsers(filter);
      } else if (userType === "finder") {
        fetchAllFinderUsers(filter);
      } else if (userType === "company") {
        fetchAllCompanyUsers(filter);
      }
    } else {
      //   IF NO FILTER
      if (userType === "sp") {
        fetchAllSpUsers();
      } else if (userType === "finder") {
        fetchAllFinderUsers();
      } else if (userType === "company") {
        fetchAllCompanyUsers();
      }
    }
  };

  const sendMail = async () => {
    console.log("Sending Email");
    const apiName = "notification";
    const path = "/notification/email";

    if (target.length !== 0) {
      // If ther is subject and boody
      if (subject && body) {
        const init = {
          body: {
            emails: target,
            subject: subject,
            body: body,
          },
        };

        try {
          const response = await API.post(apiName, path, init);
          console.log(response);
        } catch (error) {
          console.log("Error sending MAIL", error);
        }
      } else {
        toast("Please fill in all fields");
      }
    } else {
      toast("Please click on Calculate first!");
    }
  };

  return (
    <Form>
      <ToastContainer position="top-right" autoClose={5000} draggable />
      <h2>Content</h2>
      <hr />
      <FormGroup>
        <Label for="exampleSelect">Select User Type</Label>

        <Input
          type="select"
          name="select"
          onChange={(e) => setUserType(e.target.value)}
          defaultValue={"Choose here"}
        >
          <option disabled hidden value="Choose here">
            --- Select
          </option>
          <option value="sp">Service Providers</option>
          <option value="finder">Finder Users</option>
          <option value="company">Company Users</option>
        </Input>
      </FormGroup>

      <FormGroup>
        <Label>Subject</Label>
        <Input
          type="text"
          name="subject"
          onChange={(e) => setSubject(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Body</Label>
        <span className="ml-3">
          {body && <span>Body Length: {body.length}</span>}
        </span>
        <Input
          type="textarea"
          name="text"
          style={{
            height: "200px",
          }}
          onChange={(e) => setBody(e.target.value)}
        />
      </FormGroup>

      {/* FILTERS */}

      <h2>Filter (Optional)</h2>
      <hr />
      <FormGroup>
        <Label for="exampleSelect">
          <h5>Location</h5>
        </Label>
        <Input
          type="select"
          name="select"
          onChange={(e) => setLocation(e.target.value)}
          defaultValue={"Choose here"}
        >
          <option disabled hidden value="Choose here">
            --- Select
          </option>

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
        <Input
          type="select"
          name="select"
          onChange={(e) => setGender(e.target.value)}
          defaultValue={"Choose here"}
        >
          <option disabled hidden value="Choose here">
            --- Select
          </option>
          <option>Male</option>
          <option>Female</option>
        </Input>
      </FormGroup>
      {count ? (
        <FormGroup>
          Total Messages to be sent: <b>{count}</b>
        </FormGroup>
      ) : (
        <FormGroup>No Users</FormGroup>
      )}
      <FormGroup>
        <Button className="mr-3" onClick={calculateHandler}>
          Calculate
        </Button>
        <Button disabled={disable} onClick={sendMail}>
          Send
        </Button>
      </FormGroup>
    </Form>
  );
};

export default EmailForm;
