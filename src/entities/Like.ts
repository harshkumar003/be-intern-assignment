import { 
    Entity, 
    PrimaryGeneratedColumn, 
    JoinColumn, 
    ManyToOne } from "typeorm";
    
import { User } from './User';
import { Post } from './Post';

@Entity('likes')
export class Like {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user=>user.likes)
    @JoinColumn({name: 'userId'})
    user:User;

    @ManyToOne(()=> Post, post=>post.likes)
    @JoinColumn({name: 'postId'})
    post:Post;
}

