// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");


test('./musicians endpoint', async () => {
it const response = await request(app).get("/musicians");
const responseData = JSON.parse(response.text);
expect(response.statusCode).toBe(200);
})
    





    
