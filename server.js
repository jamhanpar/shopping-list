const express = require('express');
const mongoose = require('mongoose'); // ORM tube to help interact with MongoDB
const bodyParser = require('body-parser'); // get data from the body
const path = require('path');
const cors = require('cors');

const items = require('./routes/api/items');

// initializing express
const app = express();

// bodyparser middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);       // anytime you use the routes /api/items/*, it will redirect to that file

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

// // server static assets if in production
// if (process.env.NODE_ENV === 'production') {
//   // set static folder
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }
