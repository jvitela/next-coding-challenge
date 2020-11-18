import { ProductItem } from "../types/ProductItem.type";

const MAKEUP_API: string = "https://makeup-api.herokuapp.com/api/v1";

export async function fetchProducts(
  brand: string
): Promise<Array<ProductItem>> {
  const response = await fetch(`${MAKEUP_API}/products.json?brand=${brand}`);
  const products = await response.json();
  return products;
}
