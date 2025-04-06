import { Schema, model } from "mongoose";

const PaymentSchema = new Schema({
  orderId: {
    type: Schema.Types.ObjectId,
    ref: 'Order',
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  paymentMethod: {
    type: String,
    enum: ['card', 'paypal', 'razorpay', 'stripe', 'cod'], // add more as needed
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'successful', 'failed'],
    default: 'pending'
  },
  transactionId: {
    type: String,
    required: true
  },
  amountPaid: {
    type: Number,
    required: true
  },
  paymentDate: {
    type: Date,
    default: Date.now
  },
  providerData: {
    type: Schema.Types.Mixed, // store gateway-specific response here
    default: {}
  }
}, { timestamps: true });

const Payment = model('Payment', PaymentSchema);
export default Payment;
