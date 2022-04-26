import {
  BaseEntity,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CartToProducts } from "./cart_to_product";
import { User } from "./user";

@Entity()
export class Cart extends BaseEntity {
  @PrimaryGeneratedColumn()
  cart_id!: number;

  @OneToOne(() => User)
  @JoinColumn()
  user!: User;

  @OneToMany(() => CartToProducts, (ctp) => ctp.cart)
  cart_product!: CartToProducts[];
}
