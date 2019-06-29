angular.module("App").factory("MapService", () => {
  function mapGenerator(cities, clients) {
    clients &&
      clients.length &&
      clients.map(client =>
        L.marker([client.address.geometry.lat, client.address.geometry.lng])
          .bindPopup(client.address.route)
          .addTo(cities)
      );

    const mbUrl =
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw";

    const grayscale = L.tileLayer(mbUrl, { id: "mapbox.light" }),
      streets = L.tileLayer(mbUrl, { id: "mapbox.streets" });

    const map = L.map("map", {
      center: [
        clients[0] ? clients[0].address.geometry.lat : -23.5882569,
        clients[0] ? clients[0].address.geometry.lng : -46.6821953
      ],
      zoom: 10,
      layers: [grayscale, cities]
    });

    const baseLayers = { Grayscale: grayscale, Streets: streets };

    const overlays = { Cities: cities };

    L.control.layers(baseLayers, overlays).addTo(map);
  }

  return { mapGenerator };
});
