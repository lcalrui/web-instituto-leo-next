import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa'; 

export default function Footer() {
  
  const socialMedia = [
    { name: 'YouTube', icon: FaYoutube, link: 'https://www.youtube.com/@iescuravalerayoutube' }, 
    { name: 'Instagram', icon: FaInstagram, link: 'https://www.instagram.com/ies_cura_valera/' },
    { name: 'Facebook', icon: FaFacebook, link: 'https://www.facebook.com/p/Ies-Cura-Valera-100011212297789/?locale=es_ES' },
  ];
  
  return (
    <footer className="bg-secondary text-white py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0 fw-bold">IES Cura Valera</p>
          </Col>
          
          <Col md={6} className="text-center text-md-end">
            {socialMedia.map((social) => (
              <a 
                key={social.name}
                href={social.link} 
                className="text-white mx-3 text-decoration-none d-inline-flex align-items-center"
                aria-label={social.name}
              >
                <social.icon size="20" className="me-1" />
                <span>{social.name}</span>
              </a>
            ))}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}