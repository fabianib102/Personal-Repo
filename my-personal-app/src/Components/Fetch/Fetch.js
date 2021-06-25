import React, {useEffect, useState} from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';
import CountryServices from '../../services/CountryServices';

const countryServices = new CountryServices();

const Fetch = () => {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    try {
      const res = await countryServices.getCountries();
      if (res.data) {
        console.log(res.data);
        setCountries(res.data);
      }
    } catch (err) {
      console.log('The error in fetch component: ', err)
    }
    console.log(countries);
  };

  const listCountries = countries.map((country, item) =>
    <tr key={item}>
      <td>{item}</td>
      <td>{country.name}</td>
      <td>{country.capital}</td>
      <td>{country.population}</td>
    </tr>
  );

  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={7}>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Country Name</th>
                  <th>Capital Name</th>
                  <th>Region</th>
                </tr>
              </thead>
              <tbody>
                {listCountries}
              </tbody>
            </Table>
          </Col>
          <Col xs={5}>I have to write a description here</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Fetch;