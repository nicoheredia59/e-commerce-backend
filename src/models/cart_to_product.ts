import {
  BaseEntity,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cart } from "./cart";
import { Order } from "./order";
import { Product } from "./product";

@Entity()
export class CartToProducts extends BaseEntity {
  @PrimaryGeneratedColumn()
  cart_products_id!: number;

  @OneToMany(() => Order, (order) => order.order_id)
  order!: Order[];

  @ManyToOne(() => Cart, (cart) => cart.cart_product)
  cart!: Cart;

  @ManyToOne(() => Product, (product) => product.cart_product)
  product!: Product;
}
