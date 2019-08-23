'use strict';

const route = require("express").Router()
  var nem = require('../controllers/nemController');

  route.get(/account/get ,nem.accountget);
  route.get(/account/generate ,nem.accountgenerate);
  route.get(/account/unconfirmedTransactions ,nem.unconfirmedTransactions);
  route.get(/account/transfers/incoming ,nem.accounttransfersincoming);
  route.get(/chain/height ,nem.chainheight);
  route.get(/account/transfers/all ,nem.accounttransfersall);
  route.get(/account/historical/get ,nem.accounthistoricalget);
  route.get(/account/transfers/outgoing ,nem.accounttransfersoutgoing);
  //route.get(/node/info ,nem.nodeinfo);

 


    







    
  

