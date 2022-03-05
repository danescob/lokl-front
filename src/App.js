import {Navbar, Nav, Container} from "react-bootstrap"
import './App.css';
import { Contenido } from "./components/contenido/Contenido";

function App() {
  return (
<header>
  <Navbar bg="light" variant="light">
    <Container>
    <Nav>
      <svg className="menu" width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5.4" cy="9.4" r="2.4" fill="#6DECB9"/>
        <circle cx="5.4" cy="22.6" r="2.4" fill="#6DECB9"/>
        <circle cx="18.6" cy="9.4" r="2.4" fill="#6DECB9"/>
        <circle cx="18.6" cy="22.6" r="2.4" fill="#6DECB9"/>
      </svg>
    </Nav>  
    <Navbar.Brand href="#home">
      <svg className="logo" width="78" height="25" viewBox="0 0 78 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M41.2943 0.481079V24.5198H46.2843V18.8865L51.2062 13.4725L56.1054 18.8865V24.5198H61.0955V17.322L54.2672 9.79309L62.4578 0.481079H56.1068L46.7382 11.241V0.481079H41.2943Z" fill="#6DECB9"/>
        <path d="M5.44391 19.2307V0.481079H0V24.5198H13.9502V19.2314H5.44391V19.2307Z" fill="#6DECB9"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M26.3352 25C33.1744 25 38.7201 19.5742 38.7201 12.5C38.7201 5.42576 33.1744 0 26.3352 0C19.4959 0 13.9502 5.42576 13.9502 12.5C13.9502 19.5742 19.4959 25 26.3352 25ZM32.8196 15.2105C31.8279 17.9507 29.3239 19.643 26.3352 19.643C22.4565 19.643 19.3941 16.7923 19.3941 12.5C19.3941 8.2077 22.4565 5.35704 26.3352 5.35704C30.2138 5.35704 33.2762 8.2077 33.2762 12.5C33.2762 13.4849 33.1146 14.3942 32.8196 15.2105Z" fill="#6DECB9"/>
        <path d="M74.754 19.2307H69.4937V0.481079H64.0498V24.5198H78V19.2314H74.754V19.2307Z" fill="#6DECB9"/>
      </svg>
    </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">PROPIEDADES</Nav.Link>
      <Nav.Link href="#features">SIMULADOR</Nav.Link>
      <Nav.Link href="#pricing">SEGURIDAD</Nav.Link>
      <Nav.Link href="#pricing">APRENDE</Nav.Link>
    </Nav>
    </Container>
    <Nav>
      <Nav.Link href="#world">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12H22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Nav.Link>
      <Nav.Link href="#user">
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="23" cy="23" r="23" fill="url(#paint0_linear_1_101)"/>
        <path d="M31.9885 33.1121V30.8649C31.9885 29.673 31.515 28.5299 30.6721 27.687C29.8293 26.8442 28.6862 26.3707 27.4942 26.3707H18.5057C17.3138 26.3707 16.1706 26.8442 15.3278 27.687C14.485 28.5299 14.0115 29.673 14.0115 30.8649V33.1121" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 21.8764C25.4821 21.8764 27.4942 19.8643 27.4942 17.3822C27.4942 14.9001 25.4821 12.8879 23 12.8879C20.5179 12.8879 18.5057 14.9001 18.5057 17.3822C18.5057 19.8643 20.5179 21.8764 23 21.8764Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
        <linearGradient id="paint0_linear_1_101" x1="0" y1="23" x2="46" y2="23" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6DECB9"/>
        <stop offset="1" stopColor="#6DECB9"/>
        </linearGradient>
        </defs>
        </svg>
      </Nav.Link>
    </Nav>
  </Navbar>
  <Contenido></Contenido>
</header>
  );
}

export default App;
