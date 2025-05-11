import { Request, Response } from 'express';
import { Like } from '../entities/Like';
import { AppDataSource } from '../data-source';

export class LikeController {
  private likeRepository = AppDataSource.getRepository(Like);

  async getAllLikes(req: Request, res: Response) {
    try {
      const likes = await this.likeRepository.find();
      res.json(likes);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching likes', error });
    }
  }

  async getLikeById(req: Request, res: Response) {
    try {
      const like = await this.likeRepository.findOneBy({ id: parseInt(req.params.id) });
      if (!like) {
        return res.status(404).json({ message: 'Like not found' });
      }
      res.json(like);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching like', error });
    }
  }

  async createLike(req: Request, res: Response) {
    try {
      const like = this.likeRepository.create(req.body);
      const result = await this.likeRepository.save(like);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: 'Error creating like', error });
    }
  }

  async updateLike(req: Request, res: Response) {
    try {
      const like = await this.likeRepository.findOneBy({ id: parseInt(req.params.id) });
      if (!like) {
        return res.status(404).json({ message: 'Like not found' });
      }
      this.likeRepository.merge(like, req.body);
      const result = await this.likeRepository.save(like);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: 'Error updating like', error });
    }
  }

  async deleteLike(req: Request, res: Response) {
    try {
      const result = await this.likeRepository.delete(parseInt(req.params.id));
      if (result.affected === 0) {
        return res.status(404).json({ message: 'Like not found' });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Error deleting like', error });
    }
  }
}
