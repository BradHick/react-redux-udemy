const express = require('express');


module.exports = function(server){

  //Defining base URL for all routes
  const router = express.Router();
  server.use('/api', router);
  
  //Route of Billing Cycle
  const BillingCycle = require('../api/billingCycle/billingCycleService');
  BillingCycle.register(router, '/billingCycles');
  
};