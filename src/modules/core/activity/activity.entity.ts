import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from '@auth/entities';

@Entity('activities', { schema: 'core' })
export class ActivityEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_timestampP',
    comment: 'Fecha de creacion del registro',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_timestampP',
    comment: 'Fecha de actualizacion de la ultima actualizacion del registro',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    comment: 'Fecha de eliminacion del registro',
  })
  deletedAt: Date;

  @Column({
    name: 'enabled',
    type: 'boolean',
    default: true,
    comment: 'true=visible, false=no visible',
  })
  enabled: boolean;

  /** Inverse Relationship **/

  /** Foreign Keys **/
  @ManyToOne(() => UserEntity, (entity) => entity.activities, {
    nullable: true,
  })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
  @Column({
    type: 'uuid',
    name: 'user_id',
    nullable: true,
    comment: '',
  })
  userId: string;

  /** Columns **/
  @Column({
    name: 'code',
    type: 'varchar',
    comment: 'Codigo de la actividad',
  })
  code: string;

  @Column({
    name: 'description',
    type: 'varchar',
    comment: 'Descripcion de la actividad',
  })
  description: string;

  @Column({
    name: 'name',
    type: 'varchar',
    comment: 'Nombre de la actividad',
  })
  name: string;

  @Column({
    name: 'completed',
    type: 'boolean',
    default: true,
    comment: 'Si ya completo',
  })
  completed: boolean;

  @Column({
    name: 'sort',
    type: 'int',
    comment: 'Orden',
  })
  sort: number;

  @Column({
    name: 'category',
    type: 'varchar',
    comment: 'Tipo de actividad',
  })
  category: string;
}
