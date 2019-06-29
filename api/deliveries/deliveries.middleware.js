const handleFields = (req, res, next) => {
  try {
    let fields = {
      client_name: req.body.client_name,
      weight: req.body.weight,
      address: {}
    };

    req.body.address.address_components.map(component => {
      switch (component.types[0]) {
        case "street_number":
          return (fields.address["street_number"] = component.short_name);
        case "postal_code":
          return (fields.address["complement"] = component.short_name);
        case "route":
          return (fields.address["route"] = component.short_name);
        case "country":
          return (fields.address["country"] = component.short_name);
        case "political":
          return (fields.address["neighborhood"] = component.short_name);
        case "administrative_area_level_1":
          return (fields.address["state"] = component.short_name);
        case "administrative_area_level_2":
          return (fields.address["city"] = component.short_name);
      }
    });

    if (!fields.address.street_number) {
      fields.address.street_number = 1;
    }

    if (!fields.address.route) {
      fields.address.route = fields.address.neighborhood;
    }

    if (!fields.address.city) {
      fields.address.city = fields.address.state;
    }

    if (!fields.address.complement) {
      fields.address.complement = req.body.address.formatted_address
    }

    if (!fields.address.neighborhood) {
      fields.address.neighborhood = fields.address.state
    }

    fields.address.geometry = { ...req.body.address.geometry.location };

    req.body = fields;

    next();
  } catch (e) {
    res.status(400).send("Address fields are invalid.");
  }
};

module.exports = { handleFields };
