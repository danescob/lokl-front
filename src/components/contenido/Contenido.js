import { Container } from "react-bootstrap";
import { Imagen } from "../imagen/Imagen";
import { Simulador } from "../simulador/Simulador";
import "./Contenido.css";

export function Contenido(){
  return (
    <Container>
      <Simulador></Simulador>
      <Imagen></Imagen>
    </Container>
  );
}