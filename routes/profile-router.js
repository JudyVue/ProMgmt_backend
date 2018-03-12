'use strict';

const debug = require('debug')('promgmt:user-router');
const createError = require('http-errors');
const jsonParser = require('body-parser').json();
const Router = require('express').Router;
const bearerAuth = require('../lib/bearer-auth.js');
const Profile = require('../model/profile.js');

const profileRouter = module.exports = Router();

profileRouter.post('/api/user/:userId/profile', bearerAuth, jsonParser, function(req, res, next) {
  debug('POST: /api/user/userId/profile');

  req.body.userId = req.user._id;

  if(!req.body.userId) {
    return next(createError(400, 'user id not found'))
  }

  new Profile(req.body).save()
    .then( profile => res.json(profile))
    .catch(next);
});

profileRouter.get('/api/profile/:profileId', bearerAuth, function(req, res, next) {
  debug('GET: /api/profile');

  Profile.findById(req.params.profileId)
    .then( profile => res.json(profile))
    .catch(next);
});

profileRouter.put('/api/profile/:profileId', bearerAuth, jsonParser, function(req, res, next) {
  debug('PUT: /api/profile/profileId');

  if(!req.body.profileId) {
    res.status(404).send();
  }

  if(req.body.firstName || req.body.lastName || req.body.desc || req.body.title || req.body.company || req.body.avatarURI) {

    Profile.findByIdAndUpdate(req.params.profileId, req.body, { new: true })
      .then( profile => res.json(profile))
      .catch( err => {
        if(err.name === 'ValidationError') return next(err);
        next(createError(404, err.message));
      });
  }
});

profileRouter.delete('/api/profile/:profileId', bearerAuth, function(req, res, next) {
  debug('DELETE: /api/profile/profileId');

  if(!req.body.profileId) {
    res.status(404).send();
  }

  Profile.findByIdAndRemove(req.params.profileId)
    .then( () => res.status(204).send())
    .catch( err => next(createError(404, err.message)));
});