'use client';

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { AiFillHome, AiOutlineContacts, AiOutlineTool, AiOutlineBook } from "react-icons/ai";
import Link from "next/link";
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className={styles.navbarContainer}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`w-100 ${styles.navLinksContainer}`}>
            
            {/* INICIO */}
            <Nav.Link as={Link} href="/" className={styles.navLinkText}>
              <AiFillHome size={20} className={styles.navIcon} />
              Inicio
            </Nav.Link>

            {/* DROPDOWN DE CICLOS */}
            <NavDropdown 
              title={
                <span className={styles.navLinkText}>
                   <AiOutlineBook size={20} className={styles.navIcon} />
                   Ciclos
                </span>
              } 
              id="ciclos-dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item as={Link} href="/ciclos/dam">
                Ciclo DAM
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/ciclos/daw">
                Ciclo DAW
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/ciclos/asir">
                Ciclo ASIR
              </NavDropdown.Item>
            </NavDropdown>
            
            {/* CONTACTO */}
            <Nav.Link as={Link} href="/contacto" className={styles.navLinkText}>
              <AiOutlineContacts size={20} className={styles.navIcon} />
              Contacto
            </Nav.Link>
            
            {/* SERVICIOS */}
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