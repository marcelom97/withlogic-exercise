const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server linstening on http://localhost:${PORT}`);
});
