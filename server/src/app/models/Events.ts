import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  
  import Users from './Users';
  
  @Entity('events')
  class Events {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    user_id: string;
  
    @ManyToOne(() => Users)
    @JoinColumn({ name: 'user_id' })
    service_giver: Users;
  
    @Column()
    name: string;
  
    @Column()
    local: string;
  
    @Column()
    photograph: string;

    @Column()
    comment: string;
  }
  
  export default Events;
  