const request = require('request');

const drugLabel = (drug, callback) => {
  const url = 'https://api.fda.gov/drug/label.json?search=active_ingredient:' + drug;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to API', undefined);
    } else if (!body.meta || !body.meta.results || body.meta.results.total === 0) {
      callback('Unable to find drug', undefined);
    } else {
      callback(undefined, {
        activeIngredient: body.results[0].active_ingredient,
        inactiveIngredient: body.results[0].inactive_ingredient,
        purpose: body.results[0].purpose, 
        warnings: body.results[0].warnings,
        dosage: body.results[0].dosage_and_administration 
      });
    }
  });
};



// drugLabel('Loratadine', (error, result) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(result);
//   }
// });

module.exports = drugLabel;
