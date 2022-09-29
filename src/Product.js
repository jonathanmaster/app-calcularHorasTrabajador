/**
 * Product Class
 */
export class Usuario {
  /**
   *
   * @param {string} name The Product Name
   * @param {number} cedula The Product cedula
   * @param {number} horas The horas creation of the Product
   * @param {number} coste The product coste
   * 
   */
  constructor(name, cedula, horas,coste) {
    this.name = name;
    this.cedula = cedula;
    this.horas = horas;
    this.coste = coste;
  }

  
}
