import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ data }) => {
    return (
        <>
            {data.map((item, index) => (
                <ProductCard
                    item={item}
                    key={item.id}
                />
            ))}
        </>
    );
};

export default ProductsList;
