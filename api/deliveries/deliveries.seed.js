const { Delivery } = require("./deliveries.model");

const data = {
  client_name: "Djow",
  weight: 98,
  address: {
    address_components: [
      { long_name: "61", short_name: "61", types: ["street_number"] },
      {
        long_name: "Rua da Chibata",
        short_name: "R. da Chibata",
        types: ["route"]
      },
      {
        long_name: "Vila Andrade",
        short_name: "Vila Andrade",
        types: ["political", "sublocality", "sublocality_level_1"]
      },
      {
        long_name: "São Paulo",
        short_name: "São Paulo",
        types: ["administrative_area_level_2", "political"]
      },
      {
        long_name: "São Paulo",
        short_name: "SP",
        types: ["administrative_area_level_1", "political"]
      },
      {
        long_name: "Brasil",
        short_name: "BR",
        types: ["country", "political"]
      },
      {
        long_name: "05734-100",
        short_name: "05734-100",
        types: ["postal_code"]
      }
    ],
    formatted_address:
      "R. da Chibata, 61 - Vila Andrade, São Paulo - SP, 05734-100, Brasil",
    geometry: {
      location: { lat: -23.6262144, lng: -46.7435996 },
      location_type: "ROOFTOP",
      viewport: {
        northeast: { lat: -23.6248654197085, lng: -46.74225061970849 },
        southwest: { lat: -23.6275633802915, lng: -46.74494858029149 }
      }
    },
    place_id: "ChIJubjMhFRRzpQR16afT2i8KIU",
    plus_code: {
      compound_code: "97F4+GH São Paulo, SP, Brasil",
      global_code: "588M97F4+GH"
    },
    types: ["street_address"]
  }
};

const deliveryData = {
  client_name: "Djow",
  weight: 98,
  address: {
    street_number: "61",
    complement: "123456789",
    route: "R. da Chibata",
    neighborhood: "Vila Andrade",
    city: "São Paulo",
    state: "SP",
    country: "BR",
    geometry: { lat: -23.626215, lng: -46.7436 }
  }
};

const deliveries = [
  { ...deliveryData, client_name: "Manow" },
  { ...deliveryData, client_name: "Brow" }
];

const populateDeliveries = done => {
  Delivery.remove({})
    .then(() => {
      return Delivery.insertMany(deliveries);
    })
    .then(() => done());
};

module.exports = { deliveries, populateDeliveries, data };
