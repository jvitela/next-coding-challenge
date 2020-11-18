import Head from "next/head";
import { fetchProducts } from "../../lib/fetchProducts";
import { ProductsList } from "../../components/ProductsList";

export async function getServerSideProps(context) {
  const { brand = "maybelline" } = context.params; // https://makeup-api.herokuapp.com/
  const products = await fetchProducts(brand);
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
