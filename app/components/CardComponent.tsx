import { Card, Button } from "react-bootstrap";

export interface CardProps {
    title: string;
    text: string;
    imgSrc: string;
    bg?: string;
    buttonVariant?: string;
    buttonLink?: string;
}

export default function CardComponent({ title, text, imgSrc, bg = 'dark', buttonVariant = 'primary', buttonLink = '#'}: CardProps) {
    return (
    <Card bg={bg} text={text}>
      <Card.Img 
        variant="top" 
        src={imgSrc}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text className="flex-grow-1">{text}</Card.Text>
        <Button variant={buttonVariant} className="mt-auto" href={buttonLink}>Ver Más</Button>
      </Card.Body>
    </Card>
    );
}