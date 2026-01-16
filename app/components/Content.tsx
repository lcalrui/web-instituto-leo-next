'use client';
import { Row, Col, Carousel } from "react-bootstrap";
import Image from "next/image";
import CardComponent, { type CardProps } from "./CardComponent";

const cardData: CardProps[] = [
  {
    title: "Ciclo DAM",
    text: "Desarrollo de Aplicaciones Multiplataforma. ¡Aprende a crear apps para cualquier dispositivo!",
    imgSrc: "/DAM.png",
    bg: "info",
    buttonVariant: "primary",
    buttonLink: "/ciclos/dam"
  },
  {
    title: "Ciclo DAW",
    text: "Desarrollo de Aplicaciones Web. Maquetación, Front-end y Back-end con las últimas tecnologías.",
    imgSrc: "/DAM.png",
    bg: "warning",
    buttonVariant: "dark",
    buttonLink: "/ciclos/daw"
  },
  {
    title: "Ciclo ASIR",
    text: "Administración de Sistemas Informáticos en Red. Expertos en seguridad y gestión de servidores.",
    imgSrc: "/DAM.png",
    bg: "danger",
    buttonVariant: "light",
    buttonLink: "/ciclos/asir"
  }
];

const carouselItems = [
    { 
        src: "/almeria.jpg", 
        alt: "Almería", 
        captionTitle: "Almería", 
    },
    { 
        src: "/cadiz.jpg", 
        alt: "Cádiz", 
        captionTitle: "Cádiz",
    },
    { 
        src: "/cordoba.jpg", 
        alt: "Córdoba", 
        captionTitle: "Córdoba", 
    },
    { 
        src: "/granada.jpg", 
        alt: "Granada", 
        captionTitle: "Granada",  
    },
    { 
        src: "/huelva.jpg", 
        alt: "Huelva", 
        captionTitle: "Huelva",  
    },
    { 
        src: "/jaen.jpg", 
        alt: "Jaén", 
        captionTitle: "Jaén",  
    },
    { 
        src: "/malaga.jpg", 
        alt: "Málaga", 
        captionTitle: "Málaga",
    },
    { 
        src: "/sevilla.jpg", 
        alt: "Sevilla", 
        captionTitle: "Sevilla",  
    },
];

export default function Content() {
  return (
    <section className="py-3"> 
      <Row>
        {cardData.map((card, index) => (
          <Col className="py-3" xs={12} md={5} xl={4} key={index}>
            <CardComponent {...card} />
          </Col>
        ))}
      </Row>
      <hr className="my-5 border-light" />
      <Row className="justify-content-center mb-2">
        <Col xs={12} md={12} className="p-0">
            <Carousel fade indicators controls className="shadow-lg rounded-lg overflow-hidden">
                {carouselItems.map((item, index) => (
                    <Carousel.Item key={index} style={{ height: '450px', position: 'relative' }}>
                        <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            className="d-block"
                            style={{ objectFit: 'cover' }}
                            priority={index === 0}
                        />
                        <Carousel.Caption className="bg-dark bg-opacity-75 rounded-top">
                            <h3>{item.captionTitle}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Col>
      </Row>
    </section>
  );
}