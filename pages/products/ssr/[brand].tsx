import Head from "next/head";
import { fetchProducts } from "../../../lib/fetchProducts";
import { ProductsList } from "../../../components/ProductsList";
import { brandExists } from "../../../utils/brands";
import React from "react";

export async function getServerSideProps(context) {
  const { brand = "maybelline" } = context.params; // https://makeup-api.herokuapp.com/
  const isExitingBrand = brandExists(brand);

  if (!isExitingBrand) {
    return {
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
      <h1>Products List for {brand} (Server Side Generated)</h1>
      <ProductsList products={products} />
      <small>Generated {date.toLocaleString()}</small>
    </div>
  );
}
