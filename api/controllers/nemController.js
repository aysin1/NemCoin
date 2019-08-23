'use strict';

var nemapi = require('nem-api');
//var san = new nemapi('http://23.228.67.85:7890/');//testnet default 


var nem = new nemapi('http://127.0.0.1:7890/');




///////////////////////Account info////////////////////////////////////////
exports.accountget = function (req, res) {

  console.log("gvfdgfgfdgfdgffhfhgf")
  if (!req.query.address) {
    res.json({ statusCode: 409, responseMessage: "Perameter Missing!!" });
  }else{
   var address = req.query.address
    // {"address": "ND66MLN7BNYZRL27XQRSB5TGMV6PXO4FNWPXW3XB"}
    nem.get('/account/get', {address}, function (data) {
      console.log("body.....", data);
      if(!data){
        res.json({ ERR: "Internal server error" });
      }
     else if (data && data.statusCode == 200) {
        res.json({ data: data.body.account });
      }
      else {
        res.json({ ERR: "Internal server error",data });
      }
    });
  }
 
}
// ////////***********TransactionHash: ee330d2d74f0367087c9df2f396007d3fbc989e3294851eb7435133e2d75cd77
//////////////////Account Genrate /////////////////////////////////////////////
exports.accountgenerate = function (req, res) {
  console.log("===>>>!!!!")
  san.get('/account/generate', {}, function (data) {
    console.log("body.....", data.body);
    if (data && data.statusCode == 200) {
      res.json({ data: data.body });
    }
    else {
      res.json({ ERR: "Internal server error" });
    }
  })


}

////////////////////////////////////////PendingTransaction////////////////////////////////////////
exports.unconfirmedTransactions = function (req, res) {
  console.log("===>>>!!!!")
  var address = req.query.address
  san.get('/account/unconfirmedTransactions', {address}, function (data) {
    console.log("body.....", data);
    if (data && data.statusCode == 200){
      res.json({ data: data.body });
    }
    else {
      res.json({ ERR: "Internal server error" });
    }
  })


}

////////////////////////////Status////////////////////////////////////////////////
exports.accountStatus = function (req, res) {
  console.log("===>>>!!!!")
  var address = req.query.address
  san.get('/account//account/status', {address}, function (data) {
    console.log("body.....", data.body);
    if (data && data.statusCode == 200){
      res.json({ data: data.body });
    }
    else {
      res.json({ err: "Internal server error" });
    }
  })


}
//////////////////////ChainHeight////////////////////////////////////////////////////////

exports.chainheight = function (req, res) {
  console.log("===>>>!!!!@@@@")
  san.get('/chain/height', {}, function (err, response) {

    if (err) {
      res.json(err);
    }
    console.log("===>>>!!!!@@@@")
    res.json(response);
  });


}




// ///////////////IncomingTransfer/////////////////
exports.accounttransfersincoming = function (req, res) {
  console.log("gvfdgf65757867fhgf")
  san.get('/account/transfers/incoming', {
    //NDEVPOSK4OMR4PRTLYFHX4W5QTOND7TZDT2DTU4Q
    'address': 'TBLMKBMX42DGBYFGRH4XSU6RXUM6FRTBRG4KXTVC'

  }, function (err, response) {
    if (err) {
      res.json(err);
    }


    res.json(response);
  });

}

///////////////Transfer/////////////////
exports.accounttransfersall = function (req, res) {
  console.log("gvfdgf65757867fhgf")
  san.get('/account/transfers/all', {

    'address': 'NDEVPOSK4OMR4PRTLYFHX4W5QTOND7TZDT2DTU4Q',

  }, function (err, response) {
    if (err) {
      res.json(err);
    }


    res.json(response);
  });

}


//////////////////Get Acoount Info//////////////////////////////////////
exports.accounthistoricalget = function (req, res) {
  console.log("gvfdgf65757867fhgf")
  san.get('/account/historical/get', {
    'address': 'NDEVPOSK4OMR4PRTLYFHX4W5QTOND7TZDT2DTU4Q',
    'startHeight': '1625825',
    'endHeight': '1625825',
    'increment': '1'
  }, function (response) {

    res.json(response);
  });

}

////////////////////////transferoutgoing////////////////////////////////////
exports.accounttransfersoutgoing = function (req, res) {
  console.log("gvfdgf65757867fhgf")
  san.get('/account/transfers/incoming', {
    //NDEVPOSK4OMR4PRTLYFHX4W5QTOND7TZDT2DTU4Q
    'address': 'TBLMKBMX42DGBYFGRH4XSU6RXUM6FRTBRG4KXTVC'

  }, function (err, response) {
    if (err) {
      res.json(err);
    }


    res.json(response);
  });

}

















exports.transactionpa = function (req, res) {
  // const request  =  require('request'); 
  //   console.log("llllllllllll",req.body);
  //   san.post('/transaction/prepare-announce', {

  //   }, function (err,response) {
  // console.log("#################",err,response);
  //     res.json(response);
  //   });

  // var command = {
  //   "action": "/account/transfers/incoming",
  //   'address': 'TBLMKBMX42DGBYFGRH4XSU6RXUM6FRTBRG4KXTVC'
  //     "transaction":{ 
  //       "timeStamp":Date.now(), 
  //       "amount":3999999, 
  //       "fee":2000000,
  //       "recipient": "TC2JYV4V3AONBZRFVKXTCIFY7I6B6B75YWXKHOBQ", 
  //       "type": 257, 
  //       "deadline":105000000, 
  //       "message": 
  //       { 
  //              "payload": "74657374207472616e73616374696f6e", 
  //              "type": 1 
  //       }, 
  //       "version": -1744830463,
  //       "signer": "c28912115a7d1d6bbc4b01957dbc6c997841601e9c2d8d751897ba6bcc4093e0" 
  // }, 
  // "privateKey": "6eae444f7834a5679a0efb4af4380032968548ecf5af54c5db8abdb5a2384656"
  // }
  // var options = {
  //   url: 'http://localhost:7890/',
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'text/plain'
  //   },
  //   form: JSON.stringify(command)
  // };
  // request(options, function (error, response, data) {
  //   console.log("@@@@@@@@@@@@@",error,data);
  //   if (!error && response.statusCode == 200) {
  //     console.log("RESPONSE IS HERE========>", data);
  //     res.send({
  //       responseCode: 200,
  //       balance: JSON.parse(data)
  //     });
  //   } else {
  //     res.send({
  //       responseCode: 500,
  //       data: JSON.parse(error)
  //     });
  //   }
  // });

  var transactionobject = {
    'isMultisig': false,
    'recipient': "TC2JYV4V3AONBZRFVKXTCIFY7I6B6B75YWXKHOBQ", // Dashes optional, all parsed later.
    'amount': 3999999, // Amount of XEM to send.
    'message': 'Hello reciever!', // Message to send.
    'due': 60 // Not sure what this does but the default is probably fine.
  }
  san.doTX(transactionobject, "6eae444f7834a5679a0efb4af4380032968548ecf5af54c5db8abdb5a2384656", (err, res) => {
    console.log("$$$$$$$$$$$$$$$$$$$$$", err, res);
  });




}




