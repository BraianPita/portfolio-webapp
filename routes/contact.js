const router = require("express").Router();

router.post('/', (req, res, next) => {

    const {email, name, topic, content} = req.body;

    var message = "Email: " + email + 
                "\nName: " + name +
                "\nTopic: " + topic +
                "\nContent: " + content;
    
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_SENDER,
            pass: process.env.EMAIL_PASS
        }
    });

    var mailOptions = {
        from: process.env.EMAIL_SENDER,
        to: process.env.EMAIL_RECEIVER,
        subject: 'Website Contact Request',
        text: message
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

});

module.exports = router;