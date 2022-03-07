import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('migrations_typeorm', { schema: 'public' })
export class MigrationsTypeorm {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('bigint', { name: 'timestamp' })
  timestamp: string;

  @Column('character varying', { name: 'name' })
  name: string;
}
