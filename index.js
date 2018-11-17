import { key, appID } from "./config.js";

const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.static(__dirname + '/client/build'));


app.get('/food', async (req, res) => {   
   let item = await axios('https://api.nutritionix.com/v1_1/search/apple?results=0%3A1&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&');
   let id = item.data.hits[0]._id;
   let {data} = await axios('https://api.nutritionix.com/v1_1/item?id='+id+'&');
   res.send(data)   
});


let PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Listening on port " + PORT));
