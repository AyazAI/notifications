import API from "@aws-amplify/api";
import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input, Row } from "reactstrap";

import { RangeTooltip } from "../slider/Range";

import * as queries from "../graphql/queries";

import { ToastContainer, toast } from "react-toastify";

const SmsForm = () => {
  const [userType, setUserType] = useState("");
  const [message, setMessage] = useState("");

  //   Filters
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [earning, setEarning] = useState([0, 1200]);
  const [target, setTarget] = useState([]);

  const [count, setCount] = useState("");
  const [disable, setDisable] = useState(true);

  // This can be done in different way
  const validEarning = (items) => {
    let validEarningRange = [];
    items.forEach((item) => {
      if (item.earning >= earning[0] && item.earning <= earning[1]) {
        validEarningRange.push(item);
      }
    });
    return validEarningRange;
  };

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
      filterPhones(response);
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
      filterPhones(response);
    }
  };

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
      filterPhones(response);
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
      filterPhones(response);
    }
    const {
      data: {
        listFinderUsers: { items },
      },
    } = await API.graphql({
      query: queries.listFinderUsers,
    });
    const response = validEarning(items);
    filterPhones(response);
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
      filterPhones(response);
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
      filterPhones(items);
    }
  };

  // GET THE PHONES FROM THE ARRAY
  const filterPhones = (items) => {
    let phones = [];
    items.forEach((item) => {
      phones.push(item.phone_number);
    });
    setTarget(phones);
    setCount(phones.length);
    setDisable(phones.length === 0 ? true : false);
    if (phones.length === 0) {
      toast("No Users found!");
    }
    console.log("phones are", phones);
  };

  //   NOTIFICATION
  const notify = () => {
    toast(`Message should be under 160 characters`);
  };

  const calculateHandler = async () => {
    // console.log(userType);
    // console.log(message);
    // console.log(location);
    // console.log(gender);
    // console.log(earning);
    // setDisable(false);

    if (message.length >= 160) {
      toast("Message should be under 160 characters");
    } else {
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

      // If filter is NOT EMPTY
      if (
        filter &&
        Object.keys(filter).length !== 0 &&
        filter.constructor === Object
      ) {
        //  IF FILTER
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
    }
  };

  const sendSMS = async () => {
    const apiName = "notification";
    const path = "/notification";

    console.log("Sending SMS");
    if (target.length !== 0) {
      const init = {
        body: {
          phones: target,
        },
      };

      try {
        const response = await API.post(apiName, path, init);
        console.log(response);
      } catch (error) {
        console.log("Error sending SMS", error);
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
        <Label>Select User Type</Label>

        <Input
          type="select"
          name="select"
          defaultValue={"Choose here"}
          onChange={(e) => setUserType(e.target.value)}
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
        <Label>Message</Label>
        <span className="ml-3">
          {message && <span>Message Length: {message.length}</span>}
        </span>
        <Input
          type="textarea"
          name="text"
          id="exampleText"
          onChange={(e) => setMessage(e.target.value)}
          style={{
            height: "200px",
          }}
        />
      </FormGroup>

      <h2>Filter Users (Optional)</h2>
      <hr />
      <FormGroup>
        <Label>
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
        <Label>Gender</Label>
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

        <Button disabled={disable} onClick={sendSMS}>
          Send
        </Button>
      </FormGroup>
    </Form>
  );
};

export default SmsForm;
