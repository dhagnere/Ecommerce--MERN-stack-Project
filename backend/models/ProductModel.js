const mongoose = require('mongoose');
const Review = require('./ReviewModel');
const imageSchema = mongoose.Schema({
    path : { type: String, required: true} 
});

const productSchema = mongoose.Schema({
    name : { type: String, required: true, unique: true},
    description : { type: String, required: true},
    category : { type: String, required: true},
    count : { type: Number, required: true},
    price : { type: Number, required: true},
    rating : { type: Number},
    reviewsNumber : { type: Number, required: true},
    sales : { type: Number, default: 0 },
    attrs: [{key: String, value: String}],
    images: [imageSchema],
    reviews:[{type: mongoose.Schema.Types.ObjectId, ref: 'Review'}],

}, {
    timestamps: true
})

productSchema.index();
const Product = mongoose.model('Product', productSchema);

module.exports = Product;