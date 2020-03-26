const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://development:Teles1808@cluster0-5kspy.mongodb.net/client?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);
mongoose.Promise = global.Promise;

module.exports = mongoose;
