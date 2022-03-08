import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Inicio.css";

export function Inicio(){
  const [formdata] = useState({
    correo: React.createRef(),
    valor: React.createRef(),
    living: React.createRef(),
    periodo: React.createRef(0),
  });
  const simulacionDatos = {periodo: 0};
  const cambiaSimulacion = (evento) =>{
    formdata[evento.target.name].current.value = evento.target.value;
    simulacionDatos[evento.target.name] = evento.target.value;
  }

  const aumentar = () => {
    formdata.periodo.current.value++;
    simulacionDatos.periodo = formdata.periodo.current.value;
  }

  const disminuir = () => {
    if(formdata.periodo.current.value > 0){
      formdata.periodo.current.value--; 
      simulacionDatos.periodo = formdata.periodo.current.value;
    }
  }

  const enviarDatos = () =>{

    simulacionDatos.correo = formdata.correo.current.value;
    simulacionDatos.valor = formdata.valor.current.value;
    simulacionDatos.living = formdata.living.current.value;
    simulacionDatos.periodo = formdata.periodo.current.value;

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(simulacionDatos)
    };
    fetch('http://localhost:8080/usuario', requestOptions)
    .then(response => response.json())
    .then(data => {
      alert("La informacion se guardó");
    })
    .catch(error => {
      this.setState({ errorMessage: error.toString() });
      console.error('There was an error!', error);
    });
  }
  return (
    <Container>
      <Row>
        <Col lg="6">
          <Container>
            <Row>
              <Container>
                <Row >
                  <span className="tituloinicio">
                    Así de fácil es crecer <br />tu patrimonio con
                  </span>
                  </Row>
                <Row>
                  <span className="tituloiniciolockl">
                    LOKL
                  </span>
                </Row>
                <Row >
                  <span className="subtituloinicio">
                    Descubre cómo crecerá tu<br />
                    inversión en el tiempo.
                  </span>
                </Row>
              </Container>
            </Row>
            <Row >
              <Col className="iconosinicio">
                <img src="assets/img/inicio-icono1.svg" alt="" />
              </Col>
              <Col className="iconosinicio">
                <img src="assets/img/inicio-icono2.svg" alt="" />
              </Col>
              <Col className="iconosinicio">
                <img src="assets/img/inicio-icono3.svg" alt="" />
              </Col>
            </Row>
          </Container>
        </Col>


        <Col lg="6">
          <Container>
            <Row><Col className="espaciosuperiorderecho">&nbsp;</Col></Row>
            <Row>
              <Col>
                <Container>
                  <Row>
                    <Col lg="2" className="etiquetainicio">Proyecto</Col>
                    <Col lg="10" className="resaltadoinicio">Indie Universe</Col>
                  </Row>
                </Container>
              </Col>
            </Row>
            <Row><Col className="espaciointermedio">&nbsp;</Col></Row>
            <Row>
              <Col>
                <Container>
                  <Row>
                    <Col>
                      <input name="correo" id="correo" type="email" ref={formdata.correo} onChange={cambiaSimulacion} />
                    </Col>
                  </Row>
                  <Row>
                    <span className="etiquetainicio">Correo electrónico</span>
                  </Row>
                </Container>
              </Col>
            </Row>
            <Row><Col className="espaciointermedio">&nbsp;</Col></Row>
            <Row>
              <Col lg="6">
                <Container>
                  <Col  className="resaltadoinicio">¿Cuánto<br/>quieres invertir?</Col>
                </Container>
              </Col>
            </Row>
            <Row><Col className="espaciointermedio">&nbsp;</Col></Row>
            <Row>
              <Col lg="9">
              <Container>
                <Row>
                  <Col>
                    <input name="valor" id="valor" ref={formdata.valor} onChange={cambiaSimulacion}  />
                  </Col>
                </Row>
                <Row>
                  <span className="etiquetainicio">Monto mínimo: 4.000.000 COP</span>
                </Row>
              </Container>
              </Col>
              <Col lg="3">
                <Container>
                  <Row>
                    <Col><input name="living" id="living" ref={formdata.living}  onChange={cambiaSimulacion} /></Col>
                  </Row>
                  <Row>
                    <span className="etiquetainicio textocentrado etiquetaliving">Total de living shares</span>
                  </Row>
                </Container>
              </Col>
            </Row>
            <Row><Col className="espaciointermedio">&nbsp;</Col></Row>
            <Row><Col className="espaciointermedio">&nbsp;</Col></Row>
            
            <Row>
              <Col>
                <Container>
                  <Row>
                    <div className="botonesformulario">  
                      <span className="resaltadoinicio">Tiempo estimado<br/>de tu inversión</span>
                      <div className="contenedorPeriodo">
                        <img src="assets/img/menos.svg" className="aumentar" alt="Disminuir" onClick={disminuir}/>
                        <input name="periodo" id="periodo" ref={formdata.periodo} defaultValue={0} maxLength="2" className="periodo"  onChange={cambiaSimulacion}/>
                        <img src="assets/img/mas.svg" className="aumentar" alt="Aumentar" onClick={aumentar}/>
                        <p className="etiquetainicio textocentrado etiquetaliving">Años</p>
                      </div>
                      
                      <a  href="#" className="botoncontinuar" onClick={enviarDatos}>Continuar</a>
                    </div>
                  </Row>    
                </Container>
              </Col>             
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}