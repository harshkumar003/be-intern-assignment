import { Request, Response } from 'express';
import { Follow } from '../entities/Follow';
import { AppDataSource } from '../data-source';

export class FollowController {
  private followRepository = AppDataSource.getRepository(Follow);

  async getAllFollows(req: Request, res: Response) {
    try {
      const follows = await this.followRepository.find();
      res.json(follows);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching follows', error });
    }
  }

  async getFollowById(req: Request, res: Response) {
    try {
      const follow = await this.followRepository.findOneBy({ id: parseInt(req.params.id) });
      if (!follow) {
        return res.status(404).json({ message: 'Follow not found' });
      }
      res.json(follow);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching follow', error });
    }
  }

  async createFollow(req: Request, res: Response) {
    try {
      const follow = this.followRepository.create(req.body);
      const result = await this.followRepository.save(follow);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: 'Error creating follow', error });
    }
  }

  async updateFollow(req: Request, res: Response) {
    try {
      const follow = await this.followRepository.findOneBy({ id: parseInt(req.params.id) });
      if (!follow) {
        return res.status(404).json({ message: 'Follow not found' });
      }
      this.followRepository.merge(follow, req.body);
      const result = await this.followRepository.save(follow);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: 'Error updating follow', error });
    }
  }

  async deleteFollow(req: Request, res: Response) {
    try {
      const result = await this.followRepository.delete(parseInt(req.params.id));
      if (result.affected === 0) {
        return res.status(404).json({ message: 'Follow not found' });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Error deleting follow', error });
    }
  }
}
