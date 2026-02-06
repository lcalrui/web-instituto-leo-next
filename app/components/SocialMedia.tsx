import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa'; 

export default function SocialMedia(href: string, name: string) {
  
  
  return (
    <footer className="bg-secondary text-white py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0 fw-bold">IES Cura Valera</p>
          </Col>
          
          <Col md={6} className="text-center text-md-end">
              <a 
                key={name}
                href={href} 
                className="text-white mx-3 text-decoration-none d-inline-flex align-items-center"
                aria-label={name}
              >
                <SocialMedia.icon size="20" className="me-1" />
                <span>{name}</span>
              </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}