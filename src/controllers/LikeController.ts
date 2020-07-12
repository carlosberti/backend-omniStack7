import Post from '../models/Post';
import {Request, Response} from 'express';

export default {
    async store(req: Request, res: Response) {
        const post = await Post.findById(req.params.id);
        
        //@ts-ignore
        post.likes += 1;

        await post!.save();

        //@ts-ignore
        req.io.emit('like', post);
        
        return res.json(post);
    }
}