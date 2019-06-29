/*** Resources*/
const { Delivery } = require("./deliveries.model");

const getDeliveries = async (req, res, next) => {
  try {
    res.send(await Delivery.find({}));
  } catch (e) {
    next(e);
  }
};

const addDelivery = async ({ body }, res, next) => {
  try {
    const newDelivery = await new Delivery(body).save();

    res.status(201).send(await Delivery.findById(newDelivery._id));
  } catch (e) {
    next(e);
  }
};

const delDeliveries = async (req, res, next) => {
  try {
    await Delivery.remove({});

    res.status(200).send();
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getDeliveries,
  addDelivery,
  delDeliveries
};
