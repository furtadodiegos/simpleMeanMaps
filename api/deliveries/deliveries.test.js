/**
 * Dependencies
 */
const request = require("supertest");

/*** Resources*/
const { deliveries, populateDeliveries, data } = require("./deliveries.seed");
const { Delivery } = require("./deliveries.model");
const { app } = require("../../index");

describe("Deliveries", () => {
  beforeAll(populateDeliveries);

  it("should get all deliveries", done => {
    request(app)
      .get("/api/deliveries")
      .expect(200)
      .expect(({ body }) => {
        expect(typeof body).toBe("object");
        expect(body.length).toBe(2);
        expect(body[0].client_name).toBe(deliveries[0].client_name);
      })
      .end(done);
  });

  it("should save a new delivery and return it", done => {
    request(app)
      .post("/api/deliveries")
      .send(data)
      .expect(201)
      .expect(({ body }) => {
        expect(typeof body).toBe("object");
        expect.objectContaining({
          _id: expect(typeof body._id).toBe("string"),
          client_name: expect(body.client_name).toBe("Djow"),
          route: expect(body.address.route).toBe("R. da Chibata")
        });
      })
      .end(done);
  });

  it("should not save and return a required fields message", done => {
    request(app)
      .post("/api/deliveries")
      .send({})
      .expect(400)
      .expect(({ text }) => {
        expect(text).toBe("Address fields are invalid.");
      })
      .end(done);
  });

  it("should remove all deliveries and then return an empty array", done => {
    request(app)
      .delete("/api/deliveries")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        Delivery.find({})
          .then(deliveries => {
            expect(deliveries.length).toBe(0);
            done();
          })
          .catch(e => done(e));
      });
  });
});
