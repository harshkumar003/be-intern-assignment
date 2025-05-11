import { 
    Entity, 
    PrimaryGeneratedColumn, 
    ManyToOne, 
    JoinColumn } from "typeorm";
    
import { User } from './User';

@Entity('follows')
export class Follow{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=> User, user=>user.following)
    @JoinColumn({name: 'followerId'})
    follower: User;

    @ManyToOne(()=> User, user=> user.followers)
    @JoinColumn({name:'followeeId'})
    followee: User;

}