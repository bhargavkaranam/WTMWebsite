var express = require('express');
var router = express.Router();
var validator = require("email-validator");
var ses = require('nodemailer-ses-transport');
var nodemailer = require('nodemailer');
var config = require('./config');

/* GET users listing. */

router.perform = function(req,res,next) {

	if(req.body.name && req.body.email && req.body.message) {

		if(validator.validate(req.body.email)) {
			var transporter=nodemailer.createTransport(ses({
				accessKeyId: config.smtp_credentials.access,
				secretAccessKey: config.smtp_credentials.secret,
				region: config.smtp_credentials.region
			}));

			var subject = "Message from contact form";

			var messageToSend = "You got a message from the contact form!<br>" + req.body.name + " sent the following message<br>" + req.body.message + "<br>His email is " + req.body.email; 


			var mailOptions = {
				from: '"IECSE" <admin@iecsemanipal.com>',
				to: ['' + config.smtp_credentials.to],
				subject: subject,
				html: messageToSend
			};

			transporter.sendMail(mailOptions, function(error, info) {
				if (error) {


					return res.json({status:false,statusCode:error.statusCode,response:error.message});
				} else {


					return res.json({status:true,statusCode:"200",message:"Message Sent"});
				}
			});
		}
		else
			res.json({status: false})
	}
	else
		res.json({status: false})


};



module.exports = router;
