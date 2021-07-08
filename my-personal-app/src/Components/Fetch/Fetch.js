import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DataTable from "react-data-table-component";
import CountryServices from "../../services/CountryServices";
import { Link } from 'react-router-dom';

const countryServices = new CountryServices();

const Fetch = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCountries = async () => {
    try {
      const res = await countryServices.getCountries();
      if (res.data) {
        console.log(res.data);
        setCountries(res.data);
      }
    } catch (err) {
      console.log("The error in fetch component: ", err);
    }
    console.log(countries);
  };

  const columns = [
    {
      name: "Country Name",
      selector: "countryName",
      sortable: false,
      cell: row => <span>{row.name}</span>,
      center: true
    },
    {
      name: "Capital Name",
      selector: "capitalName",
      sortable: false,
      cell: row => <span>{row.capital}</span>,
      center: true
    },
    {
      name: "Region",
      selector: "region ",
      sortable: false,
      cell: row => <span>{row.population}</span>,
      center: true
    },
    {
      name: "Details",
      selector: "detail",
      sortable: false,
      cell: row => <Link to={`/country/${row.alpha3Code}`}>Detail</Link>,
      center: true
    },
  ];

  return (
    <div>
      <Container fluid>
        <p>This is setion retrieve data of different countries</p>
        <Row>
          <Col xs={7}>
            <DataTable
              className="event-list-table"
              columns={columns}
              data={countries}
              theme="light"
              noHeader
              pagination
              striped
              paginationPerPage={20}
            />
          </Col>
          <Col xs={5}>I have to write a description here</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Fetch;