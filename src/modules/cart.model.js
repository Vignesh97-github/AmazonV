import { Schema, SchemaType, model } from "mongoose";

const CartSchema = new Schema({
  userId: {
    type:Schema.Types.ObjectId, 
    required:true
  },
  products: {
    type: Array,
    ref:[productname,productdescription,productprice]
  },
  productname:{  type:String,    required:true,  ref:'deals'},

  productdescription:{  type:String,   required:true  },

  productprice:{   type:Number,  required:true  },

  deals:{type:Schema.Types.ObjectId, ref:'discounts'},

  discounts:{type:Number, required:true},

}, { timestamps: true });

const Cart = model('Cart', CartSchema);
export default Cart;
