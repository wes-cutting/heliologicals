const express = require('express');
const router = express.Router();
const RouteGenerator = require('./route-generator');
const { MongooseCRUD } = require('../../../data/mongoose');
const ApplicationSchema = require('../../../data/schemas/application-schema');

const ApplicationCollection = new MongooseCRUD('Application', ApplicationSchema);

router.use('/applications', RouteGenerator(ApplicationCollection));

module.exports = router;
