const {
  getDeliveries,
  addDelivery,
  delDeliveries
} = require("./deliveries.controllers");
const {handleFields} = require("./deliveries.middleware")

module.exports = router => {
  router.route("/deliveries").get(getDeliveries);

  router.route("/deliveries").post(handleFields, addDelivery);

  router.route("/deliveries").delete(delDeliveries);
};
