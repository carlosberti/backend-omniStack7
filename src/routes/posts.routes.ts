import { Router } from 'express';
import multer from 'multer';
import PostController from '../controllers/PostController';
import uploadConfig from '../config/upload';
import LikeController from '../controllers/LikeController';

const postsRouter = Router();
const upload = multer(uploadConfig);

postsRouter.get('/', PostController.index);
postsRouter.post('/', upload.single('image'), PostController.store);
postsRouter.post('/:id/like', LikeController.store);


export default postsRouter  ;