const fetch = require("node-fetch");
const API_KEY = "t7DZIOAcnNArVa1bI75iVe3e8k81QloEdQ1uY1rJ";
//fetching from the API. need for updating to database. There may be an easier way to do it compared to how im doing this.
async function getDrugInfo(drugName) {
    const url = `https://api.fda.gov/drug/label.json?api_key=${API_KEY}&search=brand_name:${drugName}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.results.length === 0) {
      throw new Error(`No results found for drug name "${drugName}"`);
    } else {
      return data.results[0];
    }
  }
  

module.exports = {
  getDrugInfo,
};
