var express = require('express');
var router = express.Router();
var validator = require("email-validator");
var smtpTransport = require('nodemailer-smtp-transport');
var nodemailer = require('nodemailer');
var config = require('./config');

/* GET users listing. */

router.perform = function(req,res,next) {

	if(req.body.name && req.body.email && req.body.message) {

		if(validator.validate(req.body.email)) {
			var transporter = nodemailer.createTransport(smtpTransport({
				service : 'gmail',
				auth: {
					user: config.smtp_credentials.email,
					pass: config.smtp_credentials.password
				}
			}));



			transporter.sendMail({
				from: '' + req.body.email,
				to: config.smtp_credentials.to,
				subject: "Message from " + req.body.name,
				html: 'The following message was sent from the contact form ,<br><a href="mailto:"' +req.body.email + '>' + req.body.email + ' sent the following message<br>' + req.body.message,
			}, function(error, response) {
				if (error) 
				{
					console.log(error);
					return res.json({status : false});
				} 
				else 
				{

					return res.json({status : true});
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
