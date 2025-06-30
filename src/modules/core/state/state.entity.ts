import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from '@auth/entities';
import { AdditionalInformationEntity } from '@auth/entities/additional-information.entity';

@Entity('states', { schema: 'core' })
export class StateEntity {
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
  @ManyToOne(() => AdditionalInformationEntity, (entity) => entity.activities, {
    nullable: true,
  })
  @JoinColumn({ name: 'additional_information_id' })
  additionalInformation: AdditionalInformationEntity;
  @Column({
    type: 'uuid',
    name: 'additional_information_id',
    nullable: true,
    comment: '',
  })
  additionalInformationId: string;

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

  @Column({
    name: 'habilitado',
    type: 'varchar',
  })
  habilitado: string;

  @Column({
    name: 'direccion_zonal',
    type: 'varchar',
  })
  direccionZonal: string;

  @Column({
    name: 'provincia',
    type: 'varchar',
  })
  provincia: string;

  @Column({
    name: 'cedula',
    type: 'varchar',
  })
  cedula: string;

  @Column({
    name: 'nombres',
    type: 'varchar',
  })
  nombres: string;

  @Column({
    name: 'actividad',
    type: 'varchar',
  })
  actividad: string;

  @Column({
    name: 'curso',
    type: 'varchar',
    nullable: true,
  })
  curso: string;

  @Column({
    name: 'actividad_a_1',
    type: 'varchar',
    nullable: true,
  })
  actividadA1: string;

  @Column({
    name: 'actividad_a_2',
    type: 'varchar',
    nullable: true,
  })
  actividadA2: string;

  @Column({
    name: 'meta_a_1',
    type: 'varchar',
    nullable: true,
  })
  metaA1: string;

  @Column({
    name: 'meta_a_2',
    type: 'varchar',
    nullable: true,
  })
  metaA2: string;

  @Column({
    name: 'actividad_b_1',
    type: 'varchar',
    nullable: true,
  })
  actividadB1: string;

  @Column({
    name: 'actividad_b_2',
    type: 'varchar',
    nullable: true,
  })
  actividadB2: string;

  @Column({
    name: 'meta_b_1',
    type: 'varchar',
    nullable: true,
  })
  metaB1: string;

  @Column({
    name: 'meta_b_2',
    type: 'varchar',
    nullable: true,
  })
  metaB2: string;

  @Column({
    name: 'meta_c_1',
    type: 'varchar',
    nullable: true,
  })
  metaC1: string;

  @Column({
    name: 'meta_c_2',
    type: 'varchar',
    nullable: true,
  })
  metaC2: string;

  @Column({
    name: 'cantidad_a_1',
    type: 'varchar',
    nullable: true,
  })
  cantidadA1: string;

  @Column({
    name: 'cantidad_a_2',
    type: 'varchar',
    nullable: true,
  })
  cantidadA2: string;

  @Column({
    name: 'cantidad_b_1',
    type: 'varchar',
    nullable: true,
  })
  cantidadB1: string;

  @Column({
    name: 'cantidad_b_2',
    type: 'varchar',
    nullable: true,
  })
  cantidadB2: string;

  @Column({
    name: 'cantidad_c_1',
    type: 'varchar',
    nullable: true,
  })
  cantidadC1: string;

  @Column({
    name: 'cantidad_c_2',
    type: 'varchar',
    nullable: true,
  })
  cantidadC2: string;

  @Column({
    name: 'total_cantidad_abril',
    type: 'varchar',
    nullable: true,
  })
  totalCantidadAbril: string;

  @Column({
    name: 'total_cantidad_mayo',
    type: 'varchar',
    nullable: true,
  })
  totalCantidadMayo: string;

  @Column({
    name: 'cumple',
    type: 'varchar',
  })
  cumple: string;

  @Column({
    name: 'comentario',
    type: 'text',
    nullable: true,
  })
  comentario: string;

  @Column({
    name: 'click_count',
    type: 'integer',
    nullable: true,
  })
  clickCount: number;
}
