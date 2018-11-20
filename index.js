
const express = require('express');
const axios = require('axios');
let keys, appID
if(process.env.PORT) {
  keys = process.env.KEYS;
  appID = process.env.APP_ID;
} else {
  keys  = require('./config.js').keys;
  appID = require('./config.js').appID
}
const app = express();
const nodemailer = require('nodemailer');

app.use(express.static(__dirname + '/client/build'));



app.get('/food/:input', async (req, res) => {

  let item = await axios.get(`https://api.nutritionix.com/v1_1/search/${req.params.input}?results=0%3A1&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=${appID}&appKey=${keys}`);
  console.log(item)
  let id = item.data.hits[0]._id;
  let {data} = await axios(`https://api.nutritionix.com/v1_1/item?id=${id}&appId=${appID}&appKey=${keys}`);
  res.send(data)
})

app.get('/sendMail/:name/:email/:text', (req, res) => {
  let name = req.params.name;
  let email = req.params.email;
  let text = req.params.text;
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'tfaxrb4bf3rfpo6r@ethereal.email',
        pass: '2FpGug5vA2XhZMVUdN'
    }
  });
 
  // setup email data with unicode symbols
  let mailOptions = {
    from: '"'+name+'" <'+email+'>', // sender address
    to: 'info.nutricount@gmail.com', // list of receivers
    subject: `Message from ${name}`, // Subject line
    text: 'Hello world?', // plain text body
    html: `<b>Hello NutriTeam</b><h1>${name} just sent you a message</h1>
          <p>Email: ${email}</p>
          <p>Message: ${text}` // html body
  };
 
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.log(error);
          res.sendStatus(500);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      res.send(true);
  });
 
 })


let PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Listening on port " + PORT));

