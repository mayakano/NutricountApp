
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


app.use(express.static(__dirname + '/client/build'));



app.get('/food/:input', async (req, res) => {

  let item = await axios.get(`https://api.nutritionix.com/v1_1/search/${req.params.input}?results=0%3A1&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=${appID}&appKey=${keys}`);
  console.log(item)
  let id = item.data.hits[0]._id;
  let {data} = await axios(`https://api.nutritionix.com/v1_1/item?id=${id}&appId=${appID}&appKey=${keys}`);
  res.send(data)
})


let PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Listening on port " + PORT));

