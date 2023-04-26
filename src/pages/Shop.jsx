import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import ProductsList from "../components/UI/ProductsList";
import { Container, Row } from "reactstrap";
import products from "../assets/data/products";

const Shop = () => {
    const [productsData, setProductsData] = useState(products);

    // function to handle the filter products
    const handleFilter = (e) => {
        const filterValue = e.target.value;
        if (filterValue === "Filter By Category") {
            setProductsData(products);
            return;
        }
        if (filterValue) {
            const filteredProducts = products.filter(
                (product) => product.category === filterValue
            );

            setProductsData(filteredProducts);
            return;
        }
    };

    // function to handle search product
    const handleSearch = (e) => {
        const searchText = e.target.value;
        const searchedProducts = products.filter((product) => {
            return product.productName
                .trim()
                .toLowerCase()
                .includes(searchText.trim().toLowerCase());
        });

        setProductsData(searchedProducts);
    };

    // console.log(productsData);

    return (
        <Helmet title="Shop">
            <CommonSection title="Products" />

            <section>
                <Container>
                    <Row className="flex flex-col gap-3">
                        <div>
                            <div className="search__box w-full flex items-center justify-between border-solid border-[1px] border-primary-color rounded-[5px] px-[10px] cursor-pointer">
                                <input
                                    onChange={handleSearch}
                                    className="w-full border-none outline-none py-[8px] px-[10px]"
                                    type="text"
                                    placeholder="Search..."
                                />
                                <span className="text-primary-color">
                                    <i className="ri-search-line"></i>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                            <div>
                                <select
                                    onChange={handleFilter}
                                    className="py-[8px] px-[20px] border-solid border-[1px] border-primary-color cursor-pointer rounded-[5px] bg-primary-color text-white focus:outline-none"
                                >
                                    <option className="text-[0.9rem]">
                                        Filter By Category
                                    </option>
                                    <option
                                        className="text-[0.9rem]"
                                        value="sofa"
                                    >
                                        Sofa
                                    </option>
                                    <option
                                        className="text-[0.9rem]"
                                        value="mobile"
                                    >
                                        Mobile
                                    </option>
                                    <option
                                        className="text-[0.9rem]"
                                        value="chair"
                                    >
                                        Chair
                                    </option>
                                    <option
                                        className="text-[0.9rem]"
                                        value="watch"
                                    >
                                        Watch
                                    </option>
                                    <option
                                        className="text-[0.9rem]"
                                        value="wireless"
                                    >
                                        Wireless
                                    </option>
                                </select>
                            </div>
                            <div>
                                <select className="py-[8px] px-[20px] border-solid border-[1px] border-primary-color cursor-pointer rounded-[5px] bg-primary-color text-white focus:outline-none">
                                    <option className="text-[0.9rem]">
                                        Sort By
                                    </option>
                                    <option
                                        className="text-[0.9rem]"
                                        value="ascending"
                                    >
                                        Price - Low to High
                                    </option>
                                    <option
                                        className="text-[0.9rem]"
                                        value="descending"
                                    >
                                        Price - High to Low
                                    </option>
                                </select>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>

            <section className="pt-0">
                <Container>
                    <Row>
                        {productsData.length === 0 ? (
                            <h1 className="text-center fs-4">
                                No products are found!
                            </h1>
                        ) : (
                            <ProductsList data={productsData} />
                        )}
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Shop;
