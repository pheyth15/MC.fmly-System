/*
 *     MC Inventory Management System
 *     Copyright (C) 2020  Joshua Hero H. Dela Cruz
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

// Model Imports
require('./models/Product');

// configure dotenv
require('dotenv').config();

const api = express();

mongoose.Promise = global.Promise;
// Connecting to database || MongoDB Atlas
// Ignore error about 'must be string...' Database URI is HIDDEN (.env)
mongoose.connect(process.env.MONGODB_URI || process.env.MONGODB_LOCALHOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Headers thingmajigs
api.use(cors());
api.use(helmet());
api.use(bodyParser.json());

// Routes Imports
require('./routes/productRoutes')(api);

// Deprecated in favor of vercel's static hoisting
// api.use(express.static('/public'));

api.get('/api', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');

  // Applies for local electron app
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

const PORT = process.env.PORT || 5000;
api.listen(PORT, () => {
  console.log(`api is running on port ${PORT}`);
});

module.exports = api;
