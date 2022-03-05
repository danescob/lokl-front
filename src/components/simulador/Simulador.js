import { Button, Col, Container, Row } from "react-bootstrap";
import "./Simulador.css";
export function Simulador() {
  let valor = "$4.000.000";
  let living = "40";
  let meses = "8 años";
  let porcentaje = "17%"

  const setValor = (valor) => {
    this.valor = valor;
  }

  const setLiving = (living) => {
    this.living = living; 
  }

  const setMeses = (meses) => {
    this.meses = meses;
  }

  const setPorcentaje = (porcentaje) => {
    this.porcentaje = porcentaje;
  }

  return (
    <Col xs="8" md="8" lg="8">
      <div className="row">
        <div className="col-6">Simulador de Inversion</div>      
        <div className="col-6">Enviar por Correo</div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <input value={valor} name="valor" id="valor" onChange={setValor}></input>
          </div>
          <div className="col-2">
            <input value={living} name="living" id="living" onChange={setLiving}></input>
          </div>
          <div className="col-4">
            <input value={meses} name="meses" id="meses" onChange={setMeses}></input>
          </div>
          <div className="col-2">
            <input value={porcentaje} name="porcentaje" id="porcentaje" onChange={setPorcentaje}></input>
          </div>
        </div>      
        <div className="row">
          <div className="col-4">Tu presupuesto <br/> a invertir</div>
          <div className="col-2">Total living shared</div>
          <div className="col-4">Periodo de tu <br/>inversion</div>
          <div className="col-2">Retorno <br/> promedio (ROI)</div>
        </div>
        <Row>
          <div className="">Utilidad total proyectada</div>
        </Row>
        <Row>
          <Container>
            <Col>Flecha</Col>
            <Col>
              <Container>
                <Row>
                  <Container>
                    <Row>Año 11</Row>
                    <Row>$4,658,116</Row>
                  </Container>
                </Row>
                <Row>
                  <Container>
                    <Row>Año 10</Row>
                    <Row>$4,658,116</Row>
                  </Container>
                </Row>
                <Row>
                  <Container>
                    <Row>Año 9</Row>
                    <Row>$4,658,116</Row>
                  </Container>
                </Row>
                <Row>
                  <Container>
                    <Row>Año 8</Row>
                    <Row>$4,658,116</Row>
                  </Container>
                </Row>
                <Row>
                  <Container>
                    <Row>Año 7</Row>
                    <Row>$4,658,116</Row>
                  </Container>
                </Row>
                <Row>
                  <Container>
                    <Row>Año 6</Row>
                    <Row>$4,658,116</Row>
                  </Container>
                </Row>
                <Row>
                  <Container>
                    <Row>Año 5</Row>
                    <Row>$4,658,116</Row>
                  </Container>
                </Row>
                <Row>
                  <Container>
                    <Row>Año 4</Row>
                    <Row>$4,658,116</Row>
                  </Container>
                </Row>
              </Container>
            </Col>
          </Container>
        </Row>
        <Row>
          <Col>Volver a Simular</Col>
          <Col>
            <Button>¡Invierte Ahora!</Button>
          </Col>
        </Row>
        <Row>
          <i></i>
          <span>Los valores y/o cifras acá reflejados son aproximados y no comprometen o vinculan a Lokl”</span>
        </Row>
      </div>
    </Col>
  )
}