import {
  BeforeInsert,
  BeforeUpdate,
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
import { UserEntity } from '@auth/entities/user.entity';
import { CatalogueEntity } from '@modules/common/catalogue/catalogue.entity';
import { ActivityEntity } from '@modules/core/activity/activity.entity';

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
  @OneToMany(() => ActivityEntity, (entity) => entity.additionalInformation)
  activities: ActivityEntity[];

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

  @Column({
    name: 'id_ecuatorianosenaccion',
    type: 'varchar',
    unique: true,
    comment: 'id_ecuatorianosenaccion',
  })
  idEcuatorianosenaccion: string;

  @Column({
    name: 'cedula',
    type: 'varchar',
    unique: true,
    comment: 'cedula',
  })
  cedula: string;

  @Column({
    name: 'fecha_nacimiento',
    type: 'timestamp',
    nullable: true,
    comment: 'Fecha de creacion del registro',
  })
  fechaNacimiento: Date;

  @Column({
    name: 'edad',
    type: 'varchar',
    comment: 'edad',
  })
  edad: string;

  @Column({
    name: 'nombres',
    type: 'varchar',
    comment: 'nombres',
  })
  nombres: string;

  @Column({
    name: 'genero',
    type: 'varchar',
    comment: 'genero',
  })
  genero: string;

  @Column({
    name: 'id_provincia',
    type: 'int',
    comment: 'id_provincia',
  })
  idProvincia: number;

  @Column({
    name: 'provincia',
    type: 'varchar',
    comment: 'provincia',
  })
  provincia: string;

  @Column({
    name: 'id_canton',
    type: 'int',
    comment: 'id_canton',
  })
  id_canton: number;

  @Column({
    name: 'canton',
    type: 'varchar',
    comment: 'canton',
  })
  canton: string;

  @Column({
    name: 'id_parroquia',
    type: 'int',
    comment: 'id_parroquia',
  })
  idParroquia: number;

  @Column({
    name: 'parroquia',
    type: 'varchar',
    nullable: true,
    comment: 'parroquia',
  })
  parroquia: string;

  @Column({
    name: 'barrio',
    type: 'varchar',
    nullable: true,
    comment: 'barrio',
  })
  barrio: string;

  @Column({
    name: 'calle_principal',
    type: 'varchar',
    nullable: true,
    comment: 'calle_principal',
  })
  callePrincipal: string;

  @Column({
    name: 'calle_secundaria',
    type: 'varchar',
    comment: 'calle_secundaria',
  })
  calleSecundaria: string;

  @Column({
    name: 'telefono',
    type: 'varchar',
    comment: 'telefono',
  })
  telefono: string;

  @Column({
    name: 'correo',
    type: 'varchar',
    comment: 'correo',
  })
  correo: string;

  @Column({
    name: 'nombre_institucion',
    type: 'varchar',
    comment: 'nombre_institucion',
  })
  nombreInstitucion: string;

  @Column({
    name: 'siglas',
    type: 'varchar',
    comment: 'siglas',
  })
  siglas: string;

  @Column({
    name: 'nombre_actividad',
    type: 'varchar',
    comment: 'nombre_actividad',
  })
  nombreActividad: string;

  @Column({
    name: 'tipo_cuenta',
    type: 'varchar',
    comment: 'tipo_cuenta',
  })
  tipoCuenta: string;

  @Column({
    name: 'numero_cuenta',
    type: 'varchar',
    comment: 'numero_cuenta',
  })
  numeroCuenta: string;

  @Column({
    name: 'nombre_corto',
    type: 'varchar',
    comment: 'nombre_corto',
  })
  nombreCorto: string;

  @Column({
    name: 'nacionalidad',
    type: 'varchar',
    comment: 'nacionalidad',
  })
  nacionalidad: string;

  @Column({
    name: 'consentimiento',
    type: 'varchar',
    comment: 'consentimiento',
  })
  consentimiento: string;

  @Column({
    name: 'terminos_condiciones',
    type: 'varchar',
    comment: 'terminosCondiciones',
  })
  terminosCondiciones: string;

  @Column({
    name: 'fecha_registro',
    type: 'timestamp',
    nullable: true,
    comment: 'fecha_registro',
  })
  fechaRegistro: Date;

  @Column({
    name: 'fecha_modifica',
    type: 'timestamp',
    nullable: true,
    comment: 'fecha_modifica',
  })
  fechaModifica: Date;

  @Column({
    name: 'cumple_edad',
    type: 'varchar',
    comment: 'art2_1_edad30a_64a_11m',
  })
  cumpleEdad: string;

  @Column({
    name: 'cumple_provincia_residencia',
    type: 'varchar',
    comment: 'art2_2_provincia_residencia',
  })
  cumpleProvinciaResidencia: string;

  @Column({
    name: 'cumple_afiliacion_iess',
    type: 'varchar',
    comment: 'art2_3_2_afiliacion_IESS',
  })
  cumpleAfiliacionIess: string;

  @Column({
    name: 'cumple_tipo_afiliacion_iess',
    type: 'varchar',
    comment: 'art2_3_2_tipoafiliacionIESS',
  })
  cumpleTipoAfiliacionIess: string;

  @Column({
    name: 'cumple_beneficios_transferencias_mies',
    type: 'varchar',
    comment: 'art2_4_beneficios_transferencias_MIES',
  })
  cumpleBeneficiosTransferenciasMies: string;

  @Column({
    name: 'cumple_fecha_fallecimiento',
    type: 'varchar',
    comment: 'art2_5_fecha_fallecimiento',
  })
  cumpleFechaFallecimiento: string;

  @Column({
    name: 'cumple_antecedentes_penales',
    type: 'varchar',
    comment: 'art2_6_antecedentes_penales',
  })
  cumpleAntecedentesPenales: string;

  @Column({
    name: 'potencial_beneficiario',
    type: 'varchar',
    comment: 'potencial_beneficiario',
  })
  potencialBeneficiario: string;

  @Column({
    name: 'fecha_corte',
    type: 'timestamp',
    nullable: true,
    comment: 'fecha_corte',
  })
  fechaCorte: Date;

  @Column({
    name: 'numero_pago',
    type: 'varchar',
    nullable: true,
    comment: 'numero_pago',
  })
  numeroPago: string;

  @Column({
    name: 'monto',
    type: 'varchar',
    nullable: true,
    comment: 'monto',
  })
  monto: string;

  @Column({
    name: 'estado_opi',
    type: 'varchar',
    nullable: true,
    comment: 'estado_opi',
  })
  estadoOpi: string;

  @Column({
    name: 'cambio_cuenta',
    type: 'boolean',
    default: false,
    comment: 'cambio_cuenta',
  })
  cambioCuenta: boolean;

  @Column({
    name: 'fecha_emision',
    type: 'varchar',
    nullable: true,
    comment: 'estado_opi',
  })
  fechaEmision: string;

  @Column({
    name: 'fecha_expiracion',
    type: 'varchar',
    nullable: true,
    comment: 'estado_opi',
  })
  fechaExpiracion: string;

  @Column({
    name: 'codigo_actividad',
    type: 'varchar',
    nullable: true,
    comment: 'codigo',
  })
  codigoActividad: string;

  @BeforeInsert()
  @BeforeUpdate()
  setCorreo() {
    if (!this.correo) {
      return;
    }
    this.correo = this.correo.toLowerCase().trim();
  }
}
