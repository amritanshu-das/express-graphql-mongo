const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    lineItems: [{
        quantity: {
            type: Number,
            required: true
        },
        sku: {
            type: Schema.Types.ObjectId,
            ref: 'Sku'
        }
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('Quote', quoteSchema);