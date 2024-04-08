import React from "react";
import { getProduct } from "../service/product.service";
import Link from "next/link";
import { useLocale } from "next-intl";

const ProductPage = async () => {
  const data = await getProduct();
  const local = useLocale();
  return (
    <div className="flex flex-wrap gap-5 m-[40px] justify-evenly">
        {data.productItem.map(pro => (
          <div className="card card-side bg-base-100 shadow-xl w-[40%]" key={pro.id}>
        <figure className="w-[40%]">
          <img
            src={pro.image}
            alt="Movie"
          />
        </figure>
        <div className="card-body w-[50%]">
          <h2 className="card-title">{pro.product_name}</h2>
          <p className="line-clamp-4">{pro.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <Link href={`/${local}/products/${pro.id}`}>Watch</Link>
              </button>
          </div>
        </div>
      </div>
        ))}
    </div>
  );
};

export default ProductPage;
