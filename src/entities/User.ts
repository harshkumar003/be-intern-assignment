import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import {Post} from './Post';
import {Follow} from './Follow';
import {Like} from './Like';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255 })
  firstName: string;

  @Column({ type: 'varchar', length: 255 })
  lastName: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(()=>Post, post=>post.user)
  posts:Post[];

  @OneToMany(()=>Follow, follow=>follow.follower)
  following: Follow[];

  @OneToMany(()=>Follow, follow=>follow.followee)
  followers: Follow[];

  @OneToMany(()=>Like, like =>like.user)
  likes: Like[];
}
