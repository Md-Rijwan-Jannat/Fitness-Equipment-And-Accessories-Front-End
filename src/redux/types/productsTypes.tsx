import { TProduct } from "@/types";

export type TQuery = {
  limit?: number;
  category?: string;
};

export type ProductState = {
  product: TProduct | null;
  status: "idle" | "loading" | "succeeded" | "failed";
};
