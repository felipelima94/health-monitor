const mongoose = require('mongoose')

mongoose.connect(process.env.dbUri, { useNewUrlParser: true, useUnifiedTopology: true }).catch(error => handleError(error));