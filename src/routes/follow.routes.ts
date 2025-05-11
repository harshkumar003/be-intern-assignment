import { Router } from 'express';
import { FollowController } from '../controllers/follow.controller';

export const followRouter = Router();
const followController = new FollowController();

followRouter.post('/', followController.createFollow.bind(followController));
followRouter.delete('/:id', followController.deleteFollow.bind(followController));
followRouter.get('/:userId', followController.getUserFollowers.bind(followController));
followRouter.get('/:userId/following', followController.getUserFollowing.bind(followController));
