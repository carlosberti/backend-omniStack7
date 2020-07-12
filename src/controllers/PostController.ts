import Post from '../models/Post';
import {Request, Response} from 'express';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

export default {
    async index(_req: Request, res: Response) {
        const posts = await Post.find().sort('-createdAt');

        return res.json(posts);
    },

    async store(req: Request, res: Response) {
        const { author, place, description, hashtags } = req.body;
        const { filename: image } = req.file; 

        const [name] = image.split('.');

        const fileName = `${name}.jpg`

        await sharp(req.file.path)
            .resize(500)
            .jpeg({quality: 70})
            .toFile(path.resolve(req.file.destination, 'resized', fileName));

        fs.unlinkSync(req.file.path);

        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image: fileName,
        })

        //@ts-ignore
        req.io.emit('post', post);

        return res.json(post)
    }
}