// //Step 1
// require('dotenv').config();
// const express = require('express');
// const path = require('path');
// const sendMail = require('./mail');
// const { log } = console;
// const app = express();

// const PORT = 5000; 

// //step 2
// //data parsing
// app.use(express.urlencoded({
//     extended: false
// }));
// app.use(express.json());

// //email, NomPrénom, text

// app.post('/email', (req, res) => {
//     const { email, text } = req.body;
//     log('Data: ', req.body);

//     sendMail(email, text, function(err, data) {
//         if (err) {
//             log('ERROR: ', err);
//             return res.status(500).json({ message: err.message || 'Internal Error' });
//         }
//         log('Email sent!!!');
//         return res.json({ message: 'Email sent!!!!!' });
//     });
// });



// app.use( express.static(__dirname + '/'));
// //Render home page
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname + "/index.html"));
// });


// app.listen (PORT, () => log('Server is starting on PORT,',5000));