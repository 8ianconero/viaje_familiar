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
    new Item('vl00', "Aeroméxico", 23500,'CDMX > NRT', 'vuelo', 1),
    new Item('vl01', "ANA", 24995,'CDMX > NRT', 'vuelo', 1),
    new Item('vl02', "Aeroméxico", 23500,'MTY > CDMX > NRT', 'vuelo', 1),
    new Item('vl03', "Aeroméxico", 23500,'AGU > CDMX > NRT', 'vuelo', 1),
  ];