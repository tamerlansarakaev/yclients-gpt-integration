import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'jsonb', default: [] })
  keywords: Array<string>;

  @Column({ type: 'jsonb', default: [] })
  mastersId: Array<number>;
}
