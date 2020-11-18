import { ProductItem } from "../types/ProductItem.type";
import { ProductsListProps } from "../types/ProductsListProps.type";

export function ProductsList({ products }: ProductsListProps) {
  return (
    <ul>
      {products.map((product: ProductItem) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
