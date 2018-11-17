import React from  'react';

import { key, appID } from "./config.js";

const express = require('express');
const axios = require('axios');
const app = express();

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Listening on port " + PORT));
