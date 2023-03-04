const Joi = require('joi');

// validate drug input
const drugValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
    description: Joi.string().min(2).required(),
    type: Joi.string().min(2).required(),
    price: Joi.number().required(),
    manufacturer: Joi.string().min(2).required(),
  });

  return schema.validate(data);
};

module.exports.drugValidation = drugValidation;
