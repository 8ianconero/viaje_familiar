class Item{
    constructor(id,name,price,description,type, qty) {
        this.id = id
        this.name = name;
        this.price = price;
        this.description = description;
        this.type = type;
        this.qty = qty;
    }
}

export let items = [
    //vuelo
    new Item('vl00', "Aeroméxico", 23500,'CDMX > NRT', 'vuelo', 1),
    new Item('vl01', "ANA", 24995,'CDMX > NRT', 'vuelo', 1),
    new Item('vl02', "Aeroméxico", 23500,'MTY > CDMX > NRT', 'vuelo', 1),
    new Item('vl03', "Aeroméxico", 23500,'AGU > CDMX > NRT', 'vuelo', 1),

    //jr pass
    new Item('jr00','JR Pass', 8910, '14 días', 'transporte',1),

    //pasaporte
    new Item('ps00', '3 años', 1300, 'Pasaporte 3 años', 'pasaporte', 1),
    new Item('ps01', '6 años', 1790, 'Pasaporte 6 años', 'pasaporte', 1),
    new Item('ps02', '10 años', 2750, 'Pasaporte 10 años', 'pasaporte', 1),

    //comida
    new Item("cm00", "Justo", 2800, "", "comida", 1),
    new Item("cm01", "Normal", 7000, "", "comida", 1),
    new Item("cm02", "Más de lo Normal", 14000, "", "comida", 1),
    new Item("cm03", "Nivel Monty", 29400, "", "comida", 1),


    new Item('cm11','Desayuno', 40,"Paquete barato de desayuno(Hasta las 10:30)",'comidaMc',1),
    new Item('cm17','Comida', 100,"Paquete barato de comida (Desde las 10:30)",'comidaMc',1),
    new Item('cm22','Cajita Feliz', 95,"Cajita Feliz más barata de McDonald's",'comidaMc',1),

    //hospedaje
    new Item("hs00", "Hotel Capsula", 2800, "", "hospedaje", 1),

    //atracciones
    new Item('at05','Castillo Nijo', 110,'','atracciones', 1),

    //otros
    new Item("ot00", "Peluche PKMN", 350, "", "otros", 1),

    //gasto manual
    new Item('gm00', 'Gastos manuales', 0, '', 'gastos manuales',1)

  ];

  // new Item("", "", , "", "", 1),