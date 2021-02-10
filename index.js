const express = require('express');
const { json } = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const asyncHandler = require('./utils/asyncHandler');
const sort = require('./utils/quicksort');

const app = express();

// Serve static files
app.use('/', express.static(path.join(__dirname, 'public')));

// Mount logger
app.use(morgan('dev'));

app.use(json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server linstening on http://localhost:${PORT}`);
});
