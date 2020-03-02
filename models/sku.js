const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const skuSchema = new Schema({
    color: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    parentProduct: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Sku', skuSchema);