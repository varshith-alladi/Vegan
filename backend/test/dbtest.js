const { expect } = require('chai');
const axios = require('axios');

const id = "6421dcec7c4f9174ea4549d6"
const data = {
    
"_id":"6421dcec7c4f9174ea4549d6",
    "id": "1",
    "title": "Almond cheese",
    "category": "Dairy",
    "desc": "Made from Almond Milk Gluten-free",
    "price": "240",
    "image": "https://media.istockphoto.com/photos/yogurt-picture-id515777808?k=20&m=515777808&s=612x612&w=0&h=ojA5JmT4EnDupeQSUL8ggNxyUhXnVgNkNQr5acuht3o="
  };

describe('GET /', () => {
  it('should return products from database if present', async () => {

    // Make request to route
    const res = await axios.get(`http://localhost:3001/allProducts`)

    // Check that cached data was returned
    expect(res.status).to.equal(200);
    expect(res.data).to.be.an('array').that.is.not.empty;
  });

  it('should return product with given id', async () => {

    // Make request to route
    const res = await axios.get(`http://localhost:3001/allProducts/${id}`)

    // Check that cached data was returned
    expect(res.status).to.equal(200);
    expect(res.data).to.deep.equal(data);
  });
});
