const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    skus: [{
        type: Schema.Types.ObjectId,
        ref: 'Sku'
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema);