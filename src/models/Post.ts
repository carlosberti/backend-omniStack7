import mongoose, { Schema } from 'mongoose';

const PostSchema: Schema = new Schema({
    author: {type: String, required: true},
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true,
})

export default mongoose.model('Post', PostSchema);