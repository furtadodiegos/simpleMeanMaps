angular.module("App").controller("deliveriesController", deliveriesController);

function deliveriesController(
  $scope,
  $http,
  $mdSidenav,
  HTTPService,
  MapService
) {
  const cities = L.layerGroup();

  $scope.data = {};
  $scope.loading = false;
  $scope.clients = getClients();

  $scope.open = () => $mdSidenav("left").toggle();
  $scope.close = () => $mdSidenav("left").toggle();

  $scope.selectedItemChange = address =>
    ($scope.data = { ...$scope.data, address });

  function getClients() {
    HTTPService.GET().then(res => {
      $scope.clients = res || [];

      MapService.mapGenerator(cities, $scope.clients);
    });
  }

  $scope.querySearch = query =>
    $http
      .get(getAddress(query))
      .then(res => res.data.results)
      .catch(() => []);

  $scope.submit = () => {
    $scope.loading = true;

    setTimeout(
      () =>
        HTTPService.POST($scope.data)
          .then(res => {
            $scope.clients.push(res);

            L.marker([res.address.geometry.lat, res.address.geometry.lng])
              .bindPopup(res.address.route)
              .addTo(cities);
          })
          .finally(() => ($scope.loading = false)),
      2000
    );
  };

  $scope.delete = () => HTTPService.DELETE().then(() => ($scope.clients = []));
}

function getAddress(address) {
  return `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&region=br&key=AIzaSyDm6wJwreWxnMrsv-k9-kxr0gQ23GfjvGw`;
}
