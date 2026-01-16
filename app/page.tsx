import { Container, Row, Col } from "react-bootstrap";
import Content from "./components/Content";
import Aside from "./components/Aside";

export default function Home() {
  return (
    <Container fluid className="px-3 px-md-5"> 
      <Row>
        <Col xs={12} md={9}> 
          <Content/>
        </Col>
        <Col xs={12} md={3}>
          <Aside/>
        </Col>
      </Row>
    </Container>
  );
}