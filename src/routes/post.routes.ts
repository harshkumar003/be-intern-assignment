import express, { Router } from 'express';
import { PostController } from '../controllers/PostController';

export const postRouter: Router = Router();

postRouter.get('/api/posts', new PostController().getAllPosts);
postRouter.get('/api/posts/:id', new PostController().getPostById);
postRouter.post('/api/posts', new PostController().createPost);
postRouter.put('/api/posts/:id', new PostController().updatePost);
postRouter.delete('/api/posts/:id', new PostController().deletePost);

postRouter.get('/api/feed', new PostController().getUserFeed);
