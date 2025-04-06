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
import { UserEntity } from '@auth/entities/user.entity';
import { CatalogueEntity } from '@modules/common/catalogue/catalogue.entity';

@Entity('additional_information', { schema: 'auth' })
export class AdditionalInformationEntity {
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

  /** Inverse Relationship **/

  /** Foreign Keys **/
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

  @ManyToOne(() => CatalogueEntity, { nullable: true })
  @JoinColumn({ name: 'account_type_id' })
  accountType: CatalogueEntity;
  @Column({
    type: 'uuid',
    name: 'account_type_id',
    nullable: true,
    comment: 'Ahorros',
  })
  accountTypeId: string;

  /** Columns **/
  @Column({
    name: 'account_name',
    type: 'varchar',
    comment: 'Nombre del banco',
  })
  accountName: string;

  @Column({
    name: 'account_number',
    type: 'varchar',
    comment: 'Numero de cuenta del banco',
  })
  accountNumber: string;

  @Column({
    name: 'contact_name',
    type: 'varchar',
    nullable: true,
    comment: 'Nombre de la persona de contacto',
  })
  contactName: string;

  @Column({
    name: 'contact_phone',
    type: 'varchar',
    nullable: true,
    comment: 'Telefono de la persona de contacto',
  })
  contactPhone: string;

  @Column({
    name: 'account_changed',
    type: 'varchar',
    default: false,
    comment: 'Cueenta actualizada',
  })
  accountChanged: boolean;
}
