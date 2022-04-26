import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CartToProducts } from "./cart_to_product";

@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  order_id!: number;

  @ManyToOne(() => CartToProducts, (ctp) => ctp.cart)
  cart_products!: CartToProducts;
}
