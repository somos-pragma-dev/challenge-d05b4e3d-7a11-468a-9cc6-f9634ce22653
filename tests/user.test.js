const mongoose = require('mongoose');
const request = require('supertest');
const express = require('express');
const app = express();
const userRoutes = require('../src/routes/users');
const User = require('../src/models/user');

app.use(express.json());
app.use('/users', userRoutes);

describe('User API', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/testdb', { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create a new user', async () => {
    const res = await request(app)
     .post('/users')
     .send({
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'password123'
      });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('name', 'John Doe');
  });

  it('should not create a user with duplicate email', async () => {
    await request(app)
     .post('/users')
     .send({
        name: 'Jane Doe',
        email: 'johndoe@example.com',
        password: 'password123'
      });
    const res = await request(app)
     .post('/users')
     .send({
        name: 'Jane Doe',
        email: 'johndoe@example.com',
        password: 'password123'
      });
    expect(res.statusCode).toBe(400);
    expect(res.text).toContain('duplicate key error');
  });
});