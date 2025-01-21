//when mongodb saves data it usually does that in bson(binary json) and not in
//json(javascript object notation) as binary is effiecent needs less time, supports more data type

import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type:String, // cloudinary url
            required: true
        },
        Thumbnail: {
            type:String, // cloudinary url
            required: true
        },
        title: {
            type:String, 
            required: true
        },
        description: {
            type:String, 
            required: true
        },
        duration: {
            type:Number, // cloudinary url
            required: true
        },
        views: {
            type: Number,
            default:0
        },
        isPublished: {
            type:Boolean,
            default: true
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamp: true
    }
)

 

export const Video = mongoose.model("Video", videoSchema)