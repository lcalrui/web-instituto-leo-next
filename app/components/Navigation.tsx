'use client';

import { Navbar, Nav, Container } from "react-bootstrap";
import { AiFillHome, AiOutlineContacts, AiOutlineTool } from "react-icons/ai";
import Link from "next/link";
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className={styles.navbarContainer}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`w-100 ${styles.navLinksContainer}`}>
            
            <Nav.Link as={Link} href="/" className={styles.navLinkText}>
              <AiFillHome size={20} className={styles.navIcon} />
              Inicio
            </Nav.Link>
            
            <Nav.Link as={Link} href="/contacto" className={styles.navLinkText}>
              <AiOutlineContacts size={20} className={styles.navIcon} />
              Contacto
            </Nav.Link>
            
            <Nav.Link as={Link} href="/servicios" className={styles.navLinkText}>
              <AiOutlineTool size={20} className={styles.navIcon} />
              Servicios
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}