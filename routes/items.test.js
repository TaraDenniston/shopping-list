// Test routes (integration testing) with Supertest

process.env.NODE_ENV = 'test';
const request = require('supertest');
const app = require('../app');
let items = require('../fakeDb');

let testItem = { name: "test item 1", price: 5 };


beforeEach(async () => {
  items.push(testItem);
});

afterEach(async () => {
  items.length = 0;
});


/** GET /items
 *     returns list of items in JSON format */
describe('GET /items', () => {
  test("Returns list of items", async function () {
    const response = await request(app).get(`/items`);
    const { items } = response.body;
    expect(response.statusCode).toBe(200);
    expect(items).toHaveLength(1);
  });
});


/** POST /items
 *     creates item from data */
describe('POST /cats', () => {
  test('Creates a new item', async function () {
    const response = await request(app)
      .post(`/items`)
      .send({
        name: "test item 2", 
        price: 10
      });
    expect(response.statusCode).toBe(200);
    expect(items).toHaveLength(2);
  });
});