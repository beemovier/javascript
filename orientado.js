class Carro {
    constructor(marca, modelo) {
      this.marca = marca;   // Propriedade 'marca'
      this.modelo = modelo; // Propriedade 'modelo'
    }
  
    ligar() {
      console.log('O carro está ligado!'); // Ação: ligar o carro
    }
  }
  let meuCarro = new Carro('Toyota', 'Corolla');
  meuCarro.ligar();  // Resultado: O carro está ligado!
