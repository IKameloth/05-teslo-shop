export interface IProduct {
  _id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  size: ISize[];
  slug: string;
  tags: string[];
  title: string;
  type: IType;
  gender: "men" | "woman" | "kids" | "unisex";
}

export type ISize = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
export type IType = "shirts" | "pants" | "hoodies" | "hats";
