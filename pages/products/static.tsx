import Head from "next/head";
import { fetchProducts } from "../../lib/fetchProducts";
import { ProductsList } from "../../components/ProductsList";

export async function getStaticProps() {
  const products = await fetchProducts("maybelline");
  return {
    props: { products },
  };
}

export default function ProductsListPage({ products }) {
  return (
    <div>
      <Head>
        <title>Products List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Products List</h1>
      <ProductsList products={products} />
    </div>
  );
}
