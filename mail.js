// const nodemailer = require ('nodemailer');
// const mailGun = require ('nodemailer-mailgun-transport')

// const auth = {
//     auth:{
//         api_key: process.env.API_KEY,
//         domain: process.env.DOMAIN
//     }
// };


// const transporter = nodemailer.createTransport(mailGun(auth));

// //step 4
// // (email, text, cb)
// const sendMail = (email, text, cb) => {
//     const mailOptions = {
//         from: email,
//         to: 'dk.energy.recrutement@gmail.com',
//         // NomPrénom,
//         text,
//     };
    
//     transporter.sendMail(mailOptions, function(err, data){
//         if(err){
//            return cb(err, null);

//         }
//             return cb(null, data);    
//     });
// } 

// module.exports = sendMail;

