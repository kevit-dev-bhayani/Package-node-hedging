import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
// const isUUID = require('class-validator');
// const PrimaryGeneratedColumn = require('typeorm');

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @Column('boolean', { default: false })
  is_deleted!: boolean;
}
