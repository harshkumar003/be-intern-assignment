import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn, 
    OneToMany, 
    CreateDateColumn} from 'typeorm';

import {User} from './User';
import { Like } from './Like';

@Entity('posts')
export class Post{

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    content: string;

    @Column('int', {default:0})
    likesCounter: number;

    @Column('text')
    hashtags: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => User, user => user.posts)
    @JoinColumn({name:'userId'})
    user: User;

    @OneToMany(() => Like, like => like.post)
    likes: Like[];
}