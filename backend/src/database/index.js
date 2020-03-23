const mongoose = require('../database/');

mongoose.connect('mongodb+srv://development:Dev123@cluster0-5kspy.mongodb.net/client?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;