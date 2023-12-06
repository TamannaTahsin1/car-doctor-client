

import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

const Products = () => {
    const [products, setProducts] = useState()
    useEffect(() =>{
        fetch('service.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
  return (
    <div>
      <div className='text-center'>
        <h3 className='text-xl text-orange-600'>Popular Products</h3>
        <h1 className='text-3xl font-bold'>Browse Our Products</h1>
        <p>
        the majority have suffered alteration in some form, by injected humour, or randomized <br /> words which do not look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    products?.map(product => <ProductsCard key={product._id} product={product}></ProductsCard>)
                }
            </div>
    </div>
  );
};

export default Products;
