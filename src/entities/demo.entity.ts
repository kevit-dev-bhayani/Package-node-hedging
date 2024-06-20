import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity()
export class Demo extends BaseEntity{
  @Column({
    type: "varchar"
  })
  name!: string;
}