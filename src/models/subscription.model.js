import mongoose { Schema } from "mongoose"

const subsriptionSchema = new Schema({
    Subscriber: {
        type: Schema.Types.ObjectId, //one who is subscribing
        ref: "User"
    },
    channel : {
        type: Schema.Types.ObjectId, //one to whom 'subscriber' is subscribing
        ref: "User"
    }
}, {timestamps: true})



export const Subsription = mongoose.model("Subscription", subsriptionSchema)