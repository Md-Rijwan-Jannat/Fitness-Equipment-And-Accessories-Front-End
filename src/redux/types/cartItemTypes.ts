import { TProduct } from "@/types";

export interface TCartItem extends TProduct {
  quantity: number;
}

export type TCartState = {
  items: TCartItem[];
  total: number;
};
