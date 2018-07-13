const mongoose = require('mongoose');
const getDefaultSchema = () => {
    return new mongoose.Schema({
        symbol: {
            type: String,
            required: true
        },
        volume: {
            type: String
        },
        last: {
            type: String
        },
        bid: {
            type: String
        },
        ask: {
            type: String
        },
        high: {
            type: String
        },
        low: {
            type: String
        },
        currentTimestamp : {type : Date, default : Date.now()}
    });
}


mongoose.model('AltexSchema', getDefaultSchema(), 'altex');
mongoose.model('HitBTCSchema', getDefaultSchema(), 'hitbtc');