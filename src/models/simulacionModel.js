export class SimulacionModel {
  valor;
  living;
  periodo;
  porcentaje;
  hash;
  usuario_id;

  constructor(data){
    this.valor = data.valor??undefined;
    this.living = data.living??undefined;
    this.periodo = data.periodo??undefined;
    this.porcentaje = data.porcentaje??undefined;
    this.usuario_id = data.usuario_id??undefined;
    this.hash = data.usuario_id??undefined;
  }
}