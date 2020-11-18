import Head from "next/head";
import useSWR from "swr";
import { ProductsList } from "../../components/ProductsList";
import { fetchProducts } from "../../lib/fetchProducts";

function SWRProductsList() {
  const { data: products, error } = useSWR("maybelline", fetchProducts);
  return error ? (
    <div>failed to load</div>
  ) : !products ? (
    <div>loading...</div>
  ) : (
    <ProductsList products={products} />
  );
}

export default function ProductsListPage() {
  return (
    <div>
      <Head>
        <title>Products List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Products List</h1>
      <SWRProductsList />
    </div>
  );
}
