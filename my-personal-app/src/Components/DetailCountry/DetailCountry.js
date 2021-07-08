import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CountryServices from '../../services/CountryServices';

const countryService = new CountryServices();

function DetailCountry() {
  const { code } = useParams();
  const [detail, setDetailData] = useState({});

  useEffect(()=>{
    const getSingleData = async () => {
      try {
        const response = await countryService.getByCode(code);
        if(response.data){
          setDetailData(response.data)
        }
      } catch (err) {
        console.log("The error in the DetailCountry component: ", err);
      }
    };
    getSingleData();
  }, [code]);

  return (
    <div>
      <Container fluid>
      <p>Here, I retrive the single data of a certain country by CODE</p>
        <Row>
          <Col xs={7}>
          <Card>
            {/* <Card.Img variant="top" src={detail.flag} /> */}
            <Card.Body>
              <Card.Title>{detail.name} <Card.Img style={{ width: '3rem' }} variant="top" src={detail.flag} /></Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content fs efs efs ef sef sef .
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
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