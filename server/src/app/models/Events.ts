import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,  } from 'typeorm';
import { JoinAttribute } from 'typeorm/query-builder/JoinAttribute';
import User from './Users';

@Entity('events')
class Events{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    user_id: string;

    @ManyToOne(() =>User)
    @JoinColumn({name:'user_id'})
    user:User;

    @Column()
    name: string;

    @Column()
    local: string;

    @Column()
    photos: string;

    @Column()
    comment: string;

}

export default Events;