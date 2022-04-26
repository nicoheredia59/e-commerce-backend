import { BaseEntity, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Category extends BaseEntity {
  @PrimaryColumn()
  name!: string;
}
