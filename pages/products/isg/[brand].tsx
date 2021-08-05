import Head from "next/head";
import { fetchProducts } from "../../../lib/fetchProducts";
import { ProductsList } from "../../../components/ProductsList";
import { brandExists, mapTopBrands } from "../../../utils/brands";
import React from "react";

const revalidate = 60; // seconds

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  // Get the paths we want to pre-render
  const paths = mapTopBrands((brand) => ({
    params: { brand },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps(context) {
  const { brand = "maybelline" } = context.params;
  const isExitingBrand = brandExists(brand);

  if (!isExitingBrand) {
    return {
      // redirect: {
      //   destination: "/products",
      //   permanent: true,
      // },
      notFound: true,
    };
  }

  const products = await fetchProducts(brand);
  return {
    props: {
      brand,
      products,
      timestamp: Date.now(),
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate, // In seconds    
  };
}

export default function ProductsListPage({ timestamp, brand, products }) {
  const  date = new Date(timestamp);
  return (
    <div>
      <Head>
        <title>Products List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Products List for {brand} (Incremental Static Regeneration)</h1>
      <ProductsList products={products} />
      <small>Generated {date.toLocaleString()}. Revalidates every {revalidate} seconds</small>
    </div>
  );
}
