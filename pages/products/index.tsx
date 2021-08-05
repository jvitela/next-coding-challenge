import React from "react";
import Link from "next/link";
import Head from "next/head";
import { mapBrands } from "../../utils/brands";

export default function BrandsIndex() {
  return (
    <section>
      <Head>
        <title>Brands</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Selected a brand (Static Page)</h2>
      <ul>
        {mapBrands((brand) => (
          <li>
            {brand}
            &nbsp;
            <Link href={`/products/isg/${encodeURIComponent(brand)}`} prefetch={false}>
              <a>(isg)</a>
            </Link>
            &nbsp;
            <Link href={`/products/ssr/${encodeURIComponent(brand)}`} prefetch={false}>
              <a>(ssr)</a>
            </Link>
            {brand === "maybelline" && (
              <>
                &nbsp;
                <Link href="/products/ssg/maybelline">
                  <a>(ssg)</a>
                </Link>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
