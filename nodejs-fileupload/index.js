const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const multer = require('multer');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
