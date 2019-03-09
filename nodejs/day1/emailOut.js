var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service:'169',
    auth: {
        user:'wutiandengdai@169.com',
        pass:'XX'
    }
});

var emailOptions={
    from:'wutiandengdai@169.com',
    to:'1589401027@yahoo.com',
    subject:'Node JS test',
    text:'For testing only, please ignore.',
    html: '<h1>Welcome</h1><p>Send email with node js!</p>'
};

transporter.sendMail(emailOptions, function(err, info){
    if(err) console.log(err);
    else{
        console.log('Email sent: '+ info.response);
    }
});