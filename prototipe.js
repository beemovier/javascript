let animal = {
    tipo: 'mamífero',
    som: function() { console.log('Som do animal'); }
  };
  
  let cachorro = Object.create(animal);
  cachorro.tipo = 'cachorro';
  cachorro.som = function() { console.log('Latido'); };
  
  console.log(cachorro.tipo);  // cachorro
  cachorro.som();  // Latido
  