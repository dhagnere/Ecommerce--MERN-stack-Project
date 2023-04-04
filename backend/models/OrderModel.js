const mongoose = require('mongoose')
const User = require('./UserModel')

const orderSchema = mongoose.Schema(
  {
    //each order will have a user, so we import userModel
    user: {
      //we will use the id of the user
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    orderTotal: {
      //we will use this field to know the total price of the order
      itemsCount: { type: Number, required: true },
      cartSubTotal: { type: Number, required: true },
    },
    cartItems: [
      {
        //we will use the name of the product
        name: { type: String, required: true },
        price: { type: Number, required: true },
        //quantity: is here to follow the quantity of the product in the order
        quantity: { type: Number, required: true },
        // count: is here to follow the quantity of the product in the stock
        count: { type: Number, required: true },
        image: { path: { type: String, required: true } },
      },
    ],
    //we will use this field to know the status of the order
    transactionResult: {
      status: { type: String },
      createTime: { type: String },
      amount: { type: String },
    },
    //we will use this field to know if the order is paid or not
    isPaid: { type: Boolean, required: true, default: false },
    //we will use this field to know  the order' s  date or payement
    paidAt: { type: Date },
    //we will use this field to know if the order is delivered or not
    isDelivered: { type: Boolean, required: true, default: false },
    //we will use this field to know the date of delivery
    deliveredAt: { type: Date },
  },
  { timestamps: true }
)

const Order = mongoose.model('Order', orderSchema)
module.exports = Order
