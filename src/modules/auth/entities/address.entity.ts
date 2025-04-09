import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BeforeInsert,
  BeforeUpdate,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { DpaEntity } from '@modules/common/dpa/dpa.entity';
import { UserEntity } from '@auth/entities/user.entity';

@Entity('address', { schema: 'auth' })
export class AddressEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
  })
  deletedAt: Date;

  /** Inverse Relationship **/

  /** Columns **/
  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
  @Column({
    type: 'uuid',
    name: 'user_id',
    nullable: true,
    comment: 'Usuario',
  })
  userId: string;

  @ManyToOne(() => DpaEntity, { nullable: true })
  @JoinColumn({ name: 'province_id' })
  province: DpaEntity;
  @Column({
    type: 'bigint',
    name: 'province_id',
    nullable: true,
    comment: 'Provincia',
  })
  provinceId: number;

  @ManyToOne(() => DpaEntity, { nullable: true })
  @JoinColumn({ name: 'canton_id' })
  canton: DpaEntity;
  @Column({
    type: 'bigint',
    name: 'canton_id',
    nullable: true,
    comment: 'Canton',
  })
  cantonId: number;

  @ManyToOne(() => DpaEntity, { nullable: true })
  @JoinColumn({ name: 'parish_id' })
  parish: DpaEntity;
  @Column({
    type: 'bigint',
    name: 'parish_id',
    nullable: true,
    comment: 'Parroquia',
  })
  parishId: number;

  @Column({
    name: 'neighborhood',
    type: 'varchar',
    nullable: true,
    comment: 'Barrio',
  })
  neighborhood: string;

  @Column({
    name: 'main_street',
    type: 'varchar',
    nullable: true,
    comment: 'Calle Principal',
  })
  mainStreet: string;

  @Column({
    name: 'secondary_street',
    type: 'varchar',
    nullable: true,
    comment: 'Calle Secundaria',
  })
  secondaryStreet: string;

  /** Before Actions **/
}
