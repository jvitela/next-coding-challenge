import Head from "next/head";
import useSWR from "swr";
import { ProductsList } from "../../components/ProductsList";
import { fetchProducts } from "../../lib/fetchProducts";

function useProductsList() {
  const { data, error } = useSWR("maybelline", fetchProducts, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default function ProductsListPage() {
  const { products, isLoading, isError } = useProductsList();
  return (
    <div>
      <Head>
        <title>Products List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Products List</h1>
      {isLoading ? (
        <div>loading...</div>
      ) : isError ? (
        <div>failed to load</div>
      ) : (
        <ProductsList products={products} />
      )}
    </div>
  );
}
