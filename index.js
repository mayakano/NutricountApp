const express = require('express');
const axios = require('axios');
// const keys = require('./config.js')
const app = express();

app.use(express.static(__dirname + '/client/build'));

app.get('/hello', (req, res) => {
   console.log("hello world")
})


app.get('/food/:input', async (req, res) => {

  let item = await axios('https://api.nutritionix.com/v1_1/search/'+req.params.input+'?results=0%3A1&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=51f04198&appKey=ea4becdf72b24e65723ece2ffe93eaca');
  let id = item.data.hits[0]._id;
  let {data} = await axios('https://api.nutritionix.com/v1_1/item?id='+id+'&appId=51f04198&appKey=ea4becdf72b24e65723ece2ffe93eaca');
  res.send(data)
});


let PORT = 5000;

app.listen(PORT, () => console.log("Listening on port " + PORT));
