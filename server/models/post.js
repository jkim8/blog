import moment from 'momnet'
import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: true,
    },
    constents: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        default: -2
    },
    fileUrl: {
        type: String,
        default: "https://source.unsplash.com/random/301x201"
    },
    caterogy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
    },
    date: {
        type: String,
        default: moment().format("YYYY_MM_DD hh:mm:ss")
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "comment"
        }
    ],
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }
})

const Post = mongoose.model("post", PostSchema)

export default Post