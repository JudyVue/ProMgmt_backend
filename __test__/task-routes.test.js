'use strict';

const superagent = require('superagent');
const server = require('../server.js');
const serverToggle = require('../lib/toggle.js');
const User = require('../model/user.js');
const Task = require('../model/task.js');
const PORT = process.env.PORT || 3000;

require('jest');

const url = `http://localhost:${PORT}`;

describe('Task Routes', function() {
  beforeAll( done => {
    serverToggle.serverOn(server, done);
  });

  afterAll( done => {
    serverToggle.serverOn(server, done);
  });

  describe('POST /api/project/:projectId/task', () => {
    describe('with VALID usage', () => {
      it('should return a 200 status code for valid requests', done => {
        // TODO: add test
        done();
      });
    });

    describe('with INVALID usage', () => {
      it('should respond with a 400 if the request body is invalid', done => {
        // TODO: add test
        done();
      });
    });
  });

  describe('GET /api/task/:taskId', () => {
    describe('with VALID usage', () => {
      it('should return a 200 status code for valid requests', done => {
        // TODO: add test
        done();
      });
    });

    describe('with invalid usage', () => {
      it('should respond with a 404 for an ID that is not found', done => {
        // TODO: add test
        done();
      });

      it('should respond with a 400 if no ID is provided', done => {
        // TODO: add test
        done();
      });

      it('should respond with a 401 if no token was provided', done => {
        // TODO: add test
        done();
      });  
    });
  });

  describe('PUT /api/task/:taskId', () => {
    describe('with VALID usage', () => {
      it('should return a 200 status code for valid requests', done => {
        // TODO: add test
        done();
      });
    });

    describe('with INVALID usage', () => {
      it('should respond with a 404 for an ID that is not found', done => {
        // TODO: add test
        done();
      });

      it('should respond with a 400 if no ID is provided', done => {
        // TODO: add test
        done();
      });

      it('should respond with a 401 if no token was provided', done => {
        // TODO: add test
        done();
      });  
    });
  });

  describe('DELETE /api/task/:taskId', () => {
    describe('with VALID usage', () => {
      it('should return a 204 when item has been deleted', done => {
        // TODO: add test
        done();
      });
    });
  });
});