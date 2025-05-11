import { Router } from 'express';
import { LikeController } from '../controllers/like.controller';

export const likeRouter = Router();
const likeController = new LikeController();

likeRouter.post('/', likeController.createLike.bind(likeController));
likeRouter.delete('/:id', likeController.deleteLike.bind(likeController));
likeRouter.get('/post/:postId', likeController.getLikesByPostId.bind(likeController));
likeRouter.get('/user/:userId', likeController.getLikesByUserId.bind(likeController));
