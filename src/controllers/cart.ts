import { Response } from "express";
import _ from "lodash";
import { CartToProducts } from "../models/cart_to_product";

const getMyCartItems = async (req: any, res: Response) => {
  const { user } = req.session;

  const myItems = await CartToProducts.find({
    relations: {
      product: true,
      cart: {
        user: true,
      },
    },
    where: {
      cart: {
        user: {
          email: user.email, //finding user by session
        },
      },
    },
  });

  return res.status(200).json(
    myItems.map((items) => {
      const { cart, product } = items;
      //removing password from user in response
      return {
        products: product,
        cart: {
          cart_id: cart.cart_id,
          user: _.omit(cart.user, "password"),
        },
      };
    })
  );
};

export { getMyCartItems };
