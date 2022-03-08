import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { SimulacionModel } from "../../models/simulacionModel";
import "./Simulador.css";
export function Simulador() {
  const {hash} = useParams();
  const [simulacionGuardada] = useState({
    porcentaje: React.createRef(),
    valor: React.createRef(),
    valorMostrar: React.createRef(),
    living: React.createRef(),
    periodo: React.createRef(0),
    usuario_id: React.createRef(),
  });

  const [simulacionActual, setSimulacionActual] = useState(new SimulacionModel({}));
  const [simulacionAnterior, setSimulacionAnterior] = useState(new SimulacionModel({}));
  const [simulacionSiguiente, setSimulacionSiguiente] = useState(new SimulacionModel({}));

  const simulacionDatos = {periodo: 0};
  const cambiaSimulacion = (evento) =>{
    simulacionGuardada[evento.target.name].current.value = evento.target.value;
    simulacionDatos[evento.target.name] = evento.target.value;
  }

  const enviarDatos = () => {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        valor: simulacionActual.valor,
        living: simulacionActual.living,
        periodo: simulacionActual.periodo,
        porcentaje: simulacionActual.porcentaje,
      })
    };

    fetch('http://ec2-35-85-149-102.us-west-2.compute.amazonaws.com:8088/simulacion', requestOptions)
    .then(response => response.json())
    .then(data => () => {
      alert("La informacion se guardó");
      console.log(data);
    })
    .catch(error => {
      this.setState({ errorMessage: error.toString() });
      console.error('There was an error!', error);
    });
  }

  const consultarDatos = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };

    fetch('http://ec2-35-85-149-102.us-west-2.compute.amazonaws.com:8088/usuario/'+hash, requestOptions)
    .then(response => response.json())
    .then(data => {
      const simulacion = new SimulacionModel(data.simulacion[0]);
      simulacionGuardada.valor.current.value = simulacion.valor;
      simulacionGuardada.living.current.value = simulacion.living;
      simulacionGuardada.porcentaje.current.value = "17";
      simulacionGuardada.periodo.current.value = simulacion.periodo;  
      simulacionGuardada.usuario_id.current.value = simulacion.usuario_id;  
      calcularActual();
      calcularAnterior();
      calcularSiguiente();
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  }

  useEffect(() =>{

    consultarDatos();
  }, [hash])

  const calcularActual = () =>{
    const anoActual =  new Date().getFullYear();
    const valor = Number(simulacionGuardada.valor.current.value) *  Number(simulacionGuardada.porcentaje.current.value);
    const simulacion = new SimulacionModel({
      valor : new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valor),
      periodo: Number(anoActual) + Number(simulacionGuardada.periodo.current.value)
    });
    setSimulacionActual(simulacion);
  }
  const calcularAnterior = () =>{
    const anoActual =  new Date().getFullYear();
    const valor = Number(simulacionGuardada.valor.current.value) *  Number(simulacionGuardada.porcentaje.current.value);
    const simulacion = new SimulacionModel({
      valor : new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valor),
      periodo: Number(anoActual) + (Number(simulacionGuardada.periodo.current.value)-1)
    });
    setSimulacionAnterior(simulacion);
  }
  const calcularSiguiente = () =>{
    const anoActual =  new Date().getFullYear();
    const valor = Number(simulacionGuardada.valor.current.value) *  Number(simulacionGuardada.porcentaje.current.value);
    const simulacion = new SimulacionModel({
      valor : new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valor),
      periodo: Number(anoActual) + (Number(simulacionGuardada.periodo.current.value)+1)
    });
    setSimulacionSiguiente(simulacion);
  }
  

  return (
    <Col md="7" className="simulador">
      <Row className="titulolinea">
        <Col lg="7" xs="7" className="titulo">Simulador de Inversion</Col>      
        <Col lg="5" xs="5" className="envio">
          <a href="#" onClick={enviarDatos} >Enviar por Correo</a>
        </Col>
      </Row>
      <Container>
        <Row className="lineaimputs">
          <Col lg="4">
            <input ref={simulacionGuardada.valor} name="valor" id="valor" onChange={cambiaSimulacion} className="input valor"></input>
          </Col>
          <Col lg="2">
            <input ref={simulacionGuardada.living} name="living" id="living" onChange={cambiaSimulacion} className="input living"></input>
          </Col>
          <Col lg="3">
            <input ref={simulacionGuardada.periodo} name="meses" id="meses" onChange={cambiaSimulacion} className="input meses"></input>
          </Col>
          <Col lg="3">
            <input ref={simulacionGuardada.porcentaje} name="porcentaje" id="porcentaje" onChange={cambiaSimulacion} className="input porcentaje"></input>
            <input ref={simulacionGuardada.usuario_id} name="porcentaje" type="hidden" id="porcentaje" onChange={cambiaSimulacion} className="input porcentaje"></input>
          </Col>
        </Row>
        <Row>
          <hr/>
        </Row>      
        <Row>
          <Col className="bajoinput" lg="4">Tu presupuesto <br/> a invertir</Col>
          <Col className="bajoinput" lg="2">Total living shared</Col>
          <Col className="bajoinput" lg="3">Periodo de tu <br/>inversion</Col>
          <Col className="bajoinput" lg="3">Retorno <br/> promedio (ROI)</Col>
        </Row>
        <Row>
          <div className="listatitulo">Utilidad total proyectada</div>
        </Row>
        <Row>
          <Container>
            <Row>
            <Col lg="1" className="flecha">
              <img src="/assets/img/flecha.svg" alt=""/>
            </Col>
            <Col lg="11">
              <Container className="simuladorlista">
                <Row >
                  <Container className="simuladorItem">
                    <Row className="">
                      <Container className="listaAno">Año {simulacionAnterior.periodo}</Container>
                    </Row>
                    <Row className="">
                      <Container className="listaValor">{simulacionAnterior.valor}</Container>
                    </Row>
                    <Row>
                      <hr />
                    </Row>
                  </Container>
                </Row>
              
                <Row >
                  <Container className="simuladorItem activo">
                    <Row className="">
                      <Container className="listaAno activo">Año {simulacionActual.periodo}</Container>
                    </Row>
                    <Row className="">
                      <Container className="listaValor activo">{simulacionActual.valor}</Container>
                    </Row>
                    <Row>
                      <hr />
                    </Row>
                  </Container>
                </Row>
              
                <Row >
                  <Container className="simuladorItem">
                    <Row className="">
                      <Container className="listaAno">Año {simulacionSiguiente.periodo}</Container>
                    </Row>
                    <Row className="">
                      <Container className="listaValor">{simulacionSiguiente.valor}</Container>
                    </Row>
                    <Row>
                      <hr />
                    </Row>
                  </Container>
                </Row>
                
              </Container>
            </Col>
            </Row>
          </Container>
        </Row>
        <Row className="navegacion">
          <Col>
            <span className="restaurar">
              <a href="/" >Volver a Simular</a>
            </span>
          </Col>
          <Col>&nbsp;</Col>
          <Col>
            <Button variant="dark" className="suscribirme">¡Invierte Ahora!</Button>
          </Col>
        </Row>
        <Row>
          <Col lg="1">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 1C5.25383 1 1 5.25383 1 10.5C1 15.7462 5.25383 20 10.5 20C15.7462 20 20 15.7462 20 10.5C20 5.25383 15.7462 1 10.5 1Z" stroke="#6DECB9" strokeWidth="2" strokeMiterlimit="10"/>
            </svg>
          </Col>
          <Col className="pie">Los valores y/o cifras acá reflejados son aproximados y no comprometen o vinculan a Lokl”</Col>
        </Row>
      </Container>
    </Col>
  )
}