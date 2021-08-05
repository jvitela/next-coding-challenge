import Head from "next/head";
import { fetchProducts } from "../../../lib/fetchProducts";
import { ProductsList } from "../../../components/ProductsList";

// Next.js will pre-render this page at build time
export async function getStaticProps() {
  const products = await fetchProducts("maybelline");
  return {
    props: { 
      products,
      timestamp: Date.now(),
    },
  };
}

export default function ProductsListPage({ timestamp, products }) {
  const  date = new Date(timestamp);
  return (
    <div>
      <Head>
        <title>Products List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Products List for Maybelline (Server Side Generated)</h1>
      <ProductsList products={products} />
      <small>Generated {date.toLocaleString()} (no revalidation)</small>
    </div>
  );
}
