import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import CountryServices from "../../services/CountryServices";
import { Link } from "react-router-dom";

const countryService = new CountryServices();

function DetailCountry() {
  const { code } = useParams();
  const [detail, setDetailData] = useState({});

  useEffect(() => {
    const getSingleData = async () => {
      try {
        const response = await countryService.getByCode(code);
        if (response.data) {
          setDetailData(response.data);
        }
      } catch (err) {
        console.log("The error in the DetailCountry component: ", err);
      }
    };
    getSingleData();
  }, [code]);

  const borderComponent = (borders) => {
    return borders && borders.length > 0
      ? borders.map((country) => (
          <Badge bg="info" pill>
            {country}
          </Badge>
        ))
      : " No countries";
  };


  const currenciesComponent = (currencies) => {
    return currencies && currencies.length > 0
      ? currencies.map((currency) => (
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Name: {currency.name}</div>
          </div>
          <span className="badge bg-primary rounded-pill">Symbol: {currency.symbol}</span>
        </li>
        ))
      : " No currencies available";
  }

  return (
    <div>
      <Container fluid>
        <div class="row">
          <div className="col-1">
            <Link to={`/`} variant="outline-primary" className="btn btn-primary btn-sm">
              Back
            </Link>
          </div>
          <div className="col-11">
            <p>Here, I retrive the single data of a certain country by CODE</p>
          </div>
        </div>
        <Row>
          <Col xs={7}>
            <Card>
              <Card.Body>
                <Card.Title>
                  {detail.name} <Card.Img style={{ width: "3rem" }} variant="top" src={detail.flag} />
                </Card.Title>
                <Card.Text>
                  <h6 className="card-subtitle mb-2 text-muted">Capital: {detail.capital}</h6>
                  <div className="list-group">
                    <div className="list-group-item list-group-item-action">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Region: {detail.region}</h5>
                      </div>
                      <p className="mb-1">Sub Region: {detail.subregion}</p>
                      <p className="mb-1">Population: {detail.population}</p>
                      <p className="mb-1">Time Zone: {detail.timezones}</p>
                      <p className="mb-1">
                        Borders:
                        {borderComponent(detail.borders)}
                      </p>
                      <p className="mb-1">Currencies:</p>
                      <ol class="list-group list-group-numbered">
                        {currenciesComponent(detail.currencies)}
                      </ol>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DetailCountry;
