var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate-v2')

const schema = new mongoose.Schema({
    
    BTC: String,
    // ETH: String,
    // USDT: String,
    BNB: String,
    BUSD: String,
    date : String
    
},{ collection: 'charts'})

schema.plugin(mongoosePaginate);

module.exports = mongoose.model('charts', schema)