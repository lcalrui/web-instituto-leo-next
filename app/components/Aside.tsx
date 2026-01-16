'use client';
import { Card } from 'react-bootstrap';
import { Autocomplete, TextField, ThemeProvider, createTheme } from '@mui/material';
import heroes from '../../data/heroes.json';

const darkTheme = createTheme({
  palette: {
    mode: 'dark', 
    background: {
      default: '#121212', 
      paper: '#2c3034', 
    },
  }
});

const marvelHeroes = heroes.filter(hero => hero.publisher === "Marvel Comics");

export default function Aside() {

    return (
        <ThemeProvider theme={darkTheme}>
            <aside className="py-3">
                <Card className="bg-secondary text-white shadow-lg mb-4">
                    <Card.Body>
                        <Card.Title className="mb-3">Busca tu Héroe (Marvel)</Card.Title>
                        <Autocomplete
                            options={marvelHeroes}
                            getOptionLabel={(option) => option.superhero}
                            renderInput={(params) => (
                                <TextField 
                                    {...params} 
                                    label="Selecciona un Superhéroe" 
                                />
                            )}
                        />
                    </Card.Body>
                </Card>

                <Card className="bg-secondary text-white shadow-lg">
                    <Card.Body>
                        <Card.Title className="mb-3">Video de YouTube</Card.Title>
                        <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
                            <iframe 
                                src="https://www.youtube.com/embed/0mJQGDMI0OE?si=AMXDQ_oPwJUXba2E" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                            ></iframe>
                        </div>
                    </Card.Body>
                </Card>
                
            </aside>
        </ThemeProvider>
    );
}